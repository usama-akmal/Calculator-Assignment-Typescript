alert("this is a Caclulator which performs these operations \"+\",\"-\",\"*\",\"/\" ")
var num1: number = parseInt(prompt("Enter number A "));
var num2: number = parseInt(prompt("Enter number B "));
var operation : string = prompt("Enter operation symbol \"+\",\"-\",\"*\",\"/\" any of these");
var ans : number;
var final : string;
switch (operation) {
    case "+":
        ans = num1 + num2;
        final = "Your Answer : " + ans;
        break;
    case "-":
        ans = num1 - num2;
        final = "Your Answer : " + ans;
        break;
    case "*":
        ans = num1 * num2;
        final = "Your Answer : " + ans;
        break;
    case "/":
        ans = num1 / num2;
        final = "Your Answer : " + ans;
        break;    

    default:
        final = "This Operation : \""+operation+"\"\n isnt available in this calculator!";
        break;
}
alert(final);
