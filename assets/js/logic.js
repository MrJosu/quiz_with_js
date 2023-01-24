let timerCounter;
let time = questions.length *8; 
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
    } else {
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

currentQuestion.options.forEach(function(selection, index){
    let optionsButton = document.createElement("button");
    optionsButton.setAttribute("class", "choice");
    optionsButton.setAttribute("value", selection);
    optionsButton.textContent = `${index + 1}. ${selection}`
    optionsButton.addEventListener("click", questionList);
    optionsSelection.append(optionsButton);
    

})
}
function quizFinish(){
    clearInterval(timerCounter);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalResult = document.getElementById("final-score");
    finalResult.textContent = time;

    questionsOptions.setAttribute("class", "hide");
}
function clock(){
    time--;
    timer.textContent = time;
    if(time <=0){
        quizFinish();
    }
}
function startQuiz(){
    let quizStartScreen = document.getElementById("start-screen");
    quizStartScreen.setAttribute("class","hide");
    questionsOptions.removeAttribute("class");
    timerCounter = setInterval(clock, 1000);
    timer.textContent = time;
    grabQuestion();
}
function saveScores(){
    let initials = playerInitials.value.trim();
    
    if(initials !== ""){
        let results = JSON.parse(localStorage.getItem("highscores")) || [];
        let newResult = {
            score: time,
            initials: initials
        }

        results.push(newResult);
        localStorage.setItem("highscores",JSON.stringify(results));

        window.location.href = "highscores.html";
    }
}
function quizStartCheck(event){
    if(event.key === "Enter"){
        saveScores();
    }
}
startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveScores);

initialElement.addEventListener("keyup", quizStartCheck);













