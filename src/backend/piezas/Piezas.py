from .Excepciones import Bando, Vacio, Movimiento
from .Pieza import Pieza

class Peon(Pieza):
    pieza = "P"
    def movimiento(self):
        result = self.pocisiones.carga[0]
        y1, y2 = self.pocisiones.yy
        if not (y1 == y2 and result == self.carga):
            raise Movimiento("Peon")

class Caballo(Pieza):
    pieza = "N"
    def movimiento(self):
        x, y = self.pocisiones.carga
        print(x, y)
        if abs(y) == 1 and (x * self.carga) == 2:
            return True
        raise Movimiento("Caballo")


class GeneralO(Pieza):
    pieza = "G"
    def movimiento(self):
        x, y = self.pocisiones.carga

        if (self.carga * x) == -1 and abs(y) == 1:
            raise Movimiento("General de oro")

        if abs(x) <= 1 or abs(y) <= 1:
            return True

        raise Movimiento("General de oro")


class GeneralP(Pieza):
    pieza = "S"
    def movimiento(self):
        x, y = self.pocisiones.carga

        if x == 0 and abs(y) == 1:
            raise Movimiento("General de plata")

        if y == 0 and (x * self.carga) == -1:
            raise Movimiento("General de plata")

        if abs(x) == 1 or abs(y) == 1:
            return True
        raise Movimiento("General de plata")


class Rey(Pieza):
    pieza = "K"
    def movimiento(self):
        x, y = self.pocisiones.carga
        if abs(x) <= 1 or abs(y) <= 1:
            return True
        raise Movimiento("Rey")


    