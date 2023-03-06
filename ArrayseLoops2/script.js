const lista = ["JavaScript" , "HTML" , "CSS"];

function adicionarBody(item){
  body.innerHTML += "<li>" + item + "</li>";
}

lista.forEach(adicionarBody);