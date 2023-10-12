interface Pessoa {
    "id" : number;
    "name": string;
    "bio" : string;
}

let lista: Pessoa[] = [
{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function getBioById(id: number): string | undefined {
    const pessoa = getPessoaById(id);
    return pessoa ? pessoa.bio : undefined;
}

function getNameById(id: number): string | undefined {
    const pessoa = getPessoaById(id);
    return pessoa ? pessoa.name : undefined;
}

function getPessoaById(id: number) : Pessoa | undefined {
    for(const pessoa of lista) {
        if (pessoa.id === id){
            return pessoa;
        }
    }

    return undefined;
}