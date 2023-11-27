// var clienteNome = "Leonardo";
// var clienteSaldo = 0;
// var clienteCpf = 865-998-567-44;
// var clienteAgencia = "001";
// var clienteConta = "2511212"
// var clienteData = "11/09/2001"

// var cliente1 = ["Nome = Leonardo", "Saldo = 100"];

class Cliente {
    nome;
    dtDeNasci;
    cpf;
    conta;
    agencia;
    saldo;
    sacar(valor){
    // saldo -= valor;
    // saldo += valor;
    //this.atributo => atributo de classe
    if (this.saldo >= valor){

        this.saldo = this.saldo - valor
        return valor; 
    }else
    return "Operação não autorizada! tá quebrado ainda hein!" 
    
}
depositar(valor){
if (valor > 0){
this.saldo = this.saldo + valor
return valor; 
    }else{
    return "Operação não autorizada! faça um depósito de pelo menos 1 R$!"

}
}
consultarSaldo(){
return "O saldo da conta é de: R$ "+this.saldo;

}
}

var cliente1 = new Cliente();
cliente1.nome = "Leonardo";
cliente1.dtDeNasci = "22/11/1990";
cliente1.cpf = 12333234;
cliente1.conta = "213214324"
cliente1.agencia = "T1000";
cliente1.saldo = 200;

console.log (cliente1);


var cliente2 = new Cliente();