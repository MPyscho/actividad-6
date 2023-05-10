
function sumar(num1, num2) {
  console.log(num1 + num2);
}

function restar(num1, num2) {
  console.log(num1 - num2);
}


function multiplicar(num1, num2) {
  console.log(num1 * num2);
}


function dividir(num1, num2) {
  if (num2 !== 0) {
    console.log(num1 / num2);
  } else {
    console.log("No se puede dividir entre cero.");
  }
}


var num1 = parseInt(prompt("Introduce un número "));
var num2 = parseInt(prompt("Introduce un segundo número"));


sumar(num1, num2);
restar(num1, num2);
multiplicar(num1, num2);
dividir(num1, num2);
