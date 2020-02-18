function add () {
	return 0 + arguments[0] + arguments[1];
}

function subtract () {
	return arguments[0] - arguments[1];
}

function sum () {
	const numList = Array.from(...arguments);
	const sum = numList.reduce((total, num) => {
		return total + num;
	}, 0);
	return sum;
}

function multiply () {
	const numList = Array.from(...arguments);
	const product = numList.reduce((total,num) => {
		return total *= num;
	}, 1);
	return product;
}

function power() {
	return Math.pow(arguments[0], arguments[1]);
}

function factorial() {
	let num = arguments[0];
	if (num == 0 || num == 1)
		return 1;
	let result = num;
	while (num > 1) {
		num --;
		result *= num;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}