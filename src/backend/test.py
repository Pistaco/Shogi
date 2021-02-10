from Tablero import Tablero
from piezas.mixin import Solicitud

test = Solicitud()
test.tablero = Tablero()
test.get_Info(0)
print(list(test.data))
    