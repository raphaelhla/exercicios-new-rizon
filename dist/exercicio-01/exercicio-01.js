"use strict";
function contaVogais(palavra) {
    const vogais = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "â", "ê", "î", "ô", "û", "à", "è", "ì", "ò", "ù", "ã", "ẽ", "ĩ", "õ", "ũ"];
    let contador = 0;
    palavra = palavra.toLowerCase();
    for (const letra of palavra) {
        if (vogais.indexOf(letra) != -1) {
            contador++;
        }
    }
    return contador;
}
function exibirResultado() {
    const $inputPalavra = document.getElementById("input-palavra");
    const $totalVogaisB = document.getElementById("total-vogais-b");
    if ($inputPalavra && $totalVogaisB) {
        const palavraB = $inputPalavra.value;
        const totalVogaisB = contaVogais(palavraB);
        $totalVogaisB.textContent = totalVogaisB.toString();
    }
}
const $spanA = document.getElementById("palavra-a");
const $totalVogaisA = document.getElementById("total-vogais-a");
if ($spanA && $totalVogaisA) {
    const palavraA = $spanA.textContent;
    if (palavraA) {
        const totalVogaisA = contaVogais(palavraA);
        $totalVogaisA.textContent = totalVogaisA.toString();
    }
}
