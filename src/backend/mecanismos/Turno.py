
class Turno:
    def __init__(self):
        self.turno = "B"
        self.carga = -1
    
    def switch_turno(self):
        if self.turno == "B":
            self.turno = "W"
            self.carga = 1

        elif self.turno == "W":
            self.turno = "B"
            self.carga = -1
        
    def comparate(self, turno):
        if turno == None:
            return True

        if self.turno == turno:
            return True
        return False
