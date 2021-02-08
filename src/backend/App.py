from json import loads, dumps
from Game import game
from flask import Flask, request
from Excepciones import Error
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
        type, value, traceback = exc_info()
        print(f"{type}\n{value}\n{traceback}")
        valu[0] = value
        return "False"
    else:
        return "True"

    finally: 
        print(game.turno.turno)
        game.tablero.print()
        
@app.route("/Flask/Error")
def get_error():
    value = str(valu[0])
    return value

@app.route("/Flask/Reiniciar")
def Reiniciar():
    game.tablero.reset_tablero()
    game.turno.turno = "B"
    return "OK"