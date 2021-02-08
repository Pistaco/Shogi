from Excepciones import Vacio


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

    def __str__(self):
        return f"Inicial: {self.inicial} \n Final: {self.final}"
    
    def getvalues(self):
        return (self.inicial, self.final)
    
    def __setattr__(self, name, value):
        if name == "inicial":
            if isinstance(value, Casilla):
                if value.pieza == None:
                    raise Vacio
        super().__setattr__(name, value)
            

    

        