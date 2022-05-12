// exercicio de interpretação 1

/* A) ele vai dar um retorno da multiplicação 
2*10 = 50

B) não vai aparecer nada.


 exercicio de interpretaçõ 2


a) o toLowerCase retorna o texto em 
 letra minuscula. 

 B.1) true
 B.2) true
 B.3) true 
 console responderá false pra qualquer coisa escrita pelousuário
  sem ter a palavra cenoura incluida.
  
*/
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

ereccicio de escrita de código 1

*/
// const outraFuncao = function() {
//     return "Eu sou raiane, tenho 34 anos, moro em mimoso do sul e sou estudante."
// }

// console.log(outraFuncao())

// let informacao = function(nome, idade, cidade, profissao) {
//     return console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)

// }

// informacao("raiane", 34, "mimoso do sul", "estudante")

//  ereccicio de escrita de código 2 


/*let numeros = function(num1, num2) {
    return Number(num1) + Number(num2)

}
console.log(numeros(5, 8))


/*let impar = function(num1, num2) {
    const par = num1 >= num2
    return par
}
console.log(impar(25, 58))

/*let numeros = function(num1, num2) {
    return Number(num1) + Number(num2)

}
console.log(numeros(5, 8))



let mensagem = function(msg) {
    console.log(msg.length)
    console.log(msg.toUpperCase())

mensagem("eu vou tomar uma cerveja hoje")

exercicio de escrita de codigo 3

*/

function soma(num1, num2) {
    console.log(num1 + num2)
}

function subtracao(num1, num2) {
    console.log(num1 - num2)
}

function divisao(num1, num2) {
    console.log(num1 / num2)
}

function multiplicacao(num1, num2) {
    console.log(num1 * num2)
}

const numero1 = +prompt("digite um numero!")
const numero2 = +prompt("digite outro numero!")

soma(numero1, numero2)
subtracao(numero1, numero2)
divisao(numero1, numero2)
multiplicacao(numero1, numero2)