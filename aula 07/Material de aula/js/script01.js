//REPLACE/ REPLACEALL
var frase = "Olá mundo!, o mundo é muito legal";
console.log(frase);

console.log(frase.replace("mundo","Bacana"));
console.log(frase.replaceAll("mundo","Bacana"));


//SET ATRIBUTE
document.querySelector("span").setAttribute("style","color: orange;")

//CLASS LIST
// document.querySelector("#classlist").classList.remove("claro")
// document.querySelector("#classlist").classList.add("claro")

var elemento = document.querySelector("#classlist")
//contains se contem a classe
//toggle troca de classe
if(elemento.classList.contains("claro")){
    //elemento.classlist.toggle("escuro")
    elemento.classList.replace("claro","escuro");

}

//index of / includes
var frutas = ['morango','banana','laranja','uva']
//includes -> true e false
console.log(frutas.includes("morango"));
//index of -> valor indice do array (caso não exista, -1)
console.log(frutas.indexOf("aranja"))

if(frutas.includes("abacaxi"==false)){
    console.log("não achei")
}

//set timeout
//promise se assemelha a uma função, porem ele configura sucesso e erro
function msg(){
    return new Promise(() =>{

        console.log("seja bem-vindo")
    })
    
}
async function carregando(){
    setTimeout(()=>{
        console.log("bom dia!")
    }, 2000);
    teste()
    await msg()
}