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

/**
 * Retorna a biografia de uma pessoa com base em seu ID.
 * 
 * @param id - O ID da pessoa cuja biografia é procurada.
 * @param lista - A lista de pessoas na qual a busca será realizada.
 * 
 * @returns A biografia da pessoa ou undefined se o ID não for encontrado.
 */
function getBioById(id: number): string | undefined {
    const pessoa = getPessoaById(id);
    return pessoa?.bio;
}

/**
 * Retorna o nome de uma pessoa com base em seu ID.
 * 
 * @param id - O ID da pessoa cujo nome é procurado.
 * @param lista - A lista de pessoas na qual a busca será realizada.
 * 
 * @returns O nome da pessoa ou undefined se o ID não for encontrado.
 */
function getNameById(id: number): string | undefined {
    const pessoa = getPessoaById(id);
    return pessoa?.name;
}

/**
 * Modifica a biografia de uma pessoa com base em seu ID.
 * 
 * @param id - O ID da pessoa cuja biografia será definida.
 * @param newBio - A nova biografia a ser atribuída.
 * @param lista - A lista de pessoas na qual a operação será realizada.
 */
function setBioById(id: number, newBio: string): void {
    const pessoa = getPessoaById(id);
    if(pessoa){
        pessoa.bio = newBio;
    }
}

/**
 * Modifica o nome de uma pessoa com base em seu ID.
 * 
 * @param id - O ID da pessoa cujo nome será definido.
 * @param newName - O novo nome a ser atribuído.
 * @param lista - A lista de pessoas na qual a operação será realizada.
 */
function setNameById(id: number, newName: string): void {
    const pessoa = getPessoaById(id);
    if(pessoa){
        pessoa.name = newName;
    }
}

/**
 * Remove uma pessoa da lista com base em seu ID.
 * 
 * @param id - O ID da pessoa a ser removida.
 * @param lista - A lista de pessoas na qual a operação será realizada.
 * 
 * @returns Uma nova lista de pessoas após a remoção.
 */
function deletePessoaById(id: number): void {
    for(let index = 0; index < lista.length; index++){
        if(lista[index].id === id){
            lista.splice(index, 1);
        }
    }
}

/**
 * Retorna uma pessoa com base em seu ID.
 * 
 * @param id - O ID da pessoa procurada.
 * @param lista - A lista de pessoas na qual a busca será realizada.
 * 
 * @returns A pessoa com o ID correspondente ou undefined se o ID não for encontrado.
 */
function getPessoaById(id: number): Pessoa | undefined {
    for(let index = 0; index < lista.length; index++){
        if(lista[index].id === id){
            return lista[index];
        }
    }

    return undefined;
}