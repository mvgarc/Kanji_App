from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Permite llamadas desde React

@app.route('/api/kanji/<kanji>')
def get_kanji_info(kanji):
    url = f"https://kanjiapi.dev/v1/kanji/{kanji}"
    response = requests.get(url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Kanji not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
