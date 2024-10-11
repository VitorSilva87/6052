let numeroSecreto;
let tentativas = 0;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1; // Gera um número entre 1 e 100
    tentativas = 0;
    document.getElementById("mensagem").innerText = "Faça sua primeira tentativa!";
    document.getElementById("reiniciar").style.display = "none"; // Esconde o botão de reiniciar
}

function adivinhar() {
    const numero = parseInt(document.getElementById("numero").value); // Lê o número do input
    tentativas++;

    if (numero < 1 || numero > 100) {
        document.getElementById("mensagem").innerText = "Por favor, digite um número entre 1 e 100.";
        return;
    }

    if (numero === numeroSecreto) {
        document.getElementById("mensagem").innerText = `Parabéns! Você acertou em ${tentativas} tentativas!`;
        document.getElementById("reiniciar").style.display = "inline-block"; // Mostra o botão de reiniciar
    } else if (numero < numeroSecreto) {
        document.getElementById("mensagem").innerText = "O número secreto é maior!";
    } else {
        document.getElementById("mensagem").innerText = "O número secreto é menor!";
    }
}

function reiniciar() {
    iniciarJogo();
    document.getElementById("numero").value = ""; // Limpa o campo de entrada
}

// Inicializa o jogo quando a página é carregada
iniciarJogo();
