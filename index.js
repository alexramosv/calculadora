const evento = document.querySelector(".teclado");
const resultado = document.querySelector(".filaCabecera");

evento.addEventListener("click", onClick);

let operador = "";
let primeraVariable= "";
let segundaVariable= "";

function onClick(evento) {
  const resultado = document.querySelector(".filaCabecera");
  resultado.innerText = evento.target.innerText;

console.log(`Clicado el  ${evento.target.innerText}`);
  switch (evento.target.innerText) {
    case "c":
    resultado.innerText  = "0";
    break;
    case "+":
    segundaVariable = primeraVariable;
    primeraVariable = "";
    operador = evento.target.innerText;
    console.log(`operador : ${operador}`);
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


} 
