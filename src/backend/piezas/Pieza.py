from .Excepciones import Vacio, Bando, Movimiento

PIEZAS = {}
def registrar(clase):
    PIEZAS[clase.pieza] = clase

    
class Pieza:
    pieza = "Pieza"
    
    def __init_subclass__(clc):
        super.__init_subclass__()
        registrar(clc)

    def mover(self):
        self.carga = self.turno.carga
        self.condition()
        self.estorba()
        self.movimiento()
        
    def estorba(self):
        pass
    
    def movimiento(self):
        pass

    @classmethod
    def info(clc, ai):
        objeto = clc()
        objeto.pocisiones = ai.pocisiones
        objeto.turno = ai.turno
        objeto.condition = ai.capturar.condition
        return objeto


    