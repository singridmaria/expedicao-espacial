from flask import jsonify
from app.models.missao import Missao
from flask_restful import Resource, reqparse

argumentos = reqparse.RequestParser()
argumentos.add_argument('nome', type=str)
argumentos.add_argument('data_lancamento', type=str)
argumentos.add_argument('destino', type=str)
argumentos.add_argument('estado', type=str)
argumentos.add_argument('duracao_meses', type=int)
argumentos.add_argument('custo', type=float)
argumentos.add_argument('status', type=str)

class Index(Resource):
    def get(self):
        return jsonify("Welcome Aplication Flask")

class MissaoCreate(Resource):
    def post(self):
        try:
            dados = argumentos.parse_args()
            missao = Missao(**dados)
            missao.save()  # Supondo que você tenha um método `save()` na classe Missao para salvar a instância no banco de dados
            return {"message": 'Missão criada com sucesso'}, 200
        except Exception as e:
            return jsonify({'status': 500, 'msg': f'{e}'}), 500
