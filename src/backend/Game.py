from Tablero import Tablero
from Piezas import Pieza, Peon, PIEZAS

class Game:
    def __init__(self):
        self.tablero = Tablero()
        self.pocisiones = self.tablero.Pocisiones
        self.turno = Turno()
    
    def recolectar_datos(self, flask):
        self.pocisiones.flask_get(flask, self.tablero.data)
        self.pieza = Peon.info(self.pocisiones, self.turno)
        self.pieza.mover()
        self.run()
        
    
    def run(self):
        self.tablero.mover()
        self.tablero.print()
        self.turno.switch_turno()

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