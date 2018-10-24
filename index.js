const evento = document.querySelector(".teclado");
const resultado = document.querySelector(".filaCabecera");

evento.addEventListener("click", onClick);

let operador = "";
let primeraVariable= "";
let segundaVariable= "";

function onClick(evento) {
  const resultado = document.querySelector(".filaCabecera");
  resultado.innerText = evento.target.innerText;

console.log(`Clickando el  ${evento.target.innerText}`);
  switch (evento.target.innerText) {
    case "c":
    resultado.innerText  = "0";
    primeraVariable = "";
    break;
    case "+":
    segundaVariable = primeraVariable;
    primeraVariable = "";
    operador = evento.target.innerText;
    console.log(`operador : ${operador}`);
    break;

    
    case "←":
    operador = evento.target.innerText;
    primeraVariable.slice(0, -1);
    resultado.innerText = primeraVariable.slice(0, -1);

    if (operador = "←") {
      primeraVariable = primeraVariable.slice(0, -1);
      } 
      /*
      else (primeraVariable = "") {
  primeraVariable = "0";
  resultado.innerText  = primeraVariable;
};

*/

    break;
    case "-":
    segundaVariable = primeraVariable;
    primeraVariable = "";
    operador = evento.target.innerText;
    console.log(`operador : ${operador}`);
    break;
    case "x":
    segundaVariable = primeraVariable;
    primeraVariable = "";
    operador = "*";
    console.log(`operador : ${operador}`);
    break;
    case "/":
    segundaVariable = primeraVariable;
    primeraVariable = "";
    operador = evento.target.innerText;
    console.log(`operador : ${operador}`);
    break;
    case "=":
    jugandoConOperadores(operador);
    function jugandoConOperadores(operador) {
      switch (operador) {
        case "+":
        resultado.innerText = String(parseInt(segundaVariable) + parseInt(primeraVariable));
        break;
        case "*":
        resultado.innerText = String(parseInt(segundaVariable) * parseInt(primeraVariable));
        break;
        case "-":
        resultado.innerText = String(parseInt(segundaVariable) - parseInt(primeraVariable));
        break;
        case "/":
        resultado.innerText = String(parseInt(segundaVariable) / parseInt(primeraVariable));
        break;
      };
    };
    primeraVariable = "";
    break;
    default:
    primeraVariable = primeraVariable + evento.target.innerText;
    resultado.innerText = primeraVariable
  }
 

  
  console.log(`Esta es la primera variable: ${primeraVariable}`);
  console.log(`segunda variable: ${segundaVariable}`);


} ;
