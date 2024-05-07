from app import db

class Missao(db.Model):
    try:
        id = db.Column(db.Integer, primary_key=True, autoincrement=True)
        nome = db.Column(db.String(100))
        data_lancamento = db.Column(db.Date)
        destino = db.Column(db.String(100))
        estado = db.Column(db.String(100))
        duracao_meses = db.Column(db.Integer)
        custo = db.Column(db.Float)
        status = db.Column(db.String(100))
    except Exception as e:
        print("Ocorreu um erro ao criar a tabela Missao:", e)

class Tripulacao(db.Model):
    try:
        id = db.Column(db.Integer, primary_key=True, autoincrement=True)
        id_missao = db.Column(db.Integer, db.ForeignKey('missao.id'))
        nome_tripulante = db.Column(db.String(100))
    except Exception as e:
        print("Ocorreu um erro ao criar a tabela Tripulacao:", e)

class CargaUtil(db.Model):
    try:
        id = db.Column(db.Integer, primary_key=True, autoincrement=True)
        nome_equipamento = db.Column(db.String(100))
        id_missao = db.Column(db.Integer, db.ForeignKey('missao.id'))
    except Exception as e:
        print("Ocorreu um erro ao criar a tabela CargaUtil:", e)
