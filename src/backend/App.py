from Estructura import Tablero
class Pieza:
    def __init__(self, sigla):
        self.verificado = False 
        self.pieza = sigla
        
    def mover(self):
        if self.verificado:
            return True
    

class Peon(Pieza):
    def __init__(self):
        super.__init__(self, "P")

class Game:
    def __init__(self):
        self.tablero = Tablero()
        self.pocisiones = self.tablero.Pocisiones
    
    def recolectar_datos(self):
        self.pocisiones.asking()
        
        

    