const evento = document.querySelector(".teclado");
const resultado = document.querySelector(".filaCabecera");

evento.addEventListener("click", onClick);/*
evento.addEventListener("keyup", onKeyUp);*/


function onClick(evento) {
  const resultado = document.querySelector(".filaCabecera");
  resultado.innerText = evento.target.innerText;
/*
tiene que ir un switch
*/
}




/*
document.querySelector(".teclado").addEventListener("click", onClick);

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
    alert(`You clicked on button ${event.target.innerText}`);
  }
}

*/


