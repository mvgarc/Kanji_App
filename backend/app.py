from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Permite llamadas desde React

# Ruta para consultar un kanji específico
@app.route('/api/kanji/<kanji>')
def get_kanji_info(kanji):
    url = f"https://kanjiapi.dev/v1/kanji/{kanji}"
    response = requests.get(url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Kanji not found'}), 404

# Ruta para obtener todos los kanjis
@app.route('/api/kanji/all')
def get_all_kanji():
    url = "https://kanjiapi.dev/v1/kanji/all"
    response = requests.get(url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to fetch kanji list'}), 500

if __name__ == '__main__':
    app.run(debug=True)
