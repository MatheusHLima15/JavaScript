function mostrarSucessorAntecessor(numeroDigitado) {
    if (isNaN(numeroDigitado)) {
        console.log('Por favor, insira um número válido.');
        return;
    }

    var antecessor = numeroDigitado - 1;
    var sucessor = numeroDigitado + 1;
   
    console.log('Antecessor: ' + antecessor + '\nNúmero Escolhido: ' + numeroDigitado + '\nSucessor: ' + sucessor);
}


mostrarSucessorAntecessor(5); 