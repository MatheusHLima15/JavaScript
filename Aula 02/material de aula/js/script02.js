var numero1 = Number(prompt("Digite o primeiro numero"));
var operador = (prompt("Digite o operador"));
var numero2 = Number (prompt("Digite o segundo numero"));

switch(operador){
case "+":
   var resultado= numero1 + numero2;
break;
    case "-":
        var resultado= numero1 - numero2;
        break;

        case "*":
            var resultado = numero1 * numero2;
break;
            case "/":
            var resultado = numero1 / numero2;
        break;
      default:
          alert ("Operador invalido! tente novamente!");
          location.reload();
          break;

}
alert(`O resultado da operação é ${resultado}!`)

var novoCalculo = confirm("Deseja fazer um novo calculo?")

if(novoCalculo == true){
    location.reload()
}