from flask import Flask

def create_app():
    app = Flask(__name__)
    
    # Importar y registrar los blueprints
    from .routes import bp as routes_bp
    app.register_blueprint(routes_bp)

    # Configuraciones adicionales
    app.config['SECRET_KEY'] = ' '

    return app
