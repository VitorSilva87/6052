fetch('https://www.nike.com/api/exemplo')  // URL de exemplo, substitua por uma válida
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();  // Converte a resposta para JSON
  })
  .then(data => {
    console.log(data);  // Manipula os dados recebidos
  })
  .catch(error => {
    console.error('Houve um erro:', error);  // Lida com erros
  });