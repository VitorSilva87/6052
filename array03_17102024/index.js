const pessoas = [
    { Nome: "Vitor", idade: 37, ano_de_nascimento: 1987 },
    { Nome: "Ana", idade: 33, ano_de_nascimento: 1991 },
    { Nome: "Lemos", idade: 23, ano_de_nascimento: 2000 },
    { Nome: "Tiago", idade: 38, ano_de_nascimento: 1986 },
    { Nome: "Diogo", idade: 40, ano_de_nascimento: 1985 },
    { Nome: "Andre", idade: 21, ano_de_nascimento: 2005 },
    { Nome: "Hugo", idade: 22, ano_de_nascimento: 2001 },
    { Nome: "Miguel", idade: 29, ano_de_nascimento: 1999 },
    { Nome: "Malenga", idade: 50, ano_de_nascimento: 1995 },
];

// Função para procurar pessoa
function procurarPessoa() {
    const nomeInput = document.getElementById("nomeInput").value.trim();
    const resultadoDiv = document.getElementById("resultado");

    // Procurar pessoa pelo nome
    const pessoa = pessoas.find(p => p.Nome.toLowerCase() === nomeInput.toLowerCase());

    // Mostrar resultado ou mensagem de erro
    if (pessoa) {
        resultadoDiv.innerHTML = `<p><strong>Nome:</strong> ${pessoa.Nome}</p>
                                  <p><strong>Idade:</strong> ${pessoa.idade}</p>
                                  <p><strong>Ano de nascimento:</strong> ${pessoa.ano_de_nascimento}</p>`;
    } else {
        resultadoDiv.innerHTML = `<p>Pessoa não encontrada.</p>`;
    }
}