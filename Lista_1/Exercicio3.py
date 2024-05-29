#calcular a area de um circulo

print ("\nEsse algoritmo calculará a área de um círculo\n");

pi = 3.14
raio = float(input("Digite o raio do círculo: ->"));

import math 

def calculoArea(raio):
    area = math.pi * raio **2
    return area

area = round (calculoArea(raio),2);

print(f"\nA área do círculo com o raio de {raio} é {area} unidades quadradas!");






