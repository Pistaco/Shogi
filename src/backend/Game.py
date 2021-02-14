from tablero.Tablero import Tablero 

from piezas.Excepciones import Error
from piezas.Piezas import GeneralO, GeneralP, Caballo, Rey, Peon
from piezas.Torre_Alfil import Torre, Alfil, Lanza
from piezas.Pieza import Pieza, PIEZAS, registrar
from piezas.mixin import mix_in, Solicitud


class Game:
    def __init__(self):
        self.tablero = Tablero()
        self.pocisiones = self.tablero.Pocisiones
        self.turno = Turno()
    
    def recolectar_datos(self, flask):
        self.pocisiones.flask_get(flask, self.tablero.data)
        self.getpieza()
        self.pieza.mover()
        self.run()
        
    def getpieza(self):
        pieza = PIEZAS.get(self.pocisiones.inicial.pieza)
        self.pieza = pieza.info(self.pocisiones, self.turno)
        self.sub_proces()
    
    def run(self):
        self.tablero.mover()
        self.turno.switch_turno()
    
    def sub_proces(self):
        self.pieza.init(self.tablero.data)
        self.pieza.print()

    def run_debug(self):
        self.tablero.print()
        while True:
            try:
                Inicial = input("INCICIAL:  ")
                Final = input("FINAL:  ")
                Objeto = {"inicial": Inicial, "final": Final}
                self.recolectar_datos(Objeto)
            except Error as C:
                print(f"Error: {C.A}  {C.B}")
            self.tablero.print()


class Turno:
    def __init__(self):
        self.turno = "B"
        self.carga = -1
    
    def switch_turno(self):
        if self.turno == "B":
            self.turno = "W"
            self.carga = 1

        elif self.turno == "W":
            self.turno = "B"
            self.carga = -1
        
    def comparate(self, turno):
        if turno == None:
            return True

        if self.turno == turno:
            return True
        return False

game = Game()