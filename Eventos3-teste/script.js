circulo = document.querySelector('#circulo');


function moverMouse(event){

  const x = event.x;
  const y = event.y;
  
  circulo.style.top = y + "px";
  circulo.style.left = x + "px";

}


window.addEventListener('mousemove', moverMouse);