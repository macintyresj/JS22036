let saldo = 10000;
let monto = 0;
let movimientos = `saldo inicial ${saldo}\n`;
let cajero = prompt(
  `Elija la operación que desea realizar o 0 para finalizar:
  1.EXTRACCION
  2.DEPÓSITO
  3.CONSULTA
  0.FINALIZAR
  `
);

while (cajero != 0) {
  switch (cajero) {
    case "1":
      monto = Number(prompt("Ingrese el monto a extraer"));
      if (monto <= saldo) {
        saldo = saldo - monto;
        movimientos += `extraccion ${monto}\n`;
        alert("Operación exitosa su nuevo saldo es de $" + saldo);
      } else {
        alert("Error:No puede extraer ese monto su saldo es de $" + saldo);
      }
      break;
    case "2":
      monto = Number(prompt("Ingrese el monto a depositar"));
      saldo += monto;
      movimientos += `deposito ${monto}\n`;
      alert("Introduzca los billetes y presione aceptar para continuar");
      alert("Operación exitosa su nuevo saldo es $" + saldo);
      break;
    case "3":
      movimientos += `saldo final ${saldo}\n`;
      alert(movimientos);
      break;

    default:
      alert("Error");
  }
  cajero = prompt(
    `Elija la operación que desea realizar o 0 para finalizar:
      1.EXTRACCION
      2.DEPÓSITO
      3.CONSULTA
      0.FINALIZAR
      `
  );
}
