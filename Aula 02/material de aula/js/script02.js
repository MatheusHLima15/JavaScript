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
            var resultado= numero1 * numero2;
break;
            case "/"
            var resultado= numero1 / numero2;
        break;
      default:
          alert ("Operador invalido")
          break

}