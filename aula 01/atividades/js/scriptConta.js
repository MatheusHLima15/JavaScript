function calcularConta(numClientes, valorTotal) {
    if (isNaN(numClientes) || isNaN(valorTotal) || numClientes <= 0 || valorTotal <= 0) {
        console.log('Por favor, insira valores válidos.');
        return;
    }
    var valorPorCliente = valorTotal / numClientes;

    console.log('Cada cliente deve pagar: R$ ' + valorPorCliente.toFixed(2));
}

calcularConta(4, 100); 