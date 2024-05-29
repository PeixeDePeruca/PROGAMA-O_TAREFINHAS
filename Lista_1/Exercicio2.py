
print ('\nEsse algoritmo faz a conversão de temperatura de fahrenheit para celsius \n');

fahrenheit = float(input("Digite uma temperatura em graus Fahrenheit: "))

#formulazinha usada para fazer o calculo
celsius = (fahrenheit - 32) / 1.8


print(f"\nA temperatura em Celsius é: {celsius:.2f}°C")
