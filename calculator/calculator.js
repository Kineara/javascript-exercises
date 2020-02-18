function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total,num) => total + num, 0);
}

function multiply (array) {
	return array.length 
		? array.reduce((total,num) => total * num) 
		: 0;
}

function power(a,b) {
	return Math.pow(a, b);
}

function factorial(num) {
	if (num === 0)
		return 1;
	let acc = num;
	while (num > 1) {
		num --;
		acc *= num;
	}
	return acc;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}