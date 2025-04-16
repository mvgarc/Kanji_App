import React, { useState, useEffect } from "react";

const App = () => {
  const [kanji] = useState("日");
  const [kanjiData, setKanjiData] = useState(null);

  useEffect(() => {
    fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`)
      .then((res) => res.json())
      .then((data) => setKanjiData(data))
      .catch((err) => console.error("Error:", err));
  }, [kanji]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row max-w-4xl w-full">
        {/* Kanji grande a la izquierda */}
        <div className="md:w-1/2 p-10 flex items-center justify-center border-b md:border-b-0 md:border-r">
          <h1 className="text-8xl font-bold text-gray-800">{kanjiData?.kanji}</h1>
        </div>

        {/* Información a la derecha */}
        <div className="md:w-1/2 p-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Información del Kanji</h2>
          {kanjiData ? (
            <div className="space-y-3 text-gray-700">
              <p><strong>Lectura Onyomi:</strong> {kanjiData.on_readings.join(", ")}</p>
              <p><strong>Lectura Kunyomi:</strong> {kanjiData.kun_readings.join(", ")}</p>
              <p><strong>Significado(s):</strong> {kanjiData.meanings.join(", ")}</p>
              <p><strong>Nivel JLPT:</strong> {kanjiData.jlpt || "No disponible"}</p>
              <p><strong>Stroke Count:</strong> {kanjiData.stroke_count}</p>
            </div>
          ) : (
            <p>Cargando datos...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
