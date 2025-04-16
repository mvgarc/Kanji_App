// App.jsx
import React, { useState } from 'react';
import './index.css';

function App() {
  const [kanji, setKanji] = useState('');
  const [kanjiData, setKanjiData] = useState(null);
  const [error, setError] = useState(null);

  const fetchKanji = async () => {
    try {
      const response = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`);
      if (!response.ok) throw new Error('Kanji no encontrado');
      const data = await response.json();
      setKanjiData(data);
      setError(null);
    } catch (err) {
      setKanjiData(null);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Kanji Info App
      </h1>

      <div className="max-w-xl mx-auto flex flex-col items-center">
        <input
          type="text"
          value={kanji}
          onChange={(e) => setKanji(e.target.value)}
          placeholder="Introduce un Kanji"
          className="px-4 py-2 border border-gray-300 rounded-md w-full mb-4"
        />
        <button
          onClick={fetchKanji}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Buscar Kanji
        </button>
      </div>

      {error && (
        <p className="text-red-500 text-center mt-4">{error}</p>
      )}

      {kanjiData && (
        <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="text-8xl font-bold text-blue-600">{kanjiData.kanji}</div>
          <div className="flex-1 space-y-3">
            <p><strong>Significados:</strong> {kanjiData.meanings.join(', ')}</p>
            <p><strong>Lecturas On:</strong> {kanjiData.on_readings.join(', ')}</p>
            <p><strong>Lecturas Kun:</strong> {kanjiData.kun_readings.join(', ')}</p>
            <p><strong>Radical principal:</strong> {kanjiData.radical?.symbol} - {kanjiData.radical?.meaning}</p>
            <p><strong>Nivel JLPT:</strong> {kanjiData.jlpt || 'Desconocido'}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
