// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = [];
    for (let i = 0; i < array.length; i++) {
        arrayInvertido[i] = array[array.length - i - 1];
    }
    return arrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(
        function name(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    );
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(array[i])
        }
    }
    return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPares.push(Math.pow(array[i], 2));
        }
    }
    return arrayPares;
}

// EXERCÍCIO 06
let array = [1, 5, 3, 7, 5, 2]

function retornaMaiorNumero(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}