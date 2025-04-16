import React, { useState } from "react";

function App() {
  const [kanji, setKanji] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    const response = await fetch(`http://localhost:5000/api/kanji/${kanji}`);
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Kanji Finder</h1>

        <div className="flex justify-center mb-6">
          <input
            type="text"
            value={kanji}
            onChange={(e) => setKanji(e.target.value)}
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            placeholder="Ingresa un kanji"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Buscar
          </button>
        </div>

        {data && (
          <div className="flex gap-8 items-start mt-8">
            {/* Kanji grande a la izquierda */}
            <div className="text-9xl font-bold text-blue-700 w-1/3 text-center">{data.kanji}</div>

            {/* Detalles a la derecha */}
            <div className="w-2/3">
              <p><strong>Significados:</strong> {data.meanings.join(", ")}</p>
              <p><strong>Lecturas On:</strong> {data.on_readings.join(", ")}</p>
              <p><strong>Lecturas Kun:</strong> {data.kun_readings.join(", ")}</p>
              <p><strong>Radical principal:</strong> {data.radical || "-"}</p>
              <p><strong>Nivel JLPT:</strong> {data.jlpt || "N/A"}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
