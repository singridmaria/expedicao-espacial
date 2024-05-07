from app import db

class Mission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    data_lancamento = db.Column(db.Date, nullable=False)
    destino = db.Column(db.String(100), nullable=False)
    estado_missao = db.Column(db.String(50), nullable=False)
    duracao_missao = db.Column(db.String(50), nullable=False)