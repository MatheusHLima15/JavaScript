// var carro = {
//     marca: "Fiat",
//     modelo: "Uno",
//     ano: 1997,
//     cor: "branco",
//     velocidadeMaxima: 200,
//     velocidadeAtual: 0,

//     acelerar: function(velocidade) {
//         if (this.velocidadeAtual + velocidade <= this.velocidadeMaxima) {
//             this.velocidadeAtual += velocidade;
//             console.log("Acelerando. Velocidade atual: " + this.velocidadeAtual + " km/h");
//         } else {
//             console.log("Velocidade máxima atingida. Não é possível acelerar mais.");
//         }
//     }
// };

// console.log("Detalhes do carro:");
// console.log("Marca: " + carro.marca);
// console.log("Modelo: " + carro.modelo);
// console.log("Ano: " + carro.ano);
// console.log("Cor: " + carro.cor);
// console.log("Velocidade Máxima: " + carro.velocidadeMaxima + " km/h");
// console.log("Velocidade Atual: " + carro.velocidadeAtual + " km/h");

// carro.acelerar(50); 
// carro.acelerar(170);

//Correção 

class Carro{
constructor(marca, modelo, ano, cor, velocidadeMax){
this.marca = marca;
this.modelo = modelo;
this.ano = ano;
this.cor = cor;
this.velocidadeMax = velocidadeMax;
this.velocidadeAtual = 0;

}
acelerar(velocidadeAcelerada){
    if (velocidadeAcelerada < 0){
        return "velocidade inválida!"
    }else{
        if(velocidadeAcelerada + this.velocidadeAtual > this.velocidadeMax){
            return "velocidade não permitida!"
        
    }else{
        this.velocidadeAtual += velocidadeAcelerada
            return "voce acelerou" + velocidadeAcelerada
        }     
    }
}   
} 

var btnCarro = document.querySelector("#btnCarro");

btnCarro.addEventListener('click', criarCarro);

function criarCarro(){
  let marcaInput = document.querySelector("#marca").value;
  let modeloInput = document.querySelector("#modelo").value;
  let dataInput = document.querySelector("#data").value;
  let corInput = document.querySelector("#cor").value;
  let velocidadeMaxInput = document.querySelector("#velocidadeMax").value;
  let resposta = document.querySelector("#resposta");

  var carro = new Carro(marcaInput,modeloInput,dataInput,corInput,velocidadeMaxInput);
  
  resposta.innerHTML =`<div class="post">
  <h3>${carro.modelo}</h3>
  <p>Marca: ${carro.marca}</p>
  <p>Data: ${carro.ano}</p>
  <p>Cor: <span style="color: ${carro.cor}">COR</span></p>
  <p>Velocidade Máxima: ${carro.velocidadeMax}</p>
  </div>`;
}
