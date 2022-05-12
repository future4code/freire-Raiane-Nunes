//interpertação de codigo

//exercicio 1

// a. undefined - não tem valor atribuido
// b. null- o valor null foi atribuido a variavel
// c. 11 -
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9 

//exercicio 2

// SUBI NUM ÔNIBUS EM MIRROCOS 27




// exercicio 1 codigo

const nomeDoUsuario = prompt("qual o seu nome?")
const emailDoUsuario = prompt("qual o seu email?")

console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nomeDoUsuario + "! ")

// exercicio 2 codigo

let comidas = ["arroz", "estrogonofe", "bife", "batata frita", "lanche"];
console.log(comidas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

let comidaPreferida = prompt("qual sua comida preferida?")
comidas[1] = comidaPreferida;
console.log(comidas)


// exercicio 3 codigo

let listaDeTarefas = []
listaDeTarefas[0] = prompt("qual a primeira tarefa?")
listaDeTarefas[1] = prompt("qual a segunda tarefa?")
listaDeTarefas[2] = prompt("qual a terceira tarefa?")

console.log(listaDeTarefas)

let indice = prompt("digite o numero da tarefa")
listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)