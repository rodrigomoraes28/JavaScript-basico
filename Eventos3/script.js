const circulo = document.querySelector('.circulo');

function seguirMouse(event){

  const x = event.x;
  const y = event.y;
  console.log(circulo);
  circulo.style.top = y + 'px';
  circulo.style.left = x + 'px';
}

window.addEventListener('mousemove', seguirMouse);