from .Pieza import Pieza, PIEZAS
from .mixin import mix_in
from .Excepciones import Movimiento

class Torre(mix_in, Pieza):
    pieza = "R"
    def movimiento(self):
        x, y = self.pocisiones.carga

        if (x == 0 and abs(y) > 0) or (y == 0 and abs(x) > 0):
            return True
        raise Movimiento("Torre")
    
class Alfil(mix_in, Pieza):
    pieza = "B"
    def movimiento(self):
        x, y = self.pocisiones.carga
        if abs(x) == abs(y) and (x != 0 and y != 0):
            return True
        raise Movimiento("Alfil")
        

class Lanza(mix_in, Pieza):
    pieza = "L"
    def movimiento(self):
        x, y = self.pocisiones.carga
        print("movmiento:", self.carga)
        print(x, y)
        if x * self.carga > 0 and y == 0:
            print("AAA")
            return True
        raise Movimiento("Lanza")

        