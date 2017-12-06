var xhttp = new XMLHttpRequest();
var url = "quizlist.json";

xhttp.onreadystatechange = function () {
if (this.readyState == 4 && this.status == 200) {
    var myqui = JSON.parse(xhttp.responseText);

    var qs = mayqui.questions;
    var questions = [];
    var i =0;

    for(i< qs.length; i++;){
        var child = new Question (qs[i].text, qs[i].choices, qs[i].answer);
        questions.push(child);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


function populate() {
    'use strict';

    if (quiz.isEnd()) {

        showScores();

    } else {

        // show question

        var qText = document.getElementById("question");
        var qs = questions.sort(function() {
                      return .5 - Math.random();
                    });

        qText.innerHTML = quiz.getQuestionIndex().text;

        // show choices

        var choices = quiz.getQuestionIndex().choices.sort(function() {
                      return .5 - Math.random();
                    });

        var choi = choices.map(function(x){

            var index = choices.indexOf(x);
            var element = document.getElementById("choice"+index);
            element.innerHTML= x;
            guess("btn" + index, choices[index]);

        });

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
    var element = document.getElementById("fll");

    var sto = localStorage.getItem('score')

    if (sto === null){

        gameOverHtml += "<h2 id='score'>Score: " + quiz.score + "</h2>";
        element.innerHTML = gameOverHtml;
        localStorage.setItem('score', quiz.score);

    }else{
        gameOverHtml += "<h2 id='score'>last Score: " + localStorage.getItem('score') + "</h2>";
        gameOverHtml += "<h2 id='score'>Score: " + quiz.score + "</h2>";
        element.innerHTML = gameOverHtml;
        localStorage.setItem('score', quiz.score);
    }


}


//var questions = [
//    new Question("Curiosity is a car-sized rover that was launched by NASA in 2011 to explore which planet?", ["Mars", "earth", "Uranus", "Venus"], "Mars"),
//    new Question("Which country and it's territories cover the most time zones?", ["USA", "Jerman", "France", "Egypt"], "France"),
//    new Question("Jackson Pollock was an influential abstract expressionist painter from what country??", ["USA", "Jerman", "France", "Egypt"], "USA"),
//    new Question("Who is the only US president to serve more than two terms?", ["Ubama", "Roosevelt", "Trump", "JW Boush"], "Roosevelt"),
//    new Question("Who was the first man to set foot on the moon?", ["Mohammed Fox", "Neil Armstrong", "Hamoly", "Tammam"], "Neil Armstrong")
//];


var quiz = new Quiz(questions);

populate();
