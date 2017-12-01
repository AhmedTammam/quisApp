function Quiz(questions) {
    'use strict';
    
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    
}

Quiz.prototype.getQuestionIndex = function () {
    'use strict';
    
    return this.questions[this.questionIndex];
};

Quiz.prototype.isEnd = function () {
    'use strict';
    
    return this.questions.length === this.questionIndex;
};

Quiz.prototype.guess = function (answer) {
    'use strict';
    
    if (this.getQuestionIndex().correctAnswer(answer)) {
        
        this.score += 1;
    }
    
    this.questionIndex += 1;
    
};