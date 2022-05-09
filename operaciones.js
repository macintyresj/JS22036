let bienvenida = alert(
  "La siguiente calculadora le permitirá sumar, restar, multiplicar y dividir 2 números a elección"
);
let operacion = prompt(
  `Elija la operación que desea realizar:
1.SUMA
2.RESTA
3.MULTIPLICACIÓN
4.DIVISIÓN`
);
let numero1 = Number(prompt("Elija un numero"));
let numero2 = Number(prompt("Elija otro numero"));
let resultado = 0;

if (operacion == 1) {
  resultado = numero1 + numero2;
  console.log("La suma de los numeros es " + resultado);
  alert("La suma de los numeros es " + resultado);
} else if (operacion == 2) {
  resultado = numero1 - numero2;
  console.log("La resta de los numeros es " + resultado);
  alert("La resta de los numeros es " + resultado);
} else if (operacion == 3) {
  resultado = numero1 * numero2;
  console.log("La multiplicación de los numeros es " + resultado);
  alert("La multiplicación de los numeros es " + resultado);
} else if (operacion == 4) {
  if (numero2 == 0) {
    numero2 = prompt("No puedo dividir por cero, elija otro numero");
    resultado = numero1 / numero2;
    console.log("La división de los numeros es " + resultado);
    alert("La división de los numeros es " + resultado);
  } else {
    resultado = numero1 / numero2;
    console.log("La división de los numeros es " + resultado);
    alert("La división de los numeros es " + resultado);
  }
} else {
  console.log("Opción incorrecta");
  alert("Opción incorrecta");
}
