function contaVogais(palavra: string): number {
	const vogais: string[] = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	let contador: number = 0;

	for (const letra of palavra) {
		if (vogais.indexOf(letra) != -1){
			contador++;
		}
	}

	return contador;
}

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