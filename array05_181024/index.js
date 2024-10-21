let formador = ["Vitor", 37, 1987];

let pessoa = {
    nome: "Vitor",
    idade: 37,
    ano_de_nascimento: 1987,
    validar_idade: function() {
        if (this.idade >= 18) {
            console.log("A pessoa é maior de idade.");
        } else {
            console.log("A pessoa é menor de idade.");
        }
    }
};

console.log("Nome:", formador[0]);
console.log("Idade:", formador[1]);
console.log("Ano de Nascimento:", formador[2]);

console.log("Nome:", pessoa.nome);

// Validar a idade usando o método do objeto
pessoa.validar_idade();