const ativar = document.querySelector(".ativar");

/** @param{MouseEvent} event*/
function handleClick(event){
  console.log(event.x);
}

ativar.addEventListener('click', handleClick)  

// console.log(ativar);