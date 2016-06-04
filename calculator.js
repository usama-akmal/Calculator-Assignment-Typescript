alert("this is a Caclulator which performs these operations \"+\",\"-\",\"*\",\"/\" ");
var num1 = parseInt(prompt("Enter number A ")),num2 = parseInt(prompt("Enter number B ")),operation = prompt("Enter operation symbol \"+\",\"-\",\"*\",\"/\" any of these"),ans,final;
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
        final = "This Operation : \"" + operation + "\"\n isnt available in this calculator!";
        break;
}
alert(final);
