class Aluno{
    constructor(valNome,valIdade,valTurma){
this.nome = valNome;
this.idade= valIdade;
this.turma = valTurma;

    }
}


class Qualificacao{
    constructor(valNome,valDuracao,valTipo){
this.nome = valNome;
this.duracao= valDuracao;
this.tipo = valTipo;

    }
}

var curso1 = new Qualificacao("DEV FRONT-END", 240, "Tecnologia da informacao");
var curso2 = new Qualificacao("JavaScript", 550, "Tecnologia da informacao");

var aluno1 = new Aluno("Alfredo", 24 , curso2);
var aluno2 = new Aluno("Alice", 22 , curso1);

//atibuto privativo = apenas o objeto em si poderá mudar o seus valores, não aceitando uma retribuição fora do seu objeto         