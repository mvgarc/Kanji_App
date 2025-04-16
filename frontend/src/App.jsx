import { useState } from 'react';
import './App.css';

function App() {
  const [kanji, setKanji] = useState('');
  const [data, setData] = useState(null);

  const fetchKanji = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/kanji/${kanji}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Buscador de Kanji</h1>
      <form onSubmit={fetchKanji} className="flex mb-4">
        <input
          type="text"
          value={kanji}
          onChange={(e) => setKanji(e.target.value)}
          className="p-2 border border-gray-400 rounded-l"
          placeholder="Enter a Kanji"
        />
        <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">
          Search
        </button>
      </form>
      
      {data && (
        <div className="bg-white p-6 shadow rounded w-full max-w-4xl flex gap-8">
          {/* Columna izquierda: Kanji */}
          <div className="flex items-center justify-center w-1/3 border-r-2 border-gray-200">
          <span className="text-[8rem] font-extrabold text-gray-800">{data.kanji}</span>
          </div>
          
          {/* Columna derecha: Información */}
          <div className="w-2/3 flex flex-col justify-center gap-3">
          <p><strong className="text-blue-700">Meanings:</strong> {data.meanings.join(', ')}</p>
          <p><strong className="text-blue-700">On'yomi:</strong> {data.on_readings.join(', ')}</p>
          <p><strong className="text-blue-700">Kun'yomi:</strong> {data.kun_readings.join(', ')}</p>
          <p><strong className="text-blue-700">JLPT Level:</strong> {data.jlpt}</p>
          <p><strong className="text-blue-700">Stroke Count:</strong> {data.stroke_count}</p>
          </div>
          </div>
        )}
    </div>
  );
}

export default App;
