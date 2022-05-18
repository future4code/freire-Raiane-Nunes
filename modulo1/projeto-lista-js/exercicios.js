// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
    // implemente sua lógica aqui
    return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
    // implemente sua lógica aqui
    const mensagem = prompt('Digite uma mensagem!')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    // implemente sua lógica aqui
    let altura = prompt("digite a altura")
    let largura = prompt("digite a largura")
    console.log(altura * largura)
}

// EXERCÍCIO 02

function imprimeIdade() {
    // implemente sua lógica aqui
    let anoAtual = prompt("digite o ano atual")
    let anoDeNascimento = prompt("digite seu ano de nascimento")
    console.log(anoAtual - anoDeNascimento)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    // implemente sua lógica aqui
    return peso / (altura * altura)
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    let nome = prompt("digite seu nome")
    let idade = prompt("digite sua idade")
    let email = prompt("digite seu email")
    console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + ".")
}


// EXERCÍCIO 05

function imprimeTresCoresFavoritas() {
    // implemente sua lógica aqui
    let cor = []
    cor[0] = prompt("digite sua primeira cor favorita")
    cor[1] = prompt("digite sua segunda cor favorita")
    cor[2] = prompt("digite sua terceira cor favorita")
    console.log(cor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
    return string.toUpperCase()
}

// EXERCÍCIO 07

function calculaIngressosEspetaculo(custo, valorIngresso) {
    // implemente sua lógica aqui
    return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
    // implemente sua lógica aqui
    return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    // implemente sua lógica aqui
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    // implemente sua lógica aqui
    return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    // implemente sua lógica aqui
    let tamanho = array.length
    let primeiro = array[0]
    array[0] = array[tamanho - 1]
    array[tamanho - 1] = primeiro
    return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
    // implemente sua lógica aqui
    return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
    // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
    // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
    // implemente sua lógica aqui

}