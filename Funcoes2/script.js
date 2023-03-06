
function livro(nome,ano,autor){

  const nome2 = nome.toUpperCase();
  const ano2 = 2023 - ano;
  const nome3 = nome + ' por ' + autor;
 
const livroDados = { 
  nomeLivro : nome2,
  calculo : ano2,
  frase : nome3,
};

  return livroDados;
}

const teste = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(teste);



