class Error(Exception):
    """
    ERROR EN JUGADA
    """
    def __init__(self, A):
        self.A = A
        super().__init__(self)

    def __str__(self):
        return self.A
        

class Bando(Error):
    """
    Bando equivoado
    """
    def __init__(self):
        super().__init__("BANDO")

class Vacio(Error):
    """Debes seleccionar una pieza"""
    def __init__(self):
        super().__init__("VACIO")