let contador = 0;
let intervalo = null; // Inicializa a variável intervalo como null

function controlarContagem() {
    if (intervalo === null) { // Se não está a contar, começa a contar
        intervalo = setInterval(function() {
            document.getElementById("contador").innerText = contador;
            contador++;
        }, 1000); // A cada 1 segundo
        document.getElementById("botao").innerText = "Parar Contagem"; // Muda o texto do botão
    } else { // Se já está a contar, para a contagem
        clearInterval(intervalo);
        intervalo = null;
        document.getElementById("botao").innerText = "Iniciar Contagem"; // Muda o texto do botão
    }
}