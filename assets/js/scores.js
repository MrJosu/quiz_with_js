function showTopScores(){
    let topScores = JSON.parse(localStorage.getItem("highscores")) || [];
    topScores.sort(function(a, b) {
        return b.score - a.score;
    })
    topScores.forEach(function(score) {
        let li = document.createElement("li");
        li.textContent = `${score.initials} - ${score.score}`;
        let ol = document.getElementById("highscores");
        ol.appendChild(li);
    });
    }
    function topScores(){
        localStorage.removeItem("highscores");
        window.location.reload();
    }
    let clearResultsButton = document.getElementById("clear");
    clearResultsButton.addEventListener("click", topScores);
    showTopScores();