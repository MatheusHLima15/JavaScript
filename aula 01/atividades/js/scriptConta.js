var clientes = Number(prompt("Quantos clientes estão na mesa?"))
var valorTotal = Number(prompt("Qual é o valor total da conta?"))

var valorDividido = valorTotal / clientes;

alert(`Cada um vai pagar  + ${valorDividido}`);