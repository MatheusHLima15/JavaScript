//INSTALAÇÃO
//VISITE https://jquery.com/download/
//CLICAR NA OPÇÃO "DOWNLOAD UNCOMPRESSED j-query 3.7.1"
//ABERTO O ARQUIVO, APERTE COM O BOTÃO DIREITO E SALVAR PÁGINA COMO.. E SALVE EM UM LOCAL DA SUA PREFERENCIA



//SELETOR JQUERY = $(# ou .elemento)
var titulo = $("#tituloDaPagina").text("Jquery Aula");
console.log(titulo);

var paragrafo = $("textoDaPagina").on("mouseover",function(){
    console.log("Este é o texto do site");

});