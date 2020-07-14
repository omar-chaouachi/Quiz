var questions = [
{
	question : "What's the Canadian capital's name?",
	option1 : "Montréal",
	option2 : "Torronto",
	option3 : "Ottawa",
	option4 : "Vancouver",
	ansswer : "3"
},
{
	question : "When Carthage was founded ?",
	option1 : "636 BC",
	option2 : "814 BC",
	option3 : "146 BC",
	option4 : "1180 BC",
	ansswer : "2"
},
{
	question : "who's the discovrer of electricity ?",
	option1 : "Benjamin Franklin",
	option2 : "Albert Enstein",
	option3 : "Thomas Edison",
	option4 : "Alessandro Volta",
	ansswer : "1"
},
{
	question : "How fast is the cheetah?", 
	option1 : "40 Km/h",
	option2 : "80 Km/h",
	option3 : "120 Km/h",
	option4 : "93 Km/h",
	ansswer : "4"
}
];

var currentQuestion = 0;
var score = 0;
var container = document.getElementById("quizContainer");
var questionQ = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

	function goToQuestion(questionIndex) {
	var q = questions[questionIndex];
	var questionIndex=0;
	if(questionIndex===0){
		goToQuestion(0)
	}
	
	

	questionQ.textContent = (questionIndex+1) + '- ' + q.question;
	option1.textContent = q.option1;
	option2.textContent = q.option2;
	option3.textContent = q.option3;
	option4.textContent = q.option4;

};



function goToNextQuestion() {
	var selectedOption = document.querySelector("input[type=radio]:checked");
	if(!selectedOption){
		alert("You have to select an answer!");
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer === answer){
		score ++;
	}
	selectedOption.checked = false;
	currentQuestion ++;
	if(currentQuestion === questions.length-1){
		nextButton.textContent = "Finish";
	}
	if(currentQuestion === questions.length){
		container.style.display = "none";
		resultCont.style.display = "";
		resultCont.textContent = "You got " + score + "/" + questions.length;
		return;
	}
	}
	goToNextQuestion();



