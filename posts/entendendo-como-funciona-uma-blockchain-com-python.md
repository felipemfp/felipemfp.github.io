url: https://medium.com/@felipemfp/entendendo-como-funciona-uma-blockchain-com-python-4e5a66f09e16
date: Tue Feb 20 2018 12:12:55 GMT-0300 (Brasilia Standard Time)
---

# Entendendo como funciona uma Blockchain com Python

Vamos criar uma simples Blockchain para assimilar os principais conceitos
> # Esse artigo é uma tradução e releitura do artigo [**Trying to understand blockchain by making one!](https://www.damiencosset.com/trying-understand-blockchain-making-one/).**

![Fotografia por [NeONBRAND](https://unsplash.com/photos/dDvrIJbSCkg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) em [Unsplash](https://unsplash.com/search/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/9456/1*B49SnIc1jvjnz0PcZix6FA.jpeg)*Fotografia por [NeONBRAND](https://unsplash.com/photos/dDvrIJbSCkg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) em [Unsplash](https://unsplash.com/search/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

## Introdução

Temos visto muito sobre *Bitcoin* e criptomoedas e podemos dizer que estão na moda. E como todo desenvolvedor, devemos sempre nos atualizar e conhecer novos conceitos e tecnologias.

*Blockchain* é o conceito base de toda criptomoeda, mas não é limitado a esse escopo e pode ser aplicado de diversas maneiras. Para entender melhor esse conceito, resolvi criar uma simplória *blockchain*.

## O que precisamos?

![Vamos criar uma Blockchain e para isso precisamos entender algumas coisinhas.](https://cdn-images-1.medium.com/max/2000/1*9sE2DFGvgMc3MHytdN_EDg.gif)*Vamos criar uma Blockchain e para isso precisamos entender algumas coisinhas.*

### Bloco

Uma *blockchain* é feita de **blocos**. No nosso caso, um bloco será composto de: uma data, um índice e algum conteúdo (uma mensagem, por exemplo) e o ***hash* do bloco anterior**.

### Criptografia

Para manter as informações armazenadas de maneira segura na *blockchain*, vamos precisar criptografar os dados. Para nosso pequeno projeto, vamos utilizar o método *sha256* da biblioteca padrão [**hashlib](https://docs.python.org/3/library/hashlib.html)**. Essa função irá criar uma *string *com 64 caracteres.

No fim das contas, nossa *blockchain* será uma lista de *hashes*, cada um com 64 caracteres. E como mencionado, o *hash* do bloco anterior está contido no bloco seguinte e é por isso que chamamos de *blockchain* (cadeia de blocos).

### *Difficulty *e *Nonce*

Uma *blockchain* não é contruída apenas criando *hashes* dos blocos. Um *hash* precisa ser **válido**. No nosso caso, um *hash* será válido se começar com quatro “0” (por exemplo, “0000abc…”). Chamamos essa validação de *difficulty* (dificuldade). Quanto maior essa dificuldade, mais tempo vai levar para encontrar um *hash* válido.

MAS… Se o *hash* não é válido na primeira vez, algo precisa mudar para conseguir um *hash* diferente, certo? Se você já trabalhou com *hashes*, sabe que se utilizámos o mesmo dado, sempre resultará no mesmo *hash*. Para contornar isso, utilizamos um *nonce*, que, em outras palavras, é um valor arbitrário. É um simples número inteiro que vamos incrementar sempre que um *hash* não for válido.

Resumindo, vamos realizar o *hash* do nosso bloco (data, índice, mensagem e *hash* anterior) e um valor arbitrário de 1. Se o *hash* não for válido, vamos tentar com um valor arbitrário de 2. E vamos incrementando o valor arbitrário de 1 em 1 até encontrar um *hash *válido.

### Bloco de gênese

Pelo nome você deve ter adivinhado que se trata do primeiro bloco da nossa *blockchain*. O problema é que esse bloco não tem *hash* anterior, porque **não existe** bloco anterior. Vamos apenas utilizar um valor arbitrário para criar um *hash *para representar o bloco anterior e assim criar o primeiro bloco da nossa *blockchain*.

## **Quais métodos vamos precisar?**

![Agora que já sabemos o que precisamos, vamos ver as funções que vamos criar para fazer uma *blockchain*](https://cdn-images-1.medium.com/max/2000/1*-aXpqnz3PrAwb4_5AUl0rw.gif)*Agora que já sabemos o que precisamos, vamos ver as funções que vamos criar para fazer uma *blockchain**

### Construir a blockchain

Claro que vamos ter uma função para contruir e iniciar nossa *blockchain*. A principal responsabilidade será criar o **bloco de gênese**.

### Criptografar nossos blocos

Uma função responsável por gerar **um *hash *válido** para nossos blocos.

### Checar a validade de um hash

Também teremos uma função que irá validar se o *hash* começa com “0000”, ou seja, **se é válido** para nossa *blockchain*.

### Recuperar hash anterior

Vamos precisar de uma função que** recupere o último *hash*** da nossa *blockchain* para incluir ao criar um novo bloco.

### Adicionar um novo bloco

E por último, precisamos oferecer uma forma de adicionar um novo bloco.

## Mãos no código

![Vamos ver como colocamos esses conceitos no código](https://cdn-images-1.medium.com/max/2000/1*Pg4Uw9ntpbFvwFaFlOGwgQ.gif)*Vamos ver como colocamos esses conceitos no código*

Nosso pequeno projeto tem apenas dois arquivos: **blockchain.py** e **main.py**. O primeiro contém nossa classe *Blockchain* com todas as funções necessárias. E o segundo é um exemplo de uso.

### blockchain.py

<iframe src="https://medium.com/media/30276a3324e12c66e00eb96362a91c35" frameborder=0></iframe>

Nesse módulo, temos uma classe com alguns métodos que vamos analisar. Antes de tudo, importo as funções que vamos precisar:

* ***sha256* **para criptografar nossos blocos

* ***datetime*** para ter a data de criação (*timestamp*) dos blocos

Agora vamos dá uma olhada no que está acontecendo nos métodos:

* ***set_genesis_block***: esse método é chamado na construção da *blockchain* para criar o primeiro bloco da cadeia, ou seja, o bloco de gênese. Pegamos o *timestamp *da* *data atual, uma mensagem, o índice do bloco na *blockchain* (0) e um valor arbitrário como *hash *anterior visto que não temos blocos na cadeia (*self.blocks*) ainda. Com esses dados, adicionamos o bloco na cadeia chamando o método *hash_block*.

* ***hash_block***: esse método recebe todo o conteúdo do bloco, cria um *hash* válido e adiciona na cadeia. Como você pode ver, na primeira vez que tentamos criptografar um bloco, ajustamos o valor do *nonce* como 0. Em seguida, juntamos todo o conteúdo do bloco em uma *string *e criptografamos com a função *sha256* da biblioteca padrão *hashlib*. Se o *hash* não for válido, incrementamos o *nonce* e tentamos de novo. Quando encontrarmos um *hash* válido, adicionamos no final da cadeia.

* ***get_last_hash***: nesse método, retornando o último bloco da cadeira.

* ***is_hash_valid***: esse método recebe um *hash *e determina se o mesmo é válido.

* ***add_new_block***: esse método é responsável por adicionar uma novo bloco. Apenas precisamos da informação (nosso caso, são mensagens) como argumento, porque o resto do conteúdo do bloco é calculado através da própria *blockchain*. Uma vez que o conteúdo do bloco esteja pronto, chamamos *hash_block* para adicionar o bloco na cadeia.

Muito bom, agora vamos ver como utilizamos essa classe *Blockchain* no nosso *main.py.*

### main.py

<iframe src="https://medium.com/media/c818c95baad89ffb4d056ba466202e18" frameborder=0></iframe>

O que está acontecendo aqui é que importamos nossa classe *Blockchain* e:

* Criamos uma nova instância “blockchain”

* Adicionamos 3 blocos com as respectivas mensagens: “Primeiro bloco!”, “Blockchain é top!” e “Mais uma vez!”.

Por último, damos uma olhada de como está nossa cadeia de blocos. A saída é mais ou menos assim:

    [nonce] 3455
    [nonce] 4003
    [nonce] 40238
    [nonce] 4161
    [‘0000d5e8a1a6e6c0e033c0e9c8e1f6a1ff7426083fee5343274c230599670fed’, ‘000015422c0380102a781d44f116efc605a9487cab8aa40397f32d9012a4ecc8’, ‘00004d05054645cfe0b3dff068151b8502db93b9b9a49143a4b7aec7bbbdbfbb’, ‘0000d78b4059d51651fdac4159b5cabc30ecd59e377c841a434510fbde773fa8’]

O *array* representa nossos 4 blocos (bloco de gênese e os 3 adicionados). Como você pode ver, cada um deles começa com “0000”, então cada um deles é válido. Se algum deles não começasse com quatro zeros, saberíamos que se trata de *hash* inválido e portanto o conteúdo correspondente desse bloco não é confiável.

Também podemos ver 4 valores de *nonce*. Eles são os valores que foram utilizados em cada bloco. Se você voltar ao *blockchain.py* verá que temos um *print* no método *hash_block*. Esses valores também representam quantas vezes fizemos o *hash *do bloco até encontrar um válido.
> A mensagem “Blockchain é top!” (nosso segundo bloco que foi adicionado no *main.py*) precisou de **40238** tentativas antes de encontrar um *hash* válido!

## Conclusão

![](https://cdn-images-1.medium.com/max/2000/1*rdA-2eM1ex1D90ONfhXf-g.gif)

Isso é um exemplo bem simples de como funciona uma *blockchain*. Provavelmente algumas coisas ficaram de fora, outras foram simplificadas. Nesse pequeno projeto aprendi:

* Se uma pessoa quiser modificar algum bloco já adicionado no *blockchain*, ela teria que mudar cada um dos blocos seguintes desse bloco. Cada bloco, contém um *hash* anterior, o que tornar tentar alterar algum dado bem complicado.

* Mas se a maioria dos usuário da *blockchain* decidirem por alterar algum dado, eles podem alterar o dado anterior e concordar em alterar o resto de acordo com a modificação. Uma *blockchain* funciona apenas se a maioria seguir as regras. Ou você pode acabar com duas cadeias: uma onde os usuários decidiram manter os conteúdos originais e outra onde os usuários decidiram por alterar os conteúdos.

* Ouvimos falar sobre o enorme consumo de energia para *minerar* *Bitcoin*. *Minerar* é o conceito de resolver o problema da **dificuldade **quando vamos criptografar os dados. Você recebe uma transação para ser adicionada na cadeia e tem que encontrar uma *hash* válido para esse bloco. Como recompensa você recebe um pouco de *Bitcoin.*

Isso é tudo por hoje. Isso me ajudou a compreender melhor os conceitos para criação de uma *blockchain* e como ela funciona, espero que seja útil para você também. Sinta-se livre para me corrigir nos comentários abaixo.

![](https://cdn-images-1.medium.com/max/2000/1*VmLXJ5aFZyvvMHi9PHM71w.gif)
