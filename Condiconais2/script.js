const botaoSomar = document.querySelector('.somar');


function funcaoSoma(){

  const qnt = document.querySelector('.quantidade');
  const numero = Number(qnt.innerText);
  if(numero < 10){
   qnt.innerText = numero + 1;
}
  else{
    console.log("Não é possível adicionar, erro")
  }

}

if (botaoSomar){
botaoSomar.addEventListener("click", funcaoSoma);
}