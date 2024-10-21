let formador = ["Vitor",37,1987];

let pessoa ={
    nome: "Vitor",
    idade: 37,
    ano_de_nascimento: 1987,
    validar_idade:() => {
        console.log("a minha idade");
    },
};

console.log("Nome:",formador[0]);
console.log("idade:",formador[1]);
console.log("Ano de Nascimento:",formador[2]);

console.log("Nome:",pessoa.nome);

pessoa. validar_idade();