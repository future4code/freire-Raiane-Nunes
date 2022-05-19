//exercicio de interpretação de codigo

// let valor = 0
// for (let i = 0; i < 5; i++) {
//     valor += i
//     console.log(valor)
// }
// console.log(valor)
// let i = 0;
// while (i < 5) {
//     valor += i;
//     i++;
//     console.log(valor)
// }
/*o valor impresso no console vai
ser 10


const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
        console.log(numero)
    }
}

a) ele vai imprimir qualquer numero menor que 18

*/
// b)
//  
// let i = 0;
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     console.log(lista[i++])
// }
/*
o for of não é suficiente, pois precisaria de uma
variavel auxiliar para complementar a ação.

exercico 3 
 será impressoa a seguinte sequencia:
*
**
***
****

exrcicio de escrita de código 
1
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

    c) Por fim, imprima o array com os nomes dos bichinhos no console
*/

// let quantBichinhos = +prompt("quantos bichinhos de estimação voce possui?")
// let nomeBichinhos = []
// if (quantBichinhos === 0) {
//     console.log("Que pena! Você pode adotar um pet!")

// } else if (quantBichinhos > 0) {
//     for (let i = 0; i < quantBichinhos; i++) {
//         nomeBichinhos[i] = prompt(`digite o nome dos seu bichinho ${i+1}!`)
//     }
//     comsole.log(nomeBichinhos)
// }

// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//     a) Escreva um programa que **imprime** cada um dos valores do array original.

//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    // for (const i of arrayOriginal) {
    //     console.log(i)
    // }
    // for (const i of arrayOriginal) {
    //     console.log(i / 10)
    // }

// let arrayPares = []
// for (const iterator of arrayOriginal) {
//     if (iterator % 2 === 0) {
//         arrayPares.push(iterator)
//     }

// }
// console.log(arrayPares)


// let lista = []

// for (let i = 0; i < arrayOriginal.length; i++) {
//     lista[i] = `O elemento do índex ${i} é: ${arrayOriginal[i]}`
// }

// console.log(lista)



let maior = 0
let menor = 999999999

function maiorMenor(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] > maior) {
            maior = array[i]
                // menor = maior
        }
        if (array[i] < menor) {
            menor = array[i]
        }
    }
}
maiorMenor(arrayOriginal)
console.log(maior, menor)