//  //exercicio interpretação

//  const bool1 = true
//  const bool2 = false
//  const bool3 = !bool2

//  let resultado = bool1 && bool2
//  console.log("a. ", resultado)

//  resultado = bool1 && bool2 && bool3
//  console.log("b. ", resultado)

//  resultado = !resultado && (bool1 || bool2)
//  console.log("c. ", resultado)

//  console.log("d. ", typeof resultado)

//  /* sempre quando tiver tres false
//  juntos a expressão retorna para 
//  o usuário ferdadeiro e se uma condição 
//  for diferente das outras ele se torma falsa
//  resultado boleano true ou falselet primeiroNumero = prompt("Digite um numero!")

// exercicio escrita de codigo

// */
//  let segundoNumero = prompt("Digite um numero!")
//  let primeiroNumero = prompt(" Digite outro numero!")
//  let soma = Number(primeiroNumero) + Number(segundoNumero)

//  console.log(soma)

//  /*ele vai dar erro pois está concatenando as 
//  duas expresões
//    a solução será tranformar a string em number e fazer a soma


//  exercico 3

//  */
//  primeiroNumero = prompt("Digite um número")
//  segundoNumero = prompt("Digite outro número")

//  soma = Number(primeiroNumero) + Number(segundoNumero)

//  console.log(soma)

//  //exercicio 4 escrita


//  const n1 = Number(prompt("insira o primeiro numero:"))
//  const n2 = Number(prompt("insira o segundo numero:"))

//  console.log("o primeiro numero é maior que o segundo?", n1 > n2)
//  console.log("o primeiro numero é igual ao segundo?", n1 === n2)
//  console.log("o primeiro numero é divisivel pelo segundo?", n1 % n2 === 0)
//  console.log("o primeiro numero é divisivel pelo primeiro?", n2 % n2 === 0)



//  //exercicio de escrita de código

//  //exercicio 1

//  let idade = prompt("digite sua iadade")
//  let idadeDoAmigo = prompt("digite a idade do seu amigo")

//  const const1 = idade > idadeDoAmigo
//  console.log("sua idade é maior que a idade do seu melhor amigo", const1)

//  const const2 = idade === idadeDoAmigo
//  console.log("a idade é igual a idade do amigo ", const2)


//  //exercicio 4  escrita

//  const numeroPar = Number(prompt("insira um número par:"))
//  let resto = numeroPar % 2
//  console.log(resto)

/*o resultado será zero
    e se inserirmos um numero ímpar o resultado será 1

*/

// Desafio 1
// letra a)
console.log("a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.");
let KELVIN;
let GRAUS_FAHRENHEIT = 77;
(KELVIN) = (GRAUS_FAHRENHEIT - 32) * (5 / 9) + 273.15;
console.log(KELVIN + "°K");
console.log("------------------");

// letra b)
console.log("b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também");
let GRAUS_CELSIUS = 80;
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS) * (9 / 5) + 32;
console.log(GRAUS_FAHRENHEIT + "°F");
console.log("------------------");

// letra c)
console.log("c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também");
GRAUS_CELSIUS = 30;
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS) * (9 / 5) + 32;
console.log(GRAUS_FAHRENHEIT + "°F");
(KELVIN) = (GRAUS_FAHRENHEIT - 32) * (5 / 9) + 273.15;
console.log(KELVIN + "°K");
console.log("------------------");

// letra d)
console.log("d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter");
GRAUS_CELSIUS = Number(prompt("Qual o valor em °C:"));
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS) * (9 / 5) + 32;
console.log("O valor em °F de " + GRAUS_CELSIUS + "°C é: " + GRAUS_FAHRENHEIT + "°F");
(KELVIN) = (GRAUS_FAHRENHEIT - 32) * (5 / 9) + 273.15;
console.log("O valor em °K de " + GRAUS_CELSIUS + "°C é: " + KELVIN + "°K");
console.log("------------------");

// Desafio 2
// letra a)
console.log("a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora");
let quilowattHora = 280;
let valor = quilowattHora * 0.05;
console.log("R$ " + valor);
console.log("------------------");

// letra b)
console.log("b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto");
valor = valor - valor * 0.15;
console.log("R$ " + valor);
console.log("------------------");

// Desafio 3
// letra a)
console.log("a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: ");
let libra = 20;
let X = libra / 2.205;
console.log("20lb equivalem a " + X + "kg");
console.log("------------------");