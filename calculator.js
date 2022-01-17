let lastOperator;
let result;
let first_number;
let second_number;

// calculator'ın tuşlarını basılmasını dinle
const first_line = document.querySelector(".upperhand");
const second_line = document.querySelector(".lowerhand");

const numbers = document.querySelectorAll("input[class='number']");

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		if (event.target.value === "0" && second_line.innerText === "0") return;
		if (event.target.value === "." && second_line.innerText === ".") return;

		second_line.innerText += event.target.value;
	});
});

const operators = document.querySelectorAll("input[class='operator']");

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {

		if (second_line.innerText === "") return;

		first_number = Number(second_line.innerText);

		console.log("first_number: ", first_number);

		lastOperator = event.target.value;

		console.log("operator: ", lastOperator);

		first_line.innerText  = second_line.innerText + " " + event.target.value;
		second_line.innerText = "";
	})
});

const deleteButton = document.querySelector("input[data-harf='DEL']");
deleteButton.addEventListener("click", () => {
	first_line.innerText = "";
	second_line.innerText = "";

	lastOperator = "";
	first_number = "";
	second_number = "";
});

const clearButton = document.querySelector("input[data-harf='C']");
clearButton.addEventListener("click", () => {
	second_line.innerText = "";
});


const equalButton = document.querySelector("input[data-harf='=']");

equalButton.addEventListener("click", () => {

	if (second_line.innerText === "") return;
	if (first_line.innerText === "") return;
	
	first_line.innerText = "";
	second_number = Number(second_line.innerText);

	console.log("first_number: ", first_number);
	console.log("operator: ", lastOperator);
	console.log("second_number: ", second_number);

	switch (lastOperator) {
		case "+":
			result = first_number + second_number;
			second_line.innerText = result;
			break;
		case "-":
			result = first_number - second_number;
			second_line.innerText = result;
			break;
		case "x":
			result = first_number * second_number;
			second_line.innerText = result;
			break;
		case "÷":
			result = first_number / second_number;
			second_line.innerText = result;
			break;
	
		default:
			break;
	}
});