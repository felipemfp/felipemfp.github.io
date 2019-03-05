url: https://medium.com/siac/conhecendo-as-bibliotecas-padr%C3%A3o-random-parte-2-df522ec2db7
date: Thu Jan 26 2017 11:31:33 GMT-0300 (Brasilia Standard Time)
---

# Conhecendo as bibliotecas padrões: random — parte 2

Conheça as funções mais utilizadas da biblioteca random

![Photo by [Markus Petritz](https://unsplash.com/@petritzdesigns)](https://cdn-images-1.medium.com/max/11232/1*3HucmLZnDOHf6JKE9T3tFQ.jpeg)*Photo by [Markus Petritz](https://unsplash.com/@petritzdesigns)*

Na [primeira parte](https://medium.com/@felipemfp/conhecendo-as-bibliotecas-padr%C3%B5es-random-f5a5e4e909cc#.3gpahyeqh), falei sobre os métodos para obtenção de números inteiros aleatórios.

Agora irei abordar embaralhamento de listas e como recuperar elementos aleatórios de sequências.

Para referência, consulte a [documentação oficial](https://docs.python.org/3/library/random.html).

## Embaralhando listas

Digamos que você esteja desenvolvendo um jogo de cartas, naturalmente você precisará garantir que o baralho não será sempre ordenando da mesma maneira.

Neste cenário, a biblioteca **random** oferece dois métodos:

### shuffle(x)
> Embaralhe esta lista

Aplicando o cenário apresentado:

<iframe src="https://medium.com/media/9d5397da7486add6e8de9f72336f7962" frameborder=0></iframe>

### sample(seq, k)
> Retorne uma lista ordenada aleatoriamente de tamanho k dessa sequência

No método anterior, você deve ter notado que a função modifica a própria sequência passada como parâmetro. Caso não queira modificar sua lista inicial, você pode chamar: random.sample(cards, len(cards))

O **sample **pode ser utilizado ainda para retornar sequências menores através do parâmetro *k.*

<iframe src="https://medium.com/media/1cc03abb24c39108d3065015bd3adfc5" frameborder=0></iframe>

Outro recurso deste método é a sua utilização com tuplas, *sets* e *frozensets*, já que o método **shuffle** lançaria as respectivas exceções:

* *TypeError: ‘tuple’ object does not support item assignment *(objeto “tupla” não suporta atribuição de items)

* *TypeError: ‘set’ object does not support indexing* (objeto “set” não suporta indexação)

* *TypeError: ‘frozenset’ object does not support indexing *(objeto “frozenset” não suporta indexação)

<iframe src="https://medium.com/media/8f002b25db6b2a29d8edd9f5512d8f6e" frameborder=0></iframe>

Note que o **sample** sempre retorna uma nova lista, não importando se a sequência inicial era uma tuple, *set* ou *frozenset*.

## Sorteando elementos

### choice(seq)
> Retorne uma escolha aleatória dessa sequência

Vamos imaginar o seguinte cenário:
> # O protótipo de um sistema de etiquetamento de livros foi desenvolvido com uma interface incrível, mas o cliente precisa aprovar e no seu banco de dados só tem os livros e as possíveis etiquetas como “Lido”, “Abandonado”, “Lendo” entre outras.

Você tem, então, a tarefa que criar um *script* para etiquetar os livros cadastrados de maneira aleatória apenas para apresentação do protótipo. Utilizando o método **choice**,** **chegamos ao seguinte algoritmo:

<iframe src="https://medium.com/media/ee608b214429106b0dea2fbd9e9200f7" frameborder=0></iframe>

O método **choice** é muito útil certamente, porém há casos que ele pode dá um pouco mais de trabalho em alguns casos. Vamos pegar uma loteria, por exemplo: sabemos que os números são num intervalo de 1 a 60 e precisamos escolher seis números aleatórios.

<iframe src="https://medium.com/media/877ae21a5246b601d5214c9b0efe7594" frameborder=0></iframe>

Note que para cada chamada do **choice**, precisamos explicitamente remover o elemento sorteado da nossa lista antes de sortear novamente para garantir que nossa loteria não terá números repetidos.

*Para resolver o problema da loteria, devemos utilizar o método **sample**, o qual garante que os elementos não sairão repetidos.*

### choices(seq, *weights, cum_weights, k*)
> Sorteie e retorne uma lista de k elementos dessa sequência

No **Python 3.6**, foi implementado o método **choices **(no plural), que é similar ao supracitado **sample**, porém a lista sorteada não é necessariamente composta de elementos únicos.

<iframe src="https://medium.com/media/86ca7dc4ecc869536443425775e0f5e9" frameborder=0></iframe>

Atenção nos argumentos ***weights*** e ***cum_weights***. Em bom português, ambos definem o “peso” para escolha dos elementos, ou seja, quanto maior o peso, maior a probabilidade deste elemento ser sorteado.

A diferença entre os dois está (acredite ou não) no ***cum***, prefixo para ***cumulative ***(cumulativo). Para entender melhor, vamos ver o próprio exemplo da [documentação](https://docs.python.org/3/library/random.html#random.choices):
> # Os pesos relativos (weights) [10, 5, 30, 5] são equivalentes aos pesos cumulativos (cum_weights) [10, 15, 45, 50].

Internamente, o método converterá os pesos relativos para cumulativos, então fornecer os pesos já na forma cumulativa, poderá trazer *resultados mais performáticos em grande escala*.

Para exemplificar o uso de pesos, vamos solucionar o seguinte problema:
> # A escola do seu bairro sorteará 2 novos notebooks entre cinco estudantes, os quais foram selecionados de acordo com o comportamento deles. Entretanto, a direção deixou claro que as notas finais serão poderão ser decisivas no sorteio, ou seja, o aluno com melhor desempenho tem mais chances de ganhar.

Fazendo uso da nova função **choices**, chegamos ao seguinte *script*:

<iframe src="https://medium.com/media/bb0498a77ab406eb0978054432d984db" frameborder=0></iframe>

Note que o *aluno #2 *tem uma média de 90, porém não ganhou o sorteio, mesmo tendo o maior peso, o que significa maior probabilidade de ser sorteado.

Outra observação importante sobre o **choices**: diferente do **sample**, o argumento **k **pode ser maior que o tamanho da sequência, ou seja:

* Com o **choices**, realizamos um sorteio de **k** elementos com pesos com opção de **k **ser maior que o tamanho da sequência

* Com o **sample**, retornamos uma lista ordenada aleatoriamente de **k** elementos, sendo **k **inferior ao tamanho da sequência

Um último exemplo do uso do **choices**:

<iframe src="https://medium.com/media/78e0b7c6f5f6cf68583afe9034f9b646" frameborder=0></iframe>

## Bônus: embaralhando palavras

Como sabemos, em **Python**, as *strings* são **sequências de caracteres imutáveis**. Isso significa que eu não posso alterar nenhum caractere dentro da *string*, ao contrário de como funciona as *listas*, que são **mutáveis**.

<iframe src="https://medium.com/media/1ca361c2918760cfce1d957a9cd0fb88" frameborder=0></iframe>

Como vimos anteriormente, podemos utilizar o método **sample **para embaralhar sequências imutáveis. Porém essa função retornará uma *lista,* independente do tipo da sequência passada.

Para contornar isso, podemos utilizar o método *builtin [***join](https://docs.python.org/3/library/stdtypes.html#str.join)**.

Então chegamos a seguinte solução:

<iframe src="https://medium.com/media/16b0a53d9726754bbd2cb4de4c96da2d" frameborder=0></iframe>

Note que chamamos o método **sample** passando a nossa *string* como sequência e a quantidade *k* é o comprimento da nossa *string*.

Queria agradecer ao [Francisco Bento](undefined) pela revisão do conteúdo e a ajuda nos exemplos.

Se surgiu alguma dúvida, não deixe de comentar.

Encontrou algum erro? Por favor, comente… corrigirei e citarei você 😉
