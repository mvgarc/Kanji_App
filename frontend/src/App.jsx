import { useState } from "react";
import "./index.css";

function App() {
  const [search, setSearch] = useState("");
  const [kanjiData, setKanjiData] = useState([]);

  const handleSearch = async () => {
    const chars = search.trim().split("");

    const results = await Promise.all(
      chars.map(async (kanji) => {
        try {
          const response = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`);
          if (response.ok) {
            return await response.json();
          } else {
            return { character: kanji, error: "Kanji no encontrado" };
          }
        } catch (error) {
          return { character: kanji, error: "Error de conexión" };
        }
      })
    );

    setKanjiData(results);
  };

  return (
    <div className="app-container">
      <h1>Kanji Finder</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Escribe uno o más kanjis"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      <div className="results-container">
        {kanjiData.map((data, index) => (
          <div key={index} className="kanji-card">
            <h2>{data.character}</h2>
            {data.error ? (
              <p className="error">{data.error}</p>
            ) : (
              <ul>
                <li><strong>Significados:</strong> {data.meanings.join(", ")}</li>
                <li><strong>Lecturas On:</strong> {data.on_readings.join(", ")}</li>
                <li><strong>Lecturas Kun:</strong> {data.kun_readings.join(", ")}</li>
                <li><strong>Radical principal:</strong> {data.radical ?? "-"}</li>
                <li><strong>Nivel JLPT:</strong> {data.jlpt}</li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
