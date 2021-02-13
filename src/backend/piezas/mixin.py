from collections import UserList
from .Excepciones import Estorba

class PseudoList(UserList):
    def __init__(self, ai):
        self.data = ai.pocisiones.solicitud.data
        self.carga = ai.turno.carga
        self.pocisiones = ai.pocisiones
        
    def slice(self, zz):
        z1, z2 = getattr(self.pocisiones, zz)
        self.iter = self.data[z1 + self.carga: z2 + self.carga: self.carga]
    
    def iter_bucle(self, error):
        for x in self.iter:
            if x:
                raise Estorba(error)
            return True


class Solicitud:
    def __init__(self, tablero):
        self.tablero = tablero
        
    def get_Info(self, index, x):
        self.index = index
        self.sentido = x
        if x == "xx":
            self.get_y()
        elif x == "yy":
            self.get_x()
        elif x == "z":
            return None

    def get_y(self):
        self.data = [row[self.index] for row in self.tablero]
    
    def get_x(self):
        self.data = self.tablero[self.index]


class mix_in:
    def run(self, sentido, error):
        values = PseudoList(self)
        values.slice(sentido)
        values.iter_bucle(error)
    
    def init(self, tablero):
        self.psudolist = PseudoList(self)
        self.solicitud = Solicitud(tablero)
    
    @classmethod
    def tablero_get(clc, data):
        pass
