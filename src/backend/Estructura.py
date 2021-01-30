from pprint import pprint
from default import tablero_default
from collections import namedtuple, UserList

 
def mover(coordenadas, mapa):
    Inicial, Final = coordenadas.getvalues()
    Objeto = mapa[Inicial.x][Inicial.y]
    mapa[Final.x][Final.y] = Objeto
    mapa[Inicial.x][Inicial.y] = None



def verificador(elem, Coordenada_):

        if len(elem) != 2:
            raise Exception("Formato invalido")

        try:
            x, y = elem
            x = int(x)
            y = int(y)
        except:
            raise Exception("Cuck")

        if x not in range(0, 9):
            raise Exception("Debe ser un numero en el rango valido")

        if y not in range(0, 9):
            raise Exception("Debe ser un numero en el rango valido")
        return Coordenada_(x, y)


Coordenada = namedtuple("Coordenada", ["x", "y"])

class Pocisiones:
    
    def asking(self):
        Inicial = input("Que pieza desea mover?\n")
        self.inicial = verificador(Inicial, Coordenada)
        Final = input("Hacia donde desea moverla?\n")
        self.final = verificador(Final, Coordenada)
    
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
    
        
def run():
    tablero = Tablero()
    pocisiones = Pocisiones()
    pocisiones.asking()
    mover(pocisiones, tablero.data)
    pprint(tablero.data)
        
run()