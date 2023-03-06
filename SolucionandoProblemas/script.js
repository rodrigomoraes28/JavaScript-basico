const imagens = document.querySelectorAll('#galeria li img');

const img1 = imagens[0];

function galeriaTrocar(event){

  const principal = document.querySelector('#imagem-principal');
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;
  //principal.setAttribute('alt' , clicada.getAttribute('alt'));
  console.log(clicada.getAttribute('src'));


}

function galeriaClick(item){
  item.addEventListener('click',galeriaTrocar)
}

imagens.forEach(galeriaClick)
