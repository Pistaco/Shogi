
class Casilla:
    def __init__(self, x, y):
        self.x = int(x)
        self.y = int(y)
        self.bando = None
        self.pieza = None 
        self.tuple = (self.x, self.y)

    @classmethod
    def veryficate(clc, data, tablero):
        x, y = data
        objeto = clc(x,y)
        other_data = tablero[objeto]
        objeto.add_casilla(other_data)
        return objeto

    def add_casilla(self, data): 
        if data:
            self.pieza, self.bando = data 
    
    def __str__(self):
        return f"X: {self.x} Y: {self.y}"
    
class Pocisiones:
    def asking(self, tablero):
        Inicial = input("Que pieza desea mover?\n")
        self.inicial = Casilla.veryficate(Inicial, tablero)
        Final = input("Hacia donde desea moverla?\n")
        self.final = Casilla.veryficate(Final, tablero)

    def __str__(self):
        return f"Inicial: {self.inicial} \n Final: {self.final}"
    
    def getvalues(self):
        return (self.inicial, self.final)
    
    def __setattr__(self, name, value):
        if name == "inicial":
            if isinstance(value, Casilla):
                if value.pieza == None:
                    raise Exception("Debes seleccionar una pieza")
        super().__setattr__(name, value)
            

    

        