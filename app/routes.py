from flask import Blueprint, render_template, request
import requests

bp = Blueprint('routes', __name__)

@bp.route('/', methods=['GET', 'POST'])
def index():
    kanji_info = None

    if request.method == 'POST':
        kanji = request.form['kanji']

        if kanji:
            url= f"https://kanjiapi.dev/v1/kanji/{kanji}"
            response = request.get(url)

            if response.status_code ==200:
                kanji_data = response.json

                kanji_info = {
                    "kanji": kanji,
                    "meanings": kanji_data.get("meanings", ["No meaning found"]),
                    "kun_readings": kanji_data.get("kun_readings", ["No readings found"]),
                }