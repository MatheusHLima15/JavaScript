// var textInput = document.getElementById ("textInput");
// textInput.addEventListener("focusin", function(){
//  textInput.style.backgroundColor = "Yellow";

// })

// textInput.addEventListener("focusout", function(){
//     textInput.style.backgroundColor = "White";
   
//    })

   //pegar input
   input = document.querySelector("#textInput");
   var text = document.querySelector("#text");
   // add evento foco e perder foco
   input.addEventListener("focus", mudaCor);
   input.addEventListener("blur", mudaCorVerifica);
   //fazer o input ficar amarelo quando selecionado
   function mudaCor(){
       let text = document.querySelector("#text")
       input.style.backgroundColor = "yellow";
      
   }

   function mudaCorVerifica(){
       let inputValor = input.value.length;
       if(inputValor < 3){
        input.style.backgroundColor= "red";
    }else{
        input.style.backgroundColor= "green";
       }
   }
   //pegar a quantidade de caracteres
   //verificar se tem 3 ou mais para verde
   //verificar se tem 3 ou menos para vermelho


