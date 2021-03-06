from piezas.Excepciones import Vacio
from piezas.mixin import Solicitud

class Casilla:
    def __init__(self, x, y):
        self.x = int(x)
        self.y = int(y)
        self.bando = None
        self.pieza = None 
        self.tuple = (self.x, self.y)

    @classmethod
    def veryficate(clc, data, tablero):
        x, y = data
        objeto = clc(x,y)
        other_data = tablero[objeto]
        objeto.add_casilla(other_data)
        return objeto

    def add_casilla(self, data): 
        if data:
            self.pieza, self.bando = data 
    
    def __str__(self):
        return f"X: {self.x} Y: {self.y}"
    
class Pocisiones:
    def flask_get(self, data, tablero):
        self.inicial = Casilla.veryficate(data["inicial"], tablero)
        self.final = Casilla.veryficate(data["final"], tablero)
        self.vacio_verificador()
        self.carga = (self.final.x - self.inicial.x, self.final.y - self.inicial.y)
        self.xx = (self.inicial.x, self.final.x)
        self.yy = (self.inicial.y, self.final.y)
    
    def getvalues(self):
        return (self.inicial, self.final)
    
    def vacio_verificador(self):
        if self.inicial.bando:
            return True
        raise Vacio
    
    def __str__(self):
        return f"Inicial: {self.inicial} \n Final: {self.final}"
    
            
            