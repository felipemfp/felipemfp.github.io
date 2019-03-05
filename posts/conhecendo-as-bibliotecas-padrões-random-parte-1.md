url: https://medium.com/siac/conhecendo-as-bibliotecas-padr%C3%B5es-random-f5a5e4e909cc
date: Mon Jan 09 2017 08:12:28 GMT-0300 (Brasilia Standard Time)
---

# Conhecendo as bibliotecas padrões: random — parte 1

Conheça as funções mais utilizadas da biblioteca random

![Photo by [Thomas Lefebvre](https://unsplash.com/@imthebear)](https://cdn-images-1.medium.com/max/9410/1*U9XOh4TJeGtQLJA2FXtRww.jpeg)*Photo by [Thomas Lefebvre](https://unsplash.com/@imthebear)*

Antes de tudo:

<iframe src="https://medium.com/media/9a5cfab30227950e850d71cec5a20b0f" frameborder=0></iframe>

Essa biblioteca oferece métodos para gerar números aleatórios, embaralhar listas e sortear item de sequências. Vamos ver as funções mais utilizadas no dia-a-dia do desenvolvedor.

Nesta primeira parte, vamos ver como obter números inteiros.

Para referência, vale a [documentação oficial do Python sobre **random](https://docs.python.org/3/library/random.html)**.

## Obtendo números inteiros aleatórios

Todo desenvolvedor já precisou daquele inteiro aleatório, seja para realizar um teste unitário ou preencher um formulário. E a biblioteca **random** oferece três métodos para facilitar a nossa vida:

### ***randrange(stop)***
> Retorne um número aleatório de 0 até antes deste **limite**

Digamos que preciso de um número aleatório de 0 até 9, o que eu faço é chamar esta função passando *meu limite + 1*.

Acontece que essa função é semelhante a função [**range()](http://excript.com/python/funcao-range-python.html),** a qual o parâmetro limite é exclusivo.

<iframe src="https://medium.com/media/65cf9598b75646acfc7a1477f115ebda" frameborder=0></iframe>

### ***randrange(start, stop[, step])***
> Retorne um número aleatório neste intervalo indo de tanto em tanto

Mas, às vezes, queremos um intervalo começando do zero. Para isso temos essa variação da função anterior, a qual permite-nos a especificar onde começa o intervalo (inclusivo) e qual é o limite (exclusivo).

Opcionalmente, podemos especificar o passo, isto é, de quanto em quanto meu intervalo cresce. Por exemplo, um intervalo com números pares de 10 até 20, tem um passo equivalente a 2, pois iniciando no 10, o próximo par é 12, logo 10 + 2… E assim adiante.

<iframe src="https://medium.com/media/e42d9afbe9cdb9c54de0998ea19ac1f7" frameborder=0></iframe>

### ***randint(a, b)***
> Retorne um número aleatório entre a e b

Ficou confuso com *essa* *baboseira de limite exclusivo* das funções anteriores? Então, essa função resolverá seus problemas. Basicamente, se você quer o número de 100 até 200, você chama ela passando 100 e 200. Sem precisar adicionar mais 1 no limite.

De fato, ela é um atalho para *randrange(a, b + 1)*.

<iframe src="https://medium.com/media/9cd51f70c6beaabcf9141551aad9c036" frameborder=0></iframe>

Na próxima parte, vamos ver como embaralhar listas e como sortear valores de sequências.

Até a próxima!
