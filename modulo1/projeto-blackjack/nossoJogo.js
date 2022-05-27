/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo(a) ao jogo de blackjack")


if (confirm("Quer iniciar uma nova rodada?")) {
    let cartaUsuario1 = comprarCarta();
    let cartaUsuario2 = comprarCarta();
    let cartaComputador1 = comprarCarta();
    let cartaComputador2 = comprarCarta();
    let pontosUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
    let pontosComputador = cartaComputador1.valor + cartaComputador2.valor;

    console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${pontosUsuario}`);
    console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${pontosComputador}`);

    if (pontosUsuario > pontosComputador) {
        console.log("O usuário ganhou!");
    } else if (pontosUsuario < pontosComputador) {
        console.log("O computador ganhou!");
    } else if (pontosUsuario === pontosComputador) {
        console.log("Empate!");
    }
} else {
    console.log("O jogo acabou");
}