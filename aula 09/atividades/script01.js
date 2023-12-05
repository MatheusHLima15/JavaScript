function gerarTabuada() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabuadaDiv = document.getElementById("tabuada");

    // Limpa o conteúdo anterior
    tabuadaDiv.innerHTML = "";

    if (!isNaN(numero) && numero >= 1 && numero <= 10) {
        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            tabuadaDiv.innerHTML += `${numero} x ${i} = ${resultado} <br>`;
        }
    } else {
        tabuadaDiv.innerHTML = "Por favor, escolha um número válido de 1 a 10.";
    }
}