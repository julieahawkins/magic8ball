
$('.click').on('click', displayAnswer);
$('.reset').on('click', reset);

function displayAnswer() {
	$('.click').addClass('wobble');
	reset();
	setTimeout(function() { 
		$('.click').removeClass('wobble'); 
		$('.display').replaceWith(`<div class="display blue-center-circle">
									<div class="triangle">
										<p class="answer">${findAnswer()}</p>
										</div>
										</div>`);
	},830); 	
};

function findAnswer() {
	const answers = ['Yes!', 'It is certain', 'It is decidedly so', 'Without a doubt', 
		'Definitely', 'You can count on it', 'Signs point to Yes', 'Outlook good', 
		'Most likely', 'The force is with you', 'It\'s all too hazy, ask later', 'Ask again', 
		'I cannot say', 'No way to predict', 'Concentrate and ask again', 'Don\'t count on it', 
		'My reply is NO', 'Sources say no', 'Outlook not so good', 'Very doubful'];
	return (answers[Math.floor(Math.random() * answers.length)])
};

function reset() {
	$('.display').replaceWith(`<div class="center-circle"><h2 class="display">8</h2></div>`);
};


//add more answers options (yoda, homer, sarcastic...)
//add dropdown? for personality change

