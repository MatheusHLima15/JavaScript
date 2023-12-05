function alternarTema() {
    var estilo = document.getElementById('tema-estilo');
    var temaAtual = estilo.getAttribute('data-tema');

    if (temaAtual === 'light') {
        estilo.innerHTML = `
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin-top: 50px;
                background-color: #2E2E2E;
                color: #FFFFFF;
            }

            button {
                font-size: 16px;
                margin: 5px;
            }
        `;
        estilo.setAttribute('data-tema', 'dark');
    } else {
        estilo.innerHTML = `
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin-top: 50px;
                background-color: #FFFFFF;
                color: #000000;
            }

            button {
                font-size: 16px;
                margin: 5px;
            }
        `;
        estilo.setAttribute('data-tema', 'light');
    }
}