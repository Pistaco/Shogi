from .Excepciones import Bando

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
        self.verificador()
        self.movimiento()
        self.condition()
        self.estorba()
        
    def init(self, none):
        pass
        
    def estorba(self):
        pass
    
    def movimiento(self):
        pass

    def verificador(self):
        bando = self.pocisiones.inicial.bando
        condition = self.turno.comparate(bando)
        if not condition:
            raise Bando

    @classmethod
    def info(clc, ai):
        objeto = clc()
        objeto.pocisiones = ai.pocisiones
        objeto.turno = ai.turno
        objeto.condition = ai.capturar.condition
        return objeto


    