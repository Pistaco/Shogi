from .Excepciones import Vacio, Bando, Movimiento

PIEZAS = {}
def registrar(clase):
    PIEZAS[clase.pieza] = clase

    
class Pieza:
    pieza = "Pieza"
    
    def __init_subclass__(clc):
        super.__init_subclass__()
        registrar(clc)

    def help_carga(self):
        #Carga W = 1:
        #Carga B = -1
        if self.turno.turno == "W":
            self.carga = 1
        elif self.turno.turno == "B":
            self.carga = -1

    def mover(self):
        self.movimiento()
        return self.verificador("inicial") 
    
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
        objeto.help_carga()
        return objeto


    