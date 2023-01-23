let timerCounter;
let time = questions.length *15; 
let currentQuestionCounter = 0;

let sfxCorrect = new Audio("assets/sfx/correct.wav");
let sfxIncorrect = new Audio("assets/sfx/incorrect.wav");
let questionsOptions = document.getElementById("questions");
let timer = document.getElementById("time");
let optionsSelection = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let playerInitials = document.getElementById("initials");
let comment = document.getElementById("feedback");


function questionList(){
    if(this.value !== questions[currentQuestionCounter].answer){
     time -= 10;
     if(time < 0){
        time = 0;
     }

     timer.textContent = time;

     comment.textContent = "Unfortunately this is an incorrect answer :("
     sfxIncorrect.play();
     sfxCorrect.play();
     comment.textContent = "Well done! This is a correct answer";
    }
    
    comment.setAttribute("class", "feedback");
    setTimeout(function(){
        comment.setAttribute("class", "feedback hide")
    },1000);
    currentQuestionCounter++;
    if(currentQuestionCounter === questions.length) {
        quizFinish()}
        else {
            grabQuestion();
        }
}
function grabQuestion(){
let currentQuestion = questions[currentQuestionCounter];
let questionTitle = document.getElementById("question-title");

questionTitle.textContent = currentQuestion.title;
optionsSelection.innerHTML = "";

currentQuestion.options.forEach(function(options, index){
    let optionsButton = document.createElement("button");
    optionsButton.setAttribute("class","choice");
    optionsButton.setAttribute("value",choice);
    optionsButton.textContent = `${index + 1}. ${choice}`
    optionsButton.addEventListener("click", questionList);
    optionsSelection.append(optionsButton);
})
}














