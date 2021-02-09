from .Pieza import Pieza, PIEZAS
from .Excepciones import Movimiento

class Torre(Pieza):
    pieza = "R"
    def movimiento(self):
        x, y = self.pocisiones.carga

        if (x == 0 and abs(y) > 0) or (y == 0 and abs(x) > 0):
            return True
        raise Movimiento("Torre")
    
class Alfil(Pieza):
    pieza = "B"
    def movimiento(self):
        x, y = self.pocisiones.carga
        if abs(x) == abs(y) and (x != 0 and y != 0):
            return True
        raise Movimiento("Alfil")
        

class Lanza(Pieza):
    pieza = "L"
    def movimiento(self):
        x, y = self.pocisiones.carga
        print("movmiento:", self.carga)
        print(x, y)
        if x * self.carga > 0 and y == 0:
            print("AAA")
            return True
        raise Movimiento("Lanza")

class mix_in:
    pass


class Solicitud:
    def __init__(self, data):
        self.data = data
    
print(PIEZAS)