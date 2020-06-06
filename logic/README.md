## Referençias

    Para ler a matriz bidimensional começando da direita para esquerda em direção a sua "base", Foi usado um algoritimo para leitura na diagonal, onde a leitura tem início com o último item da primeira linha e a cada nova interação o algoritimo percorre a linha seguinte com os itens antecessores ao ultimo item da linha antecessora, esse fluxo é excutado até o fim da iteração.


    1ª Definição de matriz: https://www.geeksforgeeks.org/matrix/

    2ª Algorimito para leitura na diagonal: https://www.geeksforgeeks.org/zigzag-or-diagonal-traversal-of-matrix/

    3ª Função max: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max

    4ª Função min: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/min

    PS: os valores usados foram diferentes do arquivo logic.md.

## Explicação

    O algoritimo se baseia em uma estrutura padrão de matriz, onde o número de coluna deve ser proporcional
    ao numero de linhas.

    por exemplo, em uma matriz de 4 (colunas) x 5 (linhas), é usado como base principal a somatória do
    total de linhas com o total de colunas subtraindo 1(um), com essa regra podemos percorrer todos os elementos de uma linha de  forma totalmente dinâmica.

    em uma linha de 4(quatro) itens, com a base principal, será percorrido todos os elementos da linha para cada coluna.

    Como tudo está funcionando: Tendo uma matriz de 4(Colunas) x 5(Linhas), é feito o somatório do total
    de linhas com o total de colunas e desse resultado é subtraido 1(um) o resultado final é o dobro de itens em cada linha que neste caso é 4(quatro).

        Com a primeira depêndencia aplicada(leia acima), temos agora a segunda dependência que é a definicão
        da coluna inicial, a coluna inicial é definida do maior numero partindo de  0(zero) á subtração da linha atual com o total de linhas da matriz.

        Inicialmente por regra do algoritimo, a linha atual é 1(um), é com essa linha atual que será feito a mudança de coluna e também definido a quantidade de itens que será posteriomente listado.

        Exemplo: partindo da linha 1 (let row = 1) vamos definir a coluna inicial (Math.max(0, row - ROW)), por regras aritiméticas, a subtração de 1 com o total de linhas da matriz (5) irár retorna -4, como o valor retornado é negativo, 0(zero) é definido como coluna inicial.

        A mudança de coluna tem inicio quando a linha atual atinge um tal valor que na subtração para a definição da coluna inicial o valor retornado é maior que 0(zero), ou seja, se a linha atual é
        4(quatro) e o total de linhas é 5(cinco) o resultado será 1(um), definindo a nova coluna.

        Tendo a coluna inicial definida, agora sera computado o numero total de itens a ser listado. Por regras do algoritmo a quantida de item(s) retornado na primeira iteração do loop é sempre 1(um) com as demais iterações aumentando o "total" até o total de itens da linha e decrementando, voltando de 4(quatro) para 3(três) 2(dois) e 1(um) item(s), permitindo desta maneira a listagem de todos os itens das linhas.

        Por exemplo: temos 4 linhas onde cada uma possui 4 elementos, temos a seguinte listagem:

        Input: [1,2,3,4], [5,6,7,8], [9,10,12,12] , [13,14,15,16]

        Output: 1,   5 2,    9 6 3,    13 10 7 4

        A regra que defini, como quando será feita a listagem de forma "cremental" e "decremental" é justamente a primeira regra explicado acima, para a coluna inicial. Quando a coluna inicial passa a ter uma nova posição, é quando a linha atual no loop atinge a metade de itens de todas as linhas da matriz ou seja, 4(quatro) de item(s) do total de 8(oito), veja a
        explicação da regra base no inicio, com isso a operação aritmética que defini o numero de itens a ser listado começa a retornar o resultado da subtração da coluna atual com o total de colunas da matriz, então, teriamos a linha atual sendo 4 e a coluna atual sendo 1, com isso ficaria o total de colunas menos 1, o resultado seria 3(três), como o resultado é menor que a linha atual então agora começara a ser listado de forma "decrescente".

        Então, a base (ROW + COLUMN - 1) e a relação Math.min(row, COLUMN - start_column, ROW) com Math.max(0, row - ROW) são fundamentais para o funcionamento deste algoritimo.

        Onde: Math.min(row, COLUMN - start_column, ROW), responsavel por definir a quantidade de itens a ser listado.

        Com:  Math.max(0, row - ROW), responsável por definir a coluna atual.

        estão estritamente relacionados, sendo fundamental para a listagem em diagonal na ordem 'crescente" para "descrecente".

## IMPORTANTE

    Na 2ª(segunda) referência, o algoritmo é originalmente implementado com a leitura começando da esquerda para direita, porém, nesta implementação a leitura começa da direita para esquerda descendo para a "base" da matriz.

## DEBUG

    O primeiro 'loop for' percorre a matriz, neste loop é definido a coluna inicial (explicado no texto acima) e a quantidade de item(s) a serem listado no 'loop for' seguinte (também explicado acima).

        Primeiro 'For':

            console.log(
            `linha atual do loop -> ${row} , total de linhas -> ${ROW}, Montando nova posição para coluna -> ${
            row - ROW
            }, Coluna Atual: ${Math.max(0, row - ROW)}`
            );

            total_elements_line
            console.log(Math.min(row, COLUMN - start_column, ROW));

        -------------------------------------------------

        Segundo 'for':

            console.log(
            `Linha -> ${row}, Posicao -> ${j}, Min -> ${Math.min(
                ROW,
                row
            )}, Coluna -> ${Math.min(ROW, row) - j - 1}`
            );

    Copie o codigo acima e cole no arquivo index.js (o arquivo se encontra dentro da pasta logic)
