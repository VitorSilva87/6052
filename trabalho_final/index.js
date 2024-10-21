let stateStack = [];  
let currentRoom = null; 


const roomStates = {};


document.querySelectorAll('.roomButton').forEach(button => {
    const room = button.getAttribute('data-room');
    roomStates[room] = false;  
});

document.getElementById("enterButton").addEventListener("click", function() {
    
    stateStack.push("home");
    
    
    this.style.display = "none";

    
    document.getElementById("roomButtons").style.display = "flex";


    document.getElementById("backButton").style.display = "block";
});


document.getElementById("backButton").addEventListener("click", function() {
    
    if (stateStack.length > 0) {
        const lastState = stateStack.pop();  

        if (lastState === "home") {
            document.getElementById("roomButtons").style.display = "none";
            document.getElementById("enterButton").style.display = "block";
            this.style.display = "none";
        } else if (lastState.startsWith("room:")) {
            const room = lastState.split(":")[1];
            document.getElementById("controlButtons").style.display = "none";
            document.getElementById("roomButtons").style.display = "flex";
            currentRoom = room;  
        }
    }
});


document.querySelectorAll('.roomButton').forEach(button => {
    button.addEventListener('click', function() {
        currentRoom = this.getAttribute('data-room');  
        stateStack.push(`room:${currentRoom}`);  

        
        document.getElementById("roomButtons").style.display = "none";

        
        displayControlButtons(currentRoom);
    });
});


function displayControlButtons(room) {
    const controlContainer = document.getElementById("controlContainer");
    controlContainer.innerHTML = '';  

    
    const ligarButton = document.createElement('button');
    ligarButton.textContent = `Ligar ${room}`;
    ligarButton.id = `ligar-${room}`;
    
    const desligarButton = document.createElement('button');
    desligarButton.textContent = `Desligar ${room}`;
    desligarButton.id = `desligar-${room}`;

    controlContainer.appendChild(ligarButton);
    controlContainer.appendChild(desligarButton);

    
    document.getElementById("controlButtons").style.display = "block";

    
    if (roomStates[room]) {
        ligarButton.classList.add("ligado"); 
    }

    
    if (room === "Portão Garagem") {
        ligarButton.textContent = "Abrir Portão";
        desligarButton.textContent = "Fechar Portão";
    }

    
    ligarButton.addEventListener('click', function() {
        roomStates[room] = true;  
        ligarButton.classList.add("ligado");  
        
        
        const lamp = document.querySelector(`button[data-room="${room}"] .lamp`);
        lamp.classList.add("ligada"); 
    });

    desligarButton.addEventListener('click', function() {
        roomStates[room] = false;  
        ligarButton.classList.remove("ligado");  
        
        
        const lamp = document.querySelector(`button[data-room="${room}"] .lamp`);
        lamp.classList.remove("ligada"); 
    });
}
