import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import environ


class Configuration:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = environ.get("DATABASE_URL") or \
        "postgresql://order_up:9cCxydbt@localhost/order_up_dev"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


# flask_app = Flask(__name__)
# flask_app.config.from_object(Config)
# db = SQLAlchemy(flask_app)
