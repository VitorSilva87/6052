
        let contador = 0;
        let intervalo = null; // Inicializa a variável intervalo como null

        function iniciarContagem() {
            if (intervalo === null) { // Evita múltiplos intervalos
                intervalo = setInterval(function() {
                    document.getElementById("contador").innerText = contador;
                    contador++;
                }, 1000); // A cada 1 segundo
            }
        }

        function pararContagem() {
            if (intervalo !== null) {
                clearInterval(intervalo); // Para o intervalo
                intervalo = null; // Reseta a variável para permitir reiniciar
            }
        }
    