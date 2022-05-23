// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//     console.log(item, index, array)
// })

// será impesso no console o apelido e o nome completo
// em treis arrays diferentes


// Exercícios de escrita de código

// Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
let nomesPets = pets.map((pet) => {
    return pet.nome;
})
console.log(nomesPets)
    // ---------------------------
nomesPets = pets.filter((pet) => {
    return pet.raca === "Salsicha";
})

console.log(nomesPets)
    // ----------------------------
nomesPets = pets.filter((pet) => {
    return pet.raca === "Poodle";
})
nomesPets = nomesPets.map((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
console.log(nomesPets)
    // ---------------------------

// Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

let nomesProdutos = produtos.map((produtos) => {
    return produtos.nome;
})
console.log(nomesProdutos)

// ---------------------------

nomesProdutos = produtos.filter((produtos) => {
    produtos.preco = produtos.preco * 0.95;
    console.log(produtos.nome, produtos.preco)
    return produtos;
})

// ---------------------------

nomesProdutos = produtos.filter((produtos) => {
    return produtos.categoria === "Bebidas";
})
console.log(nomesProdutos)

// ---------------------------

nomesProdutos = produtos.filter((produtos) => {
    return produtos.nome.includes("Ypê");
})
console.log(nomesProdutos)

// ---------------------------

nomesProdutos = produtos.map((produtos) => {
    if (produtos.nome.includes("Ypê")) {

        return console.log("Compre " + produtos.nome + " por " + produtos.preco)
    }
})