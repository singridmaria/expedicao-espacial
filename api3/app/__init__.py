from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crud.db'
db = SQLAlchemy(app)
api= Api(app)

from app.models.missao import Missao
with app.app_context():
    db.create_all()
    
from app.view.reso_missao import Index, MissaoCreate
api.add_resource(Index,'/')
api.add_resource(MissaoCreate,'criar')