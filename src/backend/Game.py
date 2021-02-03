from Tablero import Tablero
from Piezas import Pieza, Peon, PIEZAS

class Game:
    def __init__(self):
        self.tablero = Tablero()
        self.pocisiones = self.tablero.Pocisiones
        self.turno = Turno()
    
    def recolectar_datos(self):
        self.pocisiones.asking(self.tablero.data)
        self.pieza = Peon.info(self.pocisiones, self.turno)
        self.pieza.mover()
        
    
    def run(self):
        while True:
            self.tablero.print()
            self.recolectar_datos()
            self.tablero.mover()
            self.turno.switch_turno()

class Turno:
    def __init__(self):
        self.turno = "B"
    
    def switch_turno(self):
        if self.turno == "B":
            self.turno = "W"
        self.turno = "W"
        
    def comparate(self, turno):
        if turno == None:
            return True

        if self.turno == turno:
            return True
        return False


game = Game() 
game.run()