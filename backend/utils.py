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
def validate_kanji_input(kanji: str) -> bool:
    """
    Valida que la entrada del kanji sea válida.

    Args:
        kanji (str): El kanji a validar.

    Returns:
        bool: True si es válido, False en caso contrario.
    """
    return bool(kanji.strip()) and len(kanji) == 1 and '\u4e00' <= kanji <= '\u9faf'

def format_kanji_data(data: dict) -> dict:
    """
    Formatea los datos del kanji para su uso en la plantilla.

    Args:
        data (dict): Datos sin procesar del kanji desde la API.

    Returns:
        dict: Datos formateados con claves específicas.
    """
    return {
        "meanings": data.get("meanings", ["No meanings found"]),
        "kun_readings": data.get("kun_readings", ["No kun readings found"]),
        "on_readings": data.get("on_readings", ["No on readings found"]),
    }