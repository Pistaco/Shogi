class Error(Exception):
    """
    ERROR EN JUGADA
    """
    def __init__(self, A, B):
        self.A = A
        self.B = B or ""
        super().__init__(self)

    def __str__(self):
        return self.A + self.B
        

class Bando(Error):
    """
    Bando equivoado
    """
    def __init__(self, B=None):
        super().__init__("BANDO", B)

class Vacio(Error):
    """Debes seleccionar una pieza"""
    def __init__(self, B=None):
        super().__init__("VACIO", B)

class Movimiento(Error):
    """Debes seleccionar una pieza"""
    def __init__(self, B=None):
        super().__init__("MOVIMIENTO", B)