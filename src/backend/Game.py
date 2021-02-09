from Tablero import Tablero 
from piezas.Excepciones import Error
from piezas.Piezas import GeneralO, GeneralP, Caballo, Rey, Peon
from piezas.Torre_Alfil import Torre, Alfil, Lanza
from piezas.Pieza import Pieza, PIEZAS, registrar


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
        
    
    def run(self):
        self.tablero.mover()
        self.tablero.print()
        self.turno.switch_turno()
    
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


class Turno:
    def __init__(self):
        self.turno = "B"
    
    def switch_turno(self):
        if self.turno == "B":
            self.turno = "W"
        elif self.turno == "W":
            self.turno = "B"
        
    def comparate(self, turno):
        if turno == None:
            return True

        if self.turno == turno:
            return True
        return False


game = Game()
game.run_debug()