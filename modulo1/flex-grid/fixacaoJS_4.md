```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
    let cont = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        if (arrayDeNumeros[i] === numeroEscolhido) {
            cont += 1;
        }
    }
    if (cont > 0) {
        return `O número ${numeroEscolhido} aparece ${cont}x`
    } else {
        return "Número não encontrado"
    }
}
```