var num1 = parseInt(prompt("Introduce un numero "));
var num2 = parseInt(prompt("Introduce un segundo numero"));

var numeroConvertido1= Number(num1)
var numeroConvertido2= Number(num2)

function sumar(numeroConvertido1, numeroConvertido2) {
  return (numeroConvertido1 + numeroConvertido2);
}

function restar(numeroconvertido1, numeroConvertido2) {
  return (numeroConvertido1 - numeroConvertido2);
}

function multiplicar(numeroConvertido1, numeroConvertido2) {
  return (numeroConvertido1 * numeroConvertido2);
}


function dividir(numeroConvertido1, numeroConvertido2) {
  if (num2 !== 0) {
    return (numeroConvertido1 / numeroConvertido2);
  } else {
    console.log("No se puede dividir entre cero.");
  }
}
alert(" La suma de los dos es" + sumar(numeroConvertido1, numeroConvertido2));
alert(" La resta de los dos es" + restar(numeroConvertido1, numeroconvertido2));
alert(" La multiplicacion de los dos es" + multiplicar(numeroConvertido1, numeroConvertido2));
alert(" La division de los dos es" + dividir(numeroConvertido1, numeroConvertido2));
