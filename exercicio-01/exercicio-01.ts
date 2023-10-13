/**
 * Função que conta o número de vogais em uma palavra.
 * @param palavra - A palavra da qual as vogais serão contadas.
 * @returns O número de vogais na palavra.
 */
function contaVogais(palavra: string): number {
	const vogais: string[] = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "â", "ê", "î", "ô", "û", "à", "è", "ì", "ò", "ù", "ã", "ẽ", "ĩ", "õ", "ũ"];
	let contador: number = 0;

    palavra = palavra.toLowerCase();

	for (const letra of palavra) {
		if (vogais.indexOf(letra) != -1){
			contador++;
		}
	}

	return contador;
}

/**
 * Função que exibe o resultado da contagem de vogais em um campo específico do HTML.
 */
function exibirResultado(): void {
    const $inputPalavra = document.getElementById("input-palavra") as HTMLInputElement;
    const $totalVogaisB = document.getElementById("total-vogais-b") as HTMLSpanElement;
    
    if ($inputPalavra && $totalVogaisB) {
        const palavraB: string = $inputPalavra.value;

        const totalVogaisB: number = contaVogais(palavraB);
        $totalVogaisB.textContent = totalVogaisB.toString();
    }
}


const $spanA = document.getElementById("palavra-a") as HTMLSpanElement;
const $totalVogaisA = document.getElementById("total-vogais-a") as HTMLSpanElement;

if ($spanA && $totalVogaisA) {
    const palavraA: string | null = $spanA.textContent;
    
	if (palavraA) {
        const totalVogaisA: number = contaVogais(palavraA);
        $totalVogaisA.textContent = totalVogaisA.toString();
    }
}