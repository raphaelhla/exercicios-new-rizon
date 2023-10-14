import { getBioById, getNameById, setBioById, setNameById, deletePessoaById } from '../exercicio-02/paradigma_funcional.js';
let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function exibirAtributo(id, tipo) {
    const resultado = document.getElementById("resultado-consulta-ex02");
    let atributo = undefined;
    if (tipo === "nome")
        atributo = getNameById(id, lista);
    else
        atributo = getBioById(id, lista);
    resultado.textContent = atributo ? atributo : "Pessoa não encontrada.";
    exibirLista();
}
function modificarAtributo(id, tipo, valor) {
    if (tipo === "nome")
        setNameById(id, valor, lista);
    else
        setBioById(id, valor, lista);
    exibirLista();
}
function deletarPessoa(id) {
    lista = deletePessoaById(id, lista);
    exibirLista();
}
function exibirLista() {
    const listaItens = document.getElementById("lista-itens");
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
exibirLista();
const buttonGetName = document.getElementById("button-getName");
const buttonGetBio = document.getElementById("button-getBio");
const buttonSetName = document.getElementById("button-setName");
const buttonSetBio = document.getElementById("button-setBio");
const buttonDeletePerson = document.getElementById("button-deletePerson");
buttonGetName.addEventListener("click", function () {
    const inputId = document.getElementById("input-id1");
    const id = parseInt(inputId.value);
    exibirAtributo(id, 'nome');
});
buttonGetBio.addEventListener("click", function () {
    const inputId = document.getElementById("input-id1");
    const id = parseInt(inputId.value);
    exibirAtributo(id, 'bio');
});
buttonSetName.addEventListener("click", function () {
    const inputId = document.getElementById("input-id2");
    const inputValor = document.getElementById("input-valor");
    const id = parseInt(inputId.value);
    const valor = inputValor.value;
    modificarAtributo(id, 'nome', valor);
});
buttonSetBio.addEventListener("click", function () {
    const inputId = document.getElementById("input-id2");
    const inputValor = document.getElementById("input-valor");
    const id = parseInt(inputId.value);
    const valor = inputValor.value;
    modificarAtributo(id, 'bio', valor);
});
buttonDeletePerson.addEventListener("click", function () {
    const inputId = document.getElementById("input-id3");
    const id = parseInt(inputId.value);
    deletarPessoa(id);
});
