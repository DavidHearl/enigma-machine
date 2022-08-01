// Create a global varible for input and output
var inputString
var outputString


// Listen for a pressed key
document.body.addEventListener('keydown', function (event) {

	// Store pressed key in a local variable
	let keypressed = event.key

	// If input string has no value assign it to the value of keypressed
	if (inputString == undefined) {
		inputString = keypressed
	} else {
		if (!['Enter', 'Backspace', 'CapsLock'].includes(event.key)) {
			inputString = inputString + keypressed
			// outputString = outputString + Math.random()
		}
	}

	// Remove Character when pressing backspace
	if (event.key == 'Backspace') {
		inputString = inputString.substring(0, inputString.length - 1);
	}

	// Log to console value of input string when enter is pressed
	if (event.key == 'Enter') {
		console.log(inputString)
		// console.log(outputString)
	}

});


