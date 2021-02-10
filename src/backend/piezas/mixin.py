class mix_in:
    def print(self):
        pocisiones = getattr(self, "pocisiones")
        x = pocisiones.inicial.x
        pocisiones.solicitud.get_Info(x, "x")
        print(pocisiones.solicitud.data)
        


class Solicitud:
    def __init__(self, tablero):
        self.tablero = tablero
        
    def get_Info(self, index, x):
        self.index = index
        self.sentido = x
        if x == "x":
            self.data = self.tablero.data[self]
        elif x == "y":
            return self.tablero.data[index]
        elif x == "z":
            return None

    def del_tablero(self):
        del self.tablero
