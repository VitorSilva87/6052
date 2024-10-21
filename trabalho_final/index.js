let stateStack = [];  // Pilha para rastrear os estados anteriores
let currentRoom = null;  // Variável para rastrear o ambiente atual

// Objeto que armazena o estado de cada ambiente (ligado/desligado)
const roomStates = {};

// Inicializa todos os ambientes com estado "desligado"
document.querySelectorAll('.roomButton').forEach(button => {
    const room = button.getAttribute('data-room');
    roomStates[room] = false;  // False significa "desligado"
});

document.getElementById("enterButton").addEventListener("click", function() {
    // Salva o estado atual na pilha
    stateStack.push("home");
    
    // Oculta o botão "Entrar"
    this.style.display = "none";

    // Exibe o contêiner dos botões dos ambientes
    document.getElementById("roomButtons").style.display = "flex";

    // Exibe o botão "Volta para Trás"
    document.getElementById("backButton").style.display = "block";
});

// Adiciona funcionalidade para o botão "Volta para Trás"
document.getElementById("backButton").addEventListener("click", function() {
    // Retorna ao estado anterior, se existir
    if (stateStack.length > 0) {
        const lastState = stateStack.pop();  // Remove o último estado da pilha

        if (lastState === "home") {
            document.getElementById("roomButtons").style.display = "none";
            document.getElementById("enterButton").style.display = "block";
            this.style.display = "none";
        } else if (lastState.startsWith("room:")) {
            const room = lastState.split(":")[1];
            document.getElementById("controlButtons").style.display = "none";
            document.getElementById("roomButtons").style.display = "flex";
            currentRoom = room;  // Atualiza o ambiente atual
        }
    }
});

// Ao clicar em qualquer botão de ambiente
document.querySelectorAll('.roomButton').forEach(button => {
    button.addEventListener('click', function() {
        currentRoom = this.getAttribute('data-room');  // Obtém o nome do ambiente atual
        stateStack.push(`room:${currentRoom}`);  // Salva o estado atual na pilha

        // Oculta os botões dos ambientes
        document.getElementById("roomButtons").style.display = "none";

        // Exibe os botões "Ligar" e "Desligar" para o ambiente específico
        displayControlButtons(currentRoom);
    });
});

// Função para criar e exibir os botões "Ligar" e "Desligar" para o ambiente atual
function displayControlButtons(room) {
    const controlContainer = document.getElementById("controlContainer");
    controlContainer.innerHTML = '';  // Limpa o contêiner antes de adicionar novos botões

    // Cria os botões "Ligar" e "Desligar" para o ambiente atual
    const ligarButton = document.createElement('button');
    ligarButton.textContent = `Ligar ${room}`;
    ligarButton.id = `ligar-${room}`;
    
    const desligarButton = document.createElement('button');
    desligarButton.textContent = `Desligar ${room}`;
    desligarButton.id = `desligar-${room}`;

    controlContainer.appendChild(ligarButton);
    controlContainer.appendChild(desligarButton);

    // Exibe o contêiner de controle
    document.getElementById("controlButtons").style.display = "block";

    // Atualiza o estado do botão "Ligar" com base no estado salvo
    if (roomStates[room]) {
        ligarButton.classList.add("ligado");  // Se estiver ligado, aplica o estilo amarelo
    }

    // Se o ambiente for o portão, modifica o texto dos botões
    if (room === "Portão Garagem") {
        ligarButton.textContent = "Abrir Portão";
        desligarButton.textContent = "Fechar Portão";
    }

    // Adiciona eventos aos botões criados dinamicamente
    ligarButton.addEventListener('click', function() {
        roomStates[room] = true;  // Atualiza o estado para "ligado"
        ligarButton.classList.add("ligado");  // Adiciona a classe "ligado" para mudar a cor para amarelo
    });

    desligarButton.addEventListener('click', function() {
        roomStates[room] = false;  // Atualiza o estado para "desligado"
        ligarButton.classList.remove("ligado");  // Remove a classe "ligado" para voltar à cor original
    });
}
