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

function getBioById(id: number, lista: Pessoa[]): string | undefined {
    const pessoa = getPessoaById(id, lista);
    return pessoa?.bio;
}

function getNameById(id: number, lista: Pessoa[]): string | undefined {
    const pessoa = getPessoaById(id, lista);
    return pessoa?.name;
}

function setBioById(id: number, newBio: string, lista: Pessoa[]): void {
    const pessoa = getPessoaById(id, lista);
    if(pessoa){
        pessoa.bio = newBio;
    }
}

function setNameById(id: number, newName: string, lista: Pessoa[]): void {
    const pessoa = getPessoaById(id, lista);
    if(pessoa){
        pessoa.name = newName;
    }
}

// Implementação deletePessoaById com o Paradigma Funcional
function deletePessoaById(id: number, lista: Pessoa[]): Pessoa[] {
    let novaLista = lista.filter(pessoa => pessoa.id !== id);
    return novaLista;
}

// Implementação getPessoaById com o Paradigma Funcional
function getPessoaById(id: number, lista: Pessoa[]): Pessoa | undefined {
    const pessoa = lista.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa : undefined;
}