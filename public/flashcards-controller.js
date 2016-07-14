'use strict';

app.controller('FlashCardController', function ($scope) {
  $scope.flashCard = {
    question: 'What is Angular?',
    answers: [
        { text: 'A front-end framework for great power!', correct: true },
        { text: 'Something lame, who cares, whatever.', correct: false },
        { text: 'Some kind of fish, right?', correct: false }
    ]
  };

  $scope.answered = false;
  $scope.answeredCorrectly = false;

  $scope.answerQuestion = function (answer) {
    if (answer.correct) {
      $scope.answered = true;
      $scope.answeredCorrectly = true;
    } else {
      $scope.answered = true;
    }
    console.log('My answer is: ', answer);
  };
});

// scope is just a Javascript object to which both the template and the controller have access.
