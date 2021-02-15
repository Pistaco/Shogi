from piezas.Excepciones import Estorba

class Capturar:
    def __init__(self, ai):
        self.pocisiones = ai.pocisiones
        self.turno = ai.turno
        self.piezas = {
            "W": [],
            "B": []
        }
    
    def capturar(self):
        final = self.pocisiones.final.pieza
        Turno = self.turno.turno
        self.piezas[Turno].append(final)
        print(self.piezas)

    def condition(self):
        print(self.pocisiones.final.pieza)

        if self.pocisiones.final.pieza == None:
            return

        if self.pocisiones.final.bando != self.turno.turno:
            self.capturar()
        else:
            raise Estorba
        