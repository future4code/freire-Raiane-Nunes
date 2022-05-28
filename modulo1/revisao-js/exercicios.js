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
    let menor = 0;
    let objeto = {
        maiorNumero: 0,
        maiorDivisivelPorMenor: false,
        diferenca: 0
    }
    objeto.maiorNumero = num1 > num2 ? num1 : num2;
    menor = num1 < num2 ? num1 : num2;
    objeto.maiorDivisivelPorMenor = objeto.maiorNumero % menor === 0;
    objeto.diferenca = objeto.maiorNumero - menor;

    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayPares = []
    for (let i = 0; i < n; i++) {
        arrayPares[i] = i * 2
    }
    return arrayPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if (ladoA !== ladoC && ladoA !== ladoB && ladoB !== ladoC) {
        return "Escaleno"
    } else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(
        function name(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    );
    let maiorMenor = []
    maiorMenor.push(array[array.length - 2])
    maiorMenor.push(array[1])
    return maiorMenor
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    for (let i = 0; i < filme.atores.length; i++) {
        filme.atores[i] = " " + filme.atores[i];

    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let p = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return p;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter(function(pessoa) {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60;
    });
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(function(pessoa) {
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60;
    });
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map(function(conta) {
        for (const valor of conta.compras) {
            conta.saldoTotal -= valor;
        }
        conta.compras = [];
        return conta
    });
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => {
        if (a.nome > b.nome) return 1;
        if (a.nome < b.nome) return -1;
        return 0;
    });

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    return consultas.sort((a, b) => {
        let partsA = a.dataDaConsulta.split('/');
        let partsB = b.dataDaConsulta.split('/');
        return new Date(partsA[2], partsA[1] - 1, partsA[0]) - new Date(partsB[2], partsB[1] - 1, partsB[0]);
    });
}