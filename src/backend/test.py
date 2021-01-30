from collections import namedtuple

AA = namedtuple("LOL", ["name", "year"])
AAA = AA
AAAA = AAA()
print(AAAA)