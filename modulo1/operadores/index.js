 //exercicio interpretação

 const bool1 = true
 const bool2 = false
 const bool3 = !bool2

 let resultado = bool1 && bool2
 console.log("a. ", resultado)

 resultado = bool1 && bool2 && bool3
 console.log("b. ", resultado)

 resultado = !resultado && (bool1 || bool2)
 console.log("c. ", resultado)

 console.log("d. ", typeof resultado)

 /* sempre quando tiver tres false
 juntos a expressão retorna para 
 o usuário ferdadeiro e se uma condição 
 for diferente das outras ele se torma falsa
 resultado boleano true ou falselet primeiroNumero = prompt("Digite um numero!")

exercicio escrita de codigo

*/
 let segundoNumero = prompt("Digite um numero!")
 let primeiroNumero = prompt(" Digite outro numero!")
 let soma = Number(primeiroNumero) + Number(segundoNumero)

 console.log(soma)

 /*ele vai dar erro pois está concatenando as 
 duas expresões
   a solução será tranformar a string em number e fazer a soma


 exercico 3
  
 */
 primeiroNumero = prompt("Digite um número")
 segundoNumero = prompt("Digite outro número")

 soma = Number(primeiroNumero) + Number(segundoNumero)

 console.log(soma)

 //exercicio 4 escrita


 const n1 = Number(prompt("insira o primeiro numero:"))
 const n2 = Number(prompt("insira o segundo numero:"))

 console.log("o primeiro numero é maior que o segundo?", n1 > n2)
 console.log("o primeiro numero é igual ao segundo?", n1 === n2)
 console.log("o primeiro numero é divisivel pelo segundo?", n1 % n2 === 0)
 console.log("o primeiro numero é divisivel pelo primeiro?", n2 % n2 === 0)



 //exercicio de escrita de código

 //exercicio 1

 let idade = prompt("digite sua iadade")
 let idadeDoAmigo = prompt("digite a idade do seu amigo")

 const const1 = idade > idadeDoAmigo
 console.log("sua idade é maior que a idade do seu melhor amigo", const1)

 const const2 = idade === idadeDoAmigo
 console.log("a idade é igual a idade do amigo ", const2)


 //exercicio 4  escrita

 const numeroPar = Number(prompt("insira um número par:"))
 let resto = numeroPar % 2
 console.log(resto)

 /*o resultado será zero
    e se inserirmos um numero ímpar o resultado será 1

*/