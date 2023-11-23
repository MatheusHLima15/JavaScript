//REPETIÇÕES
//WHILE (VERIFICA E DEPOIS FAZ)

var contador = 0;


while(contador <= 10){
console.log(contador);
// contador ++
contador = contador +1
}

//DO WHILE

var cont = 0
do{
console.log(`FIZ o L ${cont} VEZES`);
cont++;
}
while( cont <= 10);

//FOR
//PARA(VAR,CONDICAO,CONTROLADOR)
//FIMPARA 
//(NÃO USE CONST EM FOR)
for(var controlador = 0; controlador <= 10; controlador++){
console.log(controlador, "For é legal")
}

//FOR EACH
console.log("ELEMENTOS");
var elementos = ["ELEMENTO1","ELEMENTO2","ELEMENTO3"];
//function pseudofunction, anonima
elementos.forEach((cadaElemento) =>{
    let cont = 1
console.log(" - "+cadaElemento);
// cont++
});