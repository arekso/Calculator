//calculator screen
screen.textContent = 

//buttons
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {parseInt("1")});

const btn2 = document.querySelector('#btn2');
btn1.addEventListener('click', () => {parseInt("2")});

const btn3 = document.querySelector('#btn3');
btn1.addEventListener('click', () => {parseInt("3")});

const btn4 = document.querySelector('#btn4');
btn1.addEventListener('click', () => {parseInt("4")});

const btn5 = document.querySelector('#btn5');
btn1.addEventListener('click', () => {parseInt("5")});

const btn6 = document.querySelector('#btn6');
btn1.addEventListener('click', () => {parseInt("6")});

const btn7 = document.querySelector('#btn7');
btn1.addEventListener('click', () => {parseInt("7")});

const btn8 = document.querySelector('#btn8');
btn1.addEventListener('click', () => {parseInt("8")});

const btn9 = document.querySelector('#btn9');
btn1.addEventListener('click', () => {parseInt("9")});

const btn0 = document.querySelector('#btn0');
btn1.addEventListener('click', () => {parseInt("0")});





function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (array) {
	//reduce adds up all numbers
	return array.reduce((total, current) => total+current, 0);
}

function multiply (array) {
	return array.length
	? array.reduce((accumulator, nextItem) => accumulator*nextItem)
	: 0;
}

function power(a, b) {
	return Math.pow(a,b);
}

function factorial(n) {
	if (n <= 1) {
		return 1;
	}
	let fac = n*factorial(n-1); 
	return fac;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}