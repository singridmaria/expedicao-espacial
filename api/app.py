from flask import Flask
from flask import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///missions.db'  # Defina o URI do banco de dados SQLite
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Importe os modelos de dados
from models.missions import Mission

# Rota de teste
@app.route('/')
def index():
    return 'API de Missões'

if __name__ == '__main__':
    app.run(debug=True)