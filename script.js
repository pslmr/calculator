function add(num1, num2) {
	return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return (num1 * num2).toFixed(2);
}

function divide(num1, num2) {
	if (num2 === "0") {
		return "u serious bro??";
	}
	return (num1 / num2).toFixed(2);
}

function remainder(num1, num2) {
	return num1 % num2;
}

function operate(num1, num2, ope) {
	switch (ope) {
		case "+":
			firstNum = add(num1, num2);
			displayCurrent.innerText = firstNum;
			console.log(add(num1, num2));
			break;
		case "-":
			firstNum = subtract(num1, num2);
			displayCurrent.innerText = firstNum;
			console.log(subtract(num1, num2));
			break;
		case "*":
			firstNum = multiply(num1, num2);
			displayCurrent.innerText = firstNum;
			console.log(multiply(num1, num2));
			break;
		case "/":
			firstNum = divide(num1, num2);
			displayCurrent.innerText = firstNum;
			console.log(divide(num1, num2));
			break;
		case "%":
			firstNum = remainder(num1, num2);
			displayCurrent.innerText = firstNum;
			console.log(remainder(num1, num2));
			break;
		default:
			console.log("Error");
	}
}

const numBtn = document.querySelectorAll(".button.number");
const decimalBtn = document.querySelector("button.dec");
const opeBtn = document.querySelectorAll(".button.operator");
const clearAll = document.querySelector(".button.all-clear");
const backspace = document.querySelector(".button.clear");
const equals = document.querySelector(".button.equals");
const display = document.querySelector(".display");
const displayCurrent = document.createElement("p");
const displayPrevious = document.createElement("p");
display.appendChild(displayCurrent);
display.appendChild(displayPrevious);
displayCurrent.setAttribute("style", "min-width: 0");
displayPrevious.setAttribute("style", "color: #00a2b7");
let firstNum = "";
let secondNum = "";
let ope = "";
const regex = /[^\.\w]/g;

numBtn.forEach((button) =>
	button.addEventListener("click", (e) => {
		firstNum += e.target.innerText;
		displayCurrent.innerText = firstNum;
	})
);

opeBtn.forEach((button) =>
	button.addEventListener("click", (e) => {
		if (ope === "") {
			firstNum += e.target.innerText;
			ope = e.target.innerText;
			displayCurrent.innerText = firstNum;
		} else {
			equalsEvent();
			firstNum += e.target.innerText;
			ope = e.target.innerText;
			displayCurrent.innerText = firstNum;
			displayPrevious.innerText = "";
		}
	})
);

clearAll.addEventListener("click", () => {
	clear();
	displayCurrent.innerText = "";
	displayPrevious.innerText = "";
	decimalBtn.disabled = false;
	decimalBtn.classList.remove("disable");
});

backspace.addEventListener("click", () => {
	const regex = /[\.]/g;
	firstNum = popJoin(firstNum);
	displayCurrent.innerText = firstNum;
	if (!regex.test(firstNum)) {
		decimalBtn.disabled = false;
		decimalBtn.classList.remove("disable");
	}
	if (firstNum === "") {
		displayPrevious.innerText = "";
	}
});

equals.addEventListener("click", equalsEvent);

function equalsEvent() {
	secondNum = firstNum.replace(regex, " ");
	const whiteSpaceIndex = getWhiteSpace();
	const firstSetArr = Array.from(secondNum);
	const secondSetArr = firstSetArr.splice(whiteSpaceIndex);
	firstSetArr.splice(whiteSpaceIndex);
	const firstSet = firstSetArr.join("");
	secondSetArr.shift();
	const secondSet = secondSetArr.join("");

	displayPrevious.innerText = firstNum;
	operate(firstSet, secondSet, ope);
}

function popJoin(value) {
	let toArr = Array.from(value);
	toArr.pop();
	let newNum = toArr.join("");
	return newNum;
}

function clear() {
	firstNum = "";
	ope = "";
	secondNum = "";
}

const getWhiteSpace = () => {
	const splitNum = Array.from(secondNum);
	let whiteSpace = 0;
	for (let i = 0; i < splitNum.length; i++) {
		if (splitNum[i] === " ") {
			whiteSpace = i;
		}
	}
	return whiteSpace;
};

decimalBtn.addEventListener("click", (e) => {
	const regex = /[\.]/g;

	if (regex.test(firstNum)) {
		e.target.disabled = true;
		e.target.classList.add("disable");
	}
});
