/* Imterpretação de código 

1:

A)
Na primeira linha será impresso o nome do primeiro ator do elenco

Na segunda linha será impresso o nome da ultima atriz do elenco

E na terceira linha será impreso em qual canal e qual horario será exibido o filme.


2:
*
A) Na primeira linha será impresso as informações sobre o cachorro juca.
Na segunda linha será impressa o nome do gato que foi inserido no escorpo do objeto.
Na terecira linha será impresso o nome com a letra A trocada pela letra O.

B) ele é um recurso que permite acessar o conteudo de um objeto sendo possivel
adicionar novas coisas, como nomes, idade e arrays
*/


/*
A) vai imprimir false pq pediu o backender da variavel 
B vai voltar como null pq não tem nada especificado na função


escrita de codigo

1)
*/
const pessoa = {
    nome: "Carolina",
    apelidos: ["Carol", "Lina", "Caca"]
}

function frasePessoa(pessoa) {

    console.log(`Eu sou ${pessoa.nome} mas pode me chamar de: ${pessoa.apelidos[0]} , ${pessoa.apelidos[1]} ou  ${pessoa.apelidos[2]}.`)
}


const novaPessoa = {
    nome: "Beatriz",
    apelidos: ["Bia", "Bibi", "triz"]
}

function frasePessoa(pessoa) {
    console.log(`Eu sou ${pessoa.nome} mas pode me chamar de: ${pessoa.apelidos[0]} , ${pessoa.apelidos[1]} ou  ${pessoa.apelidos[2]}.`)
}
frasePessoa(novaPessoa);


/* EXERCICIO DE CÓDIGO 2
 */
const descricaoPessoa = {
    nome: "Clair",
    idade: 63,
    profissao: "aposentada"


}

const descricaoPessoa2 = {
    nome: "Diego",
    idade: 33,
    profissao: "programador"

}

function recebePessoas(descricao) {
    return [descricao.nome, descricao.nome.length, descricao.idade, descricao.profissao, descricao.profissao.length]
}


recebePessoas(descricaoPessoa)
recebePessoas(descricaoPessoa2)


/*exercicio escrita de código 3
 */


carrinho = []

const fruta1 = {
    nomeFruta1: "manga",
    disponibilidade: true
}
const fruta2 = {
    nomeFruta2: "abacaxi",
    disponibilidade: true
}
const fruta3 = {
    nomeFruta3: "pera",
    disponibilidade: true
}


function carrinhoFeira(fruta) {
    carrinho.push(fruta)
}
carrinhoFeira(fruta1);
carrinhoFeira(fruta2)
carrinhoFeira(fruta3)

console.log(carrinho)