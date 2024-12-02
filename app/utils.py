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
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return {
                "success": True,
                "data": response.json()
            }
        else:
            return {
                "success": False,
                "error": f"Error en la solicitud: {response.status_code}."
            }
    except requests.exceptions.RequestException as e:
        return {
            "success": False,
            "error": f"Error al conectarse con la API: {str(e)}."
        }