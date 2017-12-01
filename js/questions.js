function Question(text, choices, answer) {
    
    'use strict';
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    
}


Question.prototype.correctAnswer = function (choice) {
    
    'use strict';
    
    return choice === this.answer;
};