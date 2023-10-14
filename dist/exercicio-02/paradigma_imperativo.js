"use strict";
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function getBioById(id) {
    const pessoa = getPessoaById(id);
    return pessoa?.bio;
}
function getNameById(id) {
    const pessoa = getPessoaById(id);
    return pessoa?.name;
}
function setBioById(id, newBio) {
    const pessoa = getPessoaById(id);
    if (pessoa) {
        pessoa.bio = newBio;
    }
}
function setNameById(id, newName) {
    const pessoa = getPessoaById(id);
    if (pessoa) {
        pessoa.name = newName;
    }
}
function deletePessoaById(id) {
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].id === id) {
            lista.splice(index, 1);
        }
    }
}
function getPessoaById(id) {
    for (let index = 0; index < lista.length; index++) {
        if (lista[index].id === id) {
            return lista[index];
        }
    }
    return undefined;
}
