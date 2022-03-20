var transcript;	
function runSpeechRecognition() {
	      
	var output = document.getElementById("output");     
	var action = document.getElementById("action");          
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var recognition = new SpeechRecognition()        
  recognition.onspeechend = function() {
    recognition.stop();
  }
	
  recognition.onresult = function(event) {
    transcript = event.results[0][0].transcript;
    output.innerHTML = "You said: " + transcript;
    output.classList.remove("hide");
  };
	
  recognition.start();
}

function checkAnswer() {
	var answer = document.getElementById("output"); 
	var check = document.getElementById("check");
	
	if (transcript == "the girl chased the lazy wolf") {
		check.innerHTML = "Correct! Click the Next Section button"
	} else {
		check.innerHTML = "Incorrect. Click the Next Section button"
	}
	check.classList.remove("hide");
}

