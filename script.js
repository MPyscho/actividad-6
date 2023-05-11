var num1 = parseInt(prompt("Introduce un numero "));
var num2 = parseInt(prompt("Introduce un segundo numero"));

var numeroConvertido= Number(num1)
var numeroConvertido= Number(num2)

function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return (num1 - num2);
}

function multiplicar(num1, num2) {
  return (num1 * num2);
}


function dividir(num1, num2) {
  if (num2 !== 0) {
    return (num1 / num2);
  } else {
    console.log("No se puede dividir entre cero.");
  }
}
alert(" La suma de los dos es" + sumar(num1, num2));
alert(" La resta de los dos es" + restar(num1, num2));
alert(" La multiplicacion de los dos es" + multiplicar(num1, num2));
alert(" La division de los dos es" + dividir(num1, num2));
