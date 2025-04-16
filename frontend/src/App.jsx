import React, { useState } from "react";
import "./App.css";

function App() {
  const [kanji, setKanji] = useState("");
  const [kanjiData, setKanjiData] = useState(null);

  const handleSearch = async () => {
    if (!kanji.trim()) return;
    try {
      const response = await fetch(`http://localhost:5000/api/kanji/${kanji}`);
      const data = await response.json();
      setKanjiData(data);
    } catch (error) {
      console.error("Error fetching kanji:", error);
    }
  };

  return (
    <div className="container">
      <h1>Kanji Finder</h1>
      <div className="search-box">
        <input
          type="text"
          value={kanji}
          onChange={(e) => setKanji(e.target.value)}
          placeholder="Introduce un Kanji"
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {kanjiData && (
        <div className="kanji-card">
          <div className="kanji-left">
            <span className="kanji-symbol">{kanjiData.kanji}</span>
          </div>
          <div className="kanji-info">
            <p><strong>Significados:</strong> {kanjiData.meanings.join(", ")}</p>
            <p><strong>Lecturas On:</strong> {kanjiData.on_readings.join(", ")}</p>
            <p><strong>Lecturas Kun:</strong> {kanjiData.kun_readings.join(", ")}</p>
            <p><strong>Radical principal:</strong> {kanjiData.radical?.symbol || "-"}</p>
            <p><strong>Nivel JLPT:</strong> {kanjiData.jlpt || "-"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
