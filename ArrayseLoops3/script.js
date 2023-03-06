const links = document.querySelectorAll("nav a");
// elemento = links.innerText;

function ativarLink(item){
  console.log(item)
  const href = item.href;
  const url = document.location.href;
  if(url === href){
     item.style.backgroundColor = "black";
     item.style.color = "white";
  }

  console.log(url);
  console.log(href);
}

links.forEach(ativarLink);  //precisa do foreach porque usou o queryAll e pegou todos os "a href" que tem em nav

// links.addEventListener("click", ativarLink);
