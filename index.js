const evento = document.querySelector(".teclado");
const resultado = document.querySelector(".filaCabecera");

evento.addEventListener("click", onClick);/*
evento.addEventListener("keyup", onKeyUp);*/

let contador = 0;
let nuevoNumero = 0;
let prueba = 5;
let operador = "";

function onClick(evento) {
  const resultado = document.querySelector(".filaCabecera");
  resultado.innerText = evento.target.innerText;

  

console.log(`Clicado el  ${evento.target.innerText}`);
  switch (evento.target.innerText) {
    case "c":
    resultado.innerText  = "0";
    break;
    case "+":
    nuevoNumero  = contador;
    operador = evento.target.innerText;
    console.log(`operador : ${operador}`);
    break;
    case "-":
    nuevoNumero  = contador;
    operador = evento.target.innerText;
    console.log(`operador : ${operador}`);
    break;
    case "x":
    nuevoNumero  = contador;
    operador = "*";
    console.log(`operador : ${operador}`);
    break;
    case "/":
    nuevoNumero  = contador;
    operador = evento.target.innerText;
    console.log(`operador : ${operador}`);
    break;
    case "=":
    jugandoConOperadores(operador);
    function jugandoConOperadores(operador) {
      switch (operador) {
        case "+":
        resultado.innerText = String(parseInt(nuevoNumero) + parseInt(contador));
        break;
        case "*":
        resultado.innerText = String(parseInt(nuevoNumero) * parseInt(contador));
        break;
        case "-":
        resultado.innerText = String(parseInt(nuevoNumero) - parseInt(contador));
        break;
        case "/":
        resultado.innerText = String(parseInt(nuevoNumero) / parseInt(contador));
        break;
      }
    }
    break;
  }
 
  contador = evento.target.innerText;
  console.log(`Este es el contador: ${contador}`);
  console.log(`Este es el nuevoNumero; ${nuevoNumero}`);
  console.log(`Este es el prueba: ${prueba}`);

} 




