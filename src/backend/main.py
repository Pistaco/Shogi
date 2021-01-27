from collections import UserList, namedtuple
from pprint import pprint

def mover(coordenadas, mapa):
    Inicial, Final = coordenadas
    x, y = Inicial
    x2, y2, = Final
    Objeto = mapa[x][y]
    mapa[x2][y2] = Objeto
    mapa[x][y] = None


class Columna(UserList):
    def __init__(self, data):
        self.data = data
    
    @classmethod
    def generate_defaults(clc, default_arg):
        default = ["L", "N", "S", "G", "K", "G", "S", "N", "L"]
        default2 = [None, "B", None, None, None, None, None, "R", None]

        def generate(P):
            return (P for _ in range(9))

        if default_arg == 1:
            return clc(default)
        
        if default_arg == 2:
            return clc(default2)
        
        yield generate(default_arg)
        
        
        
    
class Tablero:
    def __init__(self):
        self.data = [
            Columna([None, "B", None, None, None, None, None, "R", None]),
            Columna(["P" for _ in range(9)]),
            Columna([None for _ in range(9)]),
            Columna([None for _ in range(9)]),
            Columna([None for _ in range(9)]),
            Columna(["P" for _ in range(9)]),
            Columna([None, "B", None, None, None, None, None, "R", None]),
            Columna(["L", "N", "S", "G", "K", "G", "S", "N", "L"]),
            ]
        
        
Coordenada = namedtuple("Coordenada", ["x", "y"])
 
class Pocisiones:
    def __init__(self):
        self.inicial =  Coordenada
        self.final = Coordenada
        
    


        

objecta = Tablero()
pprint(objecta.data)
        