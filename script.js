let notas = [];

function adicionarNota() {
    let inputNota = document.getElementById("nota");
    let erro = document.getElementById("erro");
    let listaNotas = document.getElementById("listaNotas");
    erro.textContent = "";

    let nota = inputNota.value.replace(',', '.'); // para ponto ou vírgula 
    if (nota === "") {
        erro.textContent = "Por favor, insira uma nota.";
        return;
    }

    nota = parseFloat(nota);
    if (isNaN(nota) || nota < 0 || nota > 10) {
        erro.textContent = "A nota digitada é inválida, por favor, insira uma nota válida (0-10).";
        return;
    }

    notas.push(nota);
    let item = document.createElement("li");
    item.textContent = `A nota ${notas.length} foi ${nota}`;
    listaNotas.appendChild(item);
    inputNota.value = "";
}

function calcularMedia() {
    let resultado = document.getElementById("resultado");
    if (notas.length === 0) {
        resultado.textContent = "Nenhuma nota inserida para calcular a média.";
        return;
    }

    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;
    resultado.textContent = `Média: ${media.toFixed(2)}`;
}
