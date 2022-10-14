"""
Abstract::
    - 
History::
    - Ver.      Date            Author        History
    - 
"""
# External library
from app.db import db
from flask_cors import CORS
from flask import Flask, jsonify, render_template

# Internal library


def create_app() -> Flask:
    """
    Create Flask Application Instance
    :return: Flask Application Instance
    """
    app = Flask(
        __name__,
        instance_relative_config=True,
        static_folder="../../client/dist/static",
        template_folder="../../client/dist",
    )

    uri = "postgresql+psycopg2://postgres:postgres@db/postgres"
    
    app.config["SQLALCHEMY_DATABASE_URI"] = uri

    db.init_app(app)
    
    db.app = app

    CORS(app)

    # デフォルトのルート
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def root(path):
        return render_template("index.html")

    @app.route('/health')
    def health():
        return jsonify({}, 200)
    return app
