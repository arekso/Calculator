// select buttons
const buttons = document.querySelectorAll('input');
// select the input element for display
const display = document.querySelector('.display');

//add event listeners for each button
buttons.forEach(function(button) {
	button.addEventListener ('click', calculate) ;
}); 


// calculate 
function calculate(event) {
	//button clicked value
	const clickedbutton = event.target.value;

	if (clickedbutton === '=') {
		//if the value is not empty
		if (display.value !== '') {
			display.value = eval(display.value);
		}
	}
	
	else if (clickedbutton === 'C') {
		//clear
		display.value = '';
	}

	else {
		// concat the clicked button values
		display.value += clickedbutton;
	}
}