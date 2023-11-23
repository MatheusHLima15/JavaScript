var produto1 ="Tenis";
var produto2 = "bola";
var produto3 ="videogame";
 
//ARRAY
var estoquePrdutos = ["Tenis", "bola","videogame"]
console.log(estoquePrdutos);
//indice
console.log(estoquePrdutos[1]);

//metodo
// var frutas = Array();
// frutas[0] = "banana"
// frutas[1] = "maca"
// frutas[2] = "abacaxi"
// frutas[3] = "uvas"
// console.log(frutas);

//comandos array
//push adiciona um elemento na ultima posição
//unshift adiciona um elemento na primeira posição
estoquePrdutos.push("chocolate")
console.log(estoquePrdutos)
estoquePrdutos.unshift("Salgado")
//pop remover um elemento na ultima posição
//shift remove um elemento na primeira posição
estoquePrdutos.shift();
console.log(estoquePrdutos);
//splice (indice, quantos indices, novo elemento)
estoquePrdutos.splice(1,0, "suco")
//includes busca item no array
console.log (estoquePrdutos.includes("chocolate"))
//length contador de elementos no array
console.log(`existem ${estoquePrdutos.length} no estoque`);