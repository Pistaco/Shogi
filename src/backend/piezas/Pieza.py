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
        self.estorba()
        self.movimiento()
        return self.verificador("inicial") 
    
    def init(self, tablero):
        print("MIX NOT")
        
    def estorba(self):
        pass
    
    def movimiento(self):
        pass

    def print(self):
        print("NONE")
    
    def verificador(self, I_F):
        t_pieza = getattr(self.pocisiones, I_F).bando
        condicion = self.turno.comparate(t_pieza)
        print(t_pieza, condicion)
        if not condicion:
            raise Vacio()

    @classmethod
    def info(clc, pocisiones, turno):
        objeto = clc()
        objeto.pocisiones = pocisiones
        objeto.turno = turno
        return objeto


    