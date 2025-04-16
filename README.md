# Kanji Finder

Una aplicación web desarrollada con **Flask (Python)** para apoyar el aprendizaje y práctica de **kanjis japoneses**, consumiendo datos en tiempo real desde la API pública [kanjiapi.dev](https://kanjiapi.dev/). Ideal para estudiantes de japonés (como yo) que desean consultar kanjis por niveles JLPT, significados o lecturas de manera rápida y accesible desde cualquier dispositivo.

## 🌐 Características

- Visualización dinámica de kanjis usando una API externa.
- Consulta por kanji individual y visualización de su significado, lecturas y nivel JLPT.
- Interfaz sencilla, amigable y adaptable a dispositivos móviles.
- Arquitectura web liviana y extensible con Flask.

## 🛠️ Tecnologías utilizadas

- [Python 3.x](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/)
- [kanjiapi.dev](https://kanjiapi.dev/) (API REST gratuita de kanjis)
- HTML5 + CSS3
- Jinja2 (para plantillas)

## 🔌 API utilizada

Este proyecto consume los datos desde:

```
https://kanjiapi.dev/v1/kanji/<kanji>
```

Por ejemplo, para consultar el kanji 日:

```
https://kanjiapi.dev/v1/kanji/日
```

La respuesta incluye lecturas on'yomi, kun'yomi, significado, número de trazos, y nivel JLPT.

## 🚀 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/mvgarc/Kanji_App.git
cd Kanji_App
```

2. Crea y activa un entorno virtual (opcional pero recomendado):

```bash
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
```

3. Instala las dependencias:

```bash
pip install -r requirements.txt
```

4. Ejecuta la aplicación:

```bash
flask run
```

> Asegúrate de tener configurada la variable de entorno `FLASK_APP` (por ejemplo, `app.py`).

## 📁 Estructura del proyecto

```bash
Kanji_App/
├── app.py
├── static/
│   └── style.css
├── templates/
│   └── index.html
├── requirements.txt
└── README.md
```

## 🔮 Mejoras futuras

- Búsqueda por lectura o significado.
- Ejercicios interactivos para practicar kanjis.
- Historial de kanjis consultados.
- Modo oscuro.

## 🤝 Contribuciones

¿Tienes ideas o quieres mejorar la app? ¡Los pull requests y sugerencias son bienvenidos!

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Revisa el archivo `LICENSE` para más detalles.
