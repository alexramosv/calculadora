const evento = document.querySelector(".teclado");
const resultado = document.querySelector(".filaCabecera");

evento.addEventListener("click", onClick);/*
evento.addEventListener("keyup", onKeyUp);*/

let contador = 0;
let nuevoNumero = 0;

function onClick(evento) {
  const resultado = document.querySelector(".filaCabecera");
  resultado.innerText = evento.target.innerText;

  

console.log(`Clicado el  ${evento.target.innerText}`);
  switch (evento.target.innerText) {
    case "c":
    resultado.innerText  = "0";
    break;
    case "+":
    resultado.innerText  = String(parseInt(contador) + 5);
    break
  }
 
  contador = evento.target.innerText;
  console.log(contador);
/*
  nuevoNumero = evento.target.innerText;
  console.log(nuevoNumero);
  */
} 


/*+ numero2 ;


  
/*
tiene que ir un switch
*/
/*
switch (resultado) {
  case '+':
    console.log('Vamos a sumar');
    break;}
}
*/



/*
document.querySelector(".teclado").addEventListener("click", onClick);

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
    alert(`You clicked on button ${event.target.innerText}`);
  }
}

*/

/*

var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}

*/
