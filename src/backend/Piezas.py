PIEZAS = {}
    
def registrar(clase):
    PIEZAS[clase.__name__] = clase
    
class Pieza:
    def __init__(self):
        self.pieza = None
        self.pocisiones = None
        self.turno = None
        
    def __init_subclass__(clc):
        super.__init_subclass__()
        registrar(clc)

    def mover(self):
        return self.verificador("inicial") 
        
    
    def verificador(self, I_F):
        t_pieza = getattr(self.pocisiones, I_F).bando
        condicion = self.turno.comparate(t_pieza)
        print(t_pieza, condicion)
        if not condicion:
            raise Exception("Bando Equivocado")
    
    @classmethod
    def info(clc, pocisiones, turno):
        objeto = clc()
        objeto.pocisiones = pocisiones
        objeto.turno = turno
        return objeto
    

class Peon(Pieza):
    def __init__(self):
        super().__init__()
        self.pieza = "P"
    
    
P = Peon()
print(P.pieza)
print(PIEZAS)