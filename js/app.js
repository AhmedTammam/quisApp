
function populate() {
    'use strict';
    
    if (quiz.isEnd()) {
        showScores();
    
    } else {
        
        // show question
        
        var qText = document.getElementById("question");
        qText.innerHTML = quiz.getQuestionIndex().text;
       
        // show choices
        
        var choices = quiz.getQuestionIndex().choices;
        for (var i =0; i < choices.length; i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML= choices[i];
            guess("btn" + i, choices[i]);
        }
        
        showProgress();
    }
    
}

function guess(id,guess) {
    var button = document.getElementById(id);
    button.onclick = function (){
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var curQuiNo = quiz.questionIndex + 1;
    var current = document.getElementById("current");
    var total = document.getElementById("total");
    current.innerHTML = curQuiNo;
    total.innerHTML = quiz.questions.length;
}


function showScores() {
    var gameOverHtml = "<h1 class='result text-center'>Result</h1>";
    gameOverHtml += "<h2 id='score'>Score: " + quiz.score + "</h2>";
    var element = document.getElementById("fll");
    element.innerHTML = gameOverHtml;
 
}


var questions = [
    new Question("Curiosity is a car-sized rover that was launched by NASA in 2011 to explore which planet?", ["Mars", "earth", "Uranus", "Venus"], "Mars"),
    new Question("Which country and it's territories cover the most time zones?", ["USA", "Jerman", "France", "Egypt"], "France"),
    new Question("Jackson Pollock was an influential abstract expressionist painter from what country??", ["USA", "Jerman", "France", "Egypt"], "USA"),
    new Question("Who is the only US president to serve more than two terms?", ["Ubama", "Roosevelt", "Trump", "JW Boush"], "Roosevelt"),
    new Question("Who was the first man to set foot on the moon?", ["Mohammed Fox", "Neil Armstrong", "Hamoly", "Tammam"], "Neil Armstrong")
];


var quiz = new Quiz(questions);

populate();