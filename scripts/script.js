function validateForm(event) {
	event.preventDefault(); // prevent form from submitting by default

	// get form input values
	const nameInput = document.getElementById('name');
	const phoneInput = document.getElementById('phone');
	const emailInput = document.getElementById('email');
	const subjectInput = document.getElementById('subject');
	const topicInput = document.getElementById('topic');
	const messageInput = document.getElementById('message');

	// initialize error message and flag to track errors
	let errorMsg = '';
	let hasError = false;

	// validate name input
	if (nameInput.value.length < 8) {
		errorMsg += 'Name must be at least 8 characters long.<br>';
		hasError = true;
	}

	// validate phone input using regular expressions (regex)
	const phoneRegex = /^(05|9665|009665)\d{8,10}$/;
	if (phoneInput.value !== '' && !phoneRegex.test(phoneInput.value)) {
		errorMsg += 'Invalid phone number format.<br>';
	hasError = true;
	}

	// validate email input using regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailInput.value)) {
		errorMsg += 'Invalid email address format.<br>';
		hasError = true;
	}

	// validate subject, topic, and message inputs
	if (subjectInput.value === '') {
		errorMsg += 'Please enter a subject.<br>';
		hasError = true;
	}

	if (topicInput.value === '') {
		errorMsg += 'Please choose a topic.<br>';
		hasError = true;
	}

	if (messageInput.value === '') {
		errorMsg += 'Please enter a message.<br>';
		hasError = true;
	}

	// display error message if there are any errors
	const errorMsgDiv = document.getElementById('error-msg');
	if (hasError) {
		errorMsgDiv.innerHTML = '<div style="color: red;">' + errorMsg + '</div>';
	} else {
		// submit form data to server if there are no errors
		errorMsgDiv.innerHTML = ''; // clear error message
		document.getElementById('feedback-form').submit();
	}
}