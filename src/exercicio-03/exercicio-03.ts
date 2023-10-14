import { getBioById, getNameById, setBioById, setNameById, deletePessoaById } from '../exercicio-02/paradigma_funcional.js';

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
 * Função para exibir o nome ou a biografia com base no tipo (nome ou bio)
 * @param id - O ID da pessoa.
 * @param tipo - O tipo de atributo a ser obtido (nome ou bio).
 */
function exibirAtributo(id: number, tipo: string): void {
    const resultado = document.getElementById("resultado-consulta-ex02") as HTMLSpanElement;
    let atributo = undefined;

    if (tipo === "nome")
        atributo = getNameById(id, lista); //usa o método criado no exercício-02
    else 
        atributo = getBioById(id, lista); //usa o método criado no exercício-02
    
    resultado.textContent = atributo ? atributo : "Pessoa não encontrada."
    exibirLista();
}

/**
 * Função para modificar o nome ou a biografia com base no tipo (nome ou bio)
 * 
 * @param id - O ID da pessoa.
 * @param tipo - O tipo de atributo a ser modificado (nome ou bio).
 * @param valor - O novo valor para o atributo.
 */
function modificarAtributo(id: number, tipo: string, valor: string): void {
    if (tipo === "nome")
        setNameById(id, valor, lista); //usa o método criado no exercício-02
    else 
        setBioById(id, valor, lista); //usa o método criado no exercício-02
    
    exibirLista();
}

/**
 * Função para deletar uma pessoa da lista
 * 
 * @param id - O ID da pessoa a ser deletada.
 */
function deletarPessoa(id: number): void {
    lista = deletePessoaById(id, lista); //usa o método criado no exercício-02
    exibirLista();
}

/**
 * Função para exibir a lista de pessoas na página.
 */
function exibirLista(): void {
    const listaItens = document.getElementById("lista-itens") as HTMLDivElement;
    listaItens.innerHTML = "";

    const table = document.createElement("table");
    table.classList.add("styled-table"); 

    const headerRow = document.createElement("tr");
    const headers = ["ID", "Nome", "Biografia"];

    headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    lista.forEach((item) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const bioCell = document.createElement("td");
  
        idCell.textContent = item.id.toString();
        nameCell.textContent = item.name;
        bioCell.textContent = item.bio;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(bioCell);

        table.appendChild(row);
    });

    listaItens.appendChild(table);
}
  
exibirLista(); // Chamar a função para exibir a lista inicial

const buttonGetName = document.getElementById("button-getName") as HTMLButtonElement;
const buttonGetBio = document.getElementById("button-getBio") as HTMLButtonElement;
const buttonSetName = document.getElementById("button-setName") as HTMLButtonElement;
const buttonSetBio = document.getElementById("button-setBio") as HTMLButtonElement;
const buttonDeletePerson = document.getElementById("button-deletePerson") as HTMLButtonElement;

// Event listener para o botão "Obter nome"
buttonGetName.addEventListener("click", function() {
    const inputId = document.getElementById("input-id1") as HTMLInputElement;
    const id = parseInt(inputId.value);
    exibirAtributo(id, 'nome');
});

// Event listener para o botão "Obter biografia"
buttonGetBio.addEventListener("click", function() {
    const inputId = document.getElementById("input-id1") as HTMLInputElement;
    const id = parseInt(inputId.value);
    exibirAtributo(id, 'bio');
});

// Event listener para o botão "Modificar nome"
buttonSetName.addEventListener("click", function() {
    const inputId = document.getElementById("input-id2") as HTMLInputElement;
    const inputValor = document.getElementById("input-valor") as HTMLInputElement;
    
    const id = parseInt(inputId.value);
    const valor = inputValor.value;
    modificarAtributo(id, 'nome', valor);
});

// Event listener para o botão "Modificar biografia"
buttonSetBio.addEventListener("click", function() {
    const inputId = document.getElementById("input-id2") as HTMLInputElement;
    const inputValor = document.getElementById("input-valor") as HTMLInputElement;
    
    const id = parseInt(inputId.value);
    const valor = inputValor.value;
    modificarAtributo(id, 'bio', valor);
});

// Event listener para o botão "Deletar pessoa"
buttonDeletePerson.addEventListener("click", function() {
    const inputId = document.getElementById("input-id3") as HTMLInputElement;
    const id = parseInt(inputId.value);

    deletarPessoa(id);
});