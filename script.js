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

function remainder(num1, num2) {
	return num1 % num2;
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
		case "%":
			// remainder(num1, num2);
			console.log(remainder(num1, num2));
			break;
		default:
			console.log("Error");
	}
}

const numBtn = document.querySelectorAll(".button.number");
const opeBtn = document.querySelectorAll(".button.operator");
const clearAll = document.querySelector(".button.all-clear");
const backspace = document.querySelector(".button.clear");
const equals = document.querySelector(".button.equals");
const display = document.querySelector(".display");
const displayCurrent = document.createElement("p");
display.appendChild(displayCurrent);
let num = "";

numBtn.forEach((button) =>
	button.addEventListener("click", (e) => {
		num += e.target.innerText;

		displayCurrent.innerText = num;
	})
);

opeBtn.forEach((button) =>
	button.addEventListener("click", (e) => {
		num += e.target.innerText;

		displayCurrent.innerText = num;
	})
);

clearAll.addEventListener("click", () => {
	num = "";
	displayCurrent.innerText = "";
});

backspace.addEventListener("click", () => {
	splitNum = Array.from(num);
	splitNum.pop();
	num = splitNum.join("");
	displayCurrent.innerText = num;
});

equals.addEventListener("click", () => {});
