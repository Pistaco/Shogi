from pprint import pprint
from default import tablero_default
from collections import UserList

 
class Casilla:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.bando = None
        self.pieza = None 

    @classmethod
    def veryficate(clc, data):
        if len(data) != 2:
            raise Exception("Error Tamaño")
        try:
            int(data)
        except:
            raise Exception("Error Numero")
        x, y = data
        
        return clc(int(x), int(y))
    
    
    def __setattr__(self, name, value):
        if isinstance(value, int):
            if value not in range(9):
                raise Exception(f"Fuera de rango {name}")
            else:
                super.__setattr__(self, name, value)
        else:
            super.__setattr__(self, name, value)
        
    

class Pocisiones:
    def asking(self):
        Inicial = input("Que pieza desea mover?\n")
        self.inicial = Casilla.veryficate(Inicial)
        Final = input("Hacia donde desea moverla?\n")
        self.final = Casilla.veryficate(Final)
    
    def __str__(self):
        return f"Inicial: {self.inicial} \n Final: {self.final}"
    
    def getvalues(self):
        return (self.inicial, self.final)
    

class Columna(UserList):
    def __init__(self, data):
        self.data = data
    
    @classmethod
    def generate_defaults(clc, lista):
        return [clc(x) for x in lista]

    
class Tablero:
    def __init__(self):
        default = tablero_default()
        self.data = Columna.generate_defaults(default)
        self.Pocisiones = Pocisiones()
    
    def mover(self):
        Inicial, Final = self.Pocisiones.getvalues()
        Objeto = self.data[Inicial.x][Inicial.y]
        self.data[Final.x][Final.y] = Objeto
        self.data[Inicial.x][Inicial.y] = None
    
    def print(self):
        pprint(self.data)
        