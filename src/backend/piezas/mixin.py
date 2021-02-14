from collections import UserList
from .Excepciones import Estorba

class PseudoList(UserList):
    def __init__(self, ai):
        self.data = ai.solicitud.data
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

    def get_y(self):
        self.data = [row[self.index] for row in self.tablero]
    
    def get_x(self):
        self.data = self.tablero[self.index]
    
    def get_z(self, sentido, inicial, final):
        x_plus, y_plus = sentido
        xi, yi = inicial
        xf, yf = final

        data = []

        def suma():
            nonlocal xi, yi
            xi += x_plus
            yi += y_plus
            
        suma()
        while (xi != xf and yi != yf):
            data.append(self.tablero[xi][yi])
            suma()
        else:
            data.append(self.tablero[xi][yi])

        self.data = data


class mix_in:
    def run(self, sentido, error):
        self.psudolist = PseudoList(self)
        self.psudolist.slice(sentido)
        self.psudolist.iter_bucle(error)
    
    def init(self, tablero):
        self.solicitud = Solicitud(tablero)
    
    def run_b(self):
        self.psudolist = PseudoList(self)
        self.psudolist.iter = self.solicitud.data
        print(self.psudolist.iter)
        self.psudolist.iter_bucle("ALFIL")