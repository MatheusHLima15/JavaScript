const verificarPromise = new Promise((resolve, reject) => {
    let nome = "ADM";
    let senha = "ADM";

    if(nome == "ADM" && senha == "ADM"){
    resolve("Seja bem-vindo adm");
}else{
reject("O usuário não é o ADM! faça login de maneira alternativa")


}

});

verificarPromise.catch((x)  =>{
console.log(x)
alert("Deu erro no sistema!")
})