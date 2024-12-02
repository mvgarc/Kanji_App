import requests

def fetch_kanji_info(kanji: str) -> dict:
    """
    Realiza una solicitud a la API de Kanji y devuelve la información del kanji.

    Args:
        kanji (str): El kanji a buscar.

    Returns:
        dict: Información del kanji o un mensaje de error.
    """
    url = f"https://kanjiapi.dev/v1/kanji/{kanji}"