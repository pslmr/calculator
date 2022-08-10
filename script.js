function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function operate(num1, num2, ope) {
	switch (ope) {
		case "+":
			//add(num1, num2);
			console.log(add(num1, num2));
			break;
		case "-":
			//subtract(num1, num2);
			console.log(subtract(num1, num2));
			break;
		case "*":
			//multiply(num1, num2);
			console.log(multiply(num1, num2));
			break;
		case "/":
			//divide(num1, num2);
			console.log(divide(num1, num2));
			break;
		default:
			console.log("Error");
	}
}
