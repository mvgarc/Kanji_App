from flask import Blueprint, render_template, request
from utils import fetch_kanji_info, validate_kanji_input, format_kanji_data

bp = Blueprint('routes', __name__)

@bp.route('/', methods=['GET', 'POST'])
def index():
    kanji_info = None
    if request.method == 'POST':
        kanji = request.form['kanji']
        if validate_kanji_input(kanji):
            response = fetch_kanji_info(kanji)
            if response["success"]:
                kanji_info = {
                    "kanji": kanji,
                    **format_kanji_data(response["data"])
                }
            else:
                kanji_info = {"error": response["error"]}
        else:
            kanji_info = {"error": "Por favor, ingresa un solo kanji válido."}
    return render_template('index.html', kanji_info=kanji_info)
