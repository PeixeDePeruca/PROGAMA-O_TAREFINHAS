# Função para calcular os anos necessários
def calcular_anos(altura1, crescimento1, altura2, crescimento2):
    anos = 0

    while altura1 <= altura2:
        # Verificar restrições
        if anos > 20 or altura1 > 2.2 or altura2 > 2.2:
            return "Não é possível a pessoa mais baixa ficar maior dentro das restrições."

        altura1 += crescimento1
        altura2 += crescimento2
        anos += 1

    return anos

# Leitura dos dados
altura1 = float(input("Digite a altura da primeira pessoa (em metros): "))
crescimento1 = float(input("Digite o crescimento anual da primeira pessoa (em metros): "))
altura2 = float(input("Digite a altura da segunda pessoa (em metros): "))
crescimento2 = float(input("Digite o crescimento anual da segunda pessoa (em metros): "))

# Identificar a pessoa mais baixa e mais alta inicialmente
if altura1 > altura2:
    altura1, altura2 = altura2, altura1
    crescimento1, crescimento2 = crescimento2, crescimento1

# Calcular os anos necessários
resultado = calcular_anos(altura1, crescimento1, altura2, crescimento2)

# Exibir o resultado
print("Anos necessários para a pessoa mais baixa ficar maior:", resultado)
