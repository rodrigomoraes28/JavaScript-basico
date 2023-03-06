const lista = ["JavaScript", 20 , true, "CSS", "PHP"];
// console.log(lista.length)


const body = document.querySelector('body');



for (let index = 0; index < lista.length; index++){
  // console.log(lista[index]);
  // body.innerHTML += '<p>TESTE</p>'
  body.innerHTML += "<li>" + lista[index] + "</li>";
}