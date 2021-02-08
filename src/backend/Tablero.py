from Pocisiones import Pocisiones, Casilla
from pprint import pprint
from default import tablero_default
from collections import UserList
    
class Columna(UserList):
    def __init__(self, data):
        self.data = data
        self.main = False
    
    @classmethod
    def generate_defaults(clc, lista):
        lis = [clc(x) for x in lista]
        objeto = clc(lis)
        objeto.main = True
        return objeto
    
    def __getitem__(self, index):
        if self.main == False:
            return super().__getitem__(index) 
           
        if isinstance(index, Casilla):
            return self.data[index.x][index.y]

    def __setitem__(self, index, value):
        if self.main == False:
            super().__setitem__(index, value)

        if isinstance(index, Casilla):
            self.data[index.x][index.y] = value

    
class Tablero:
    def __init__(self):
        default = tablero_default()
        self.data = Columna.generate_defaults(default)
        self.Pocisiones = Pocisiones()
    
    def mover(self):
        Inicial, Final = self.Pocisiones.getvalues()
        Objeto = self.data[Inicial]
        self.data[Final] = Objeto
        self.data[Inicial] = None
    
    def reset_tablero(self):
        default = tablero_default()
        self.data = Columna.generate_defaults(default)
        self.print()

    def print(self):
        pprint(self.data)