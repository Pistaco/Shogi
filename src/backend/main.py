from collections import UserList
from pprint import pprint

class Columna(UserList):
    def __init__(self):
        self.data = [None,None,None,None,None,None,None,None,None,]

    @classmethod
    def generate_tablet(clc):
        for _ in range(9):
            yield clc()
    

class Tablero:
    def __init__(self):
        self.data = [x for x in Columna.generate_tablet()]
        

objecta = Tablero()
objecta.data[1][1] = True
pprint(objecta.data)
        