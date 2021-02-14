from json import loads, dumps
from Game import game
from flask import Flask, request
from piezas.Excepciones import Error
from sys import exc_info

app = Flask(__name__)

valu = [None]
    
@app.route("/Flask", methods=["POST"])
def verificacion():
    data_react = loads(request.get_data())
    print(data_react)
    try:
        game.recolectar_datos(data_react)
    except Error:
        print("FALLIDO")
        value = exc_info()[1]
        print(value)
        valu[0] = value
        return "False"
    else:
        return "True"

    finally: 
        print(game.turno.turno)
        game.tablero.print()
        
@app.route("/Flask/Error")
def get_error():
    value = valu[0]
    value = dumps({
        "ERROR": value.A,
        "DETALLES": value.B
        })

    return value

@app.route("/Flask/Reiniciar")
def Reiniciar():
    game.tablero.reset_tablero()
    game.turno.turno = "B"
    return "OK"