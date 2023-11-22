//OPERADORES LÓGICOS(COMPARAR)
// > MAIOR QUE
//< MENOR QUE
//!= DIFERENTE (<>)
//== IGUAL (= RECEBE, == COMPRA VALOR, COMPARA O VALOR E TIPO)
// >= MAIOR OU IGUAL
//<= MENOR OU IGUAL

// OPERADORES ALTERINÁRIOS
//&& E (DUAS CONDIÇÕES DEVERÃO SER IGUAIS EM RESULTADO)
//|| OU (SE UMA DAS CONDIÇÕES FOR VERDADEIRA SERÁ EXECUTADO)
//! NÃO(SE NÃO FOR A CONDIÇÃO)

//CONDICIONAIS
//IF(SE SENÃO)
if(true){
    console.log("Sou verdadeiro");
}else{
    console.log("Sou falso");
}

//VERIFICAR IDADE
var idade = Number (prompt("Qual a sua idade?"));

if(idade >= 18){
 alert("Seja Bem-vindo!")

}else{
    if(idade==0)
    alert("idade invalida, tente novamente")
    location.reload()
}else{
alert ("Você não tem autorização para entrar nesse site!");
location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
//location.reload();

}

//condição ? bloco1 : bloco2 if ternario
// x > 10 ? alert("legal") : ("maneiro")