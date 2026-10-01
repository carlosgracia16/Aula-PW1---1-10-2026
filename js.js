let contadorChave = 0;
let nome

function exibirVariavel() {

    nome = document.getElementById('nome').value //Esse código ele pega um valor de texto de um campo que é o campo "nome"
    alert(nome) //Ele exibe o nome que colocou em um alerta
}

function salvarLocalmente() {
    nome = document.getElementById('nome').value //Esse código ele pega um valor de texto de um campo que é o campo "nome"
    localStorage.setItem(contadorChave + 1)
    contadorChave = contadorChave + 1
}

function listarLocal() {
    pesquisaChave = nome = document.getElementById('nome').value //Esse código ele pega um valor de texto de um campo que é o campo "nome"
    alert(localStorage.getItem(pesquisaChave))
}