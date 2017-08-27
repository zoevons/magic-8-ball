$(document).ready(function() {
var magic8Ball = {};
magic8Ball.listOfAnswers = ["Yes definitely", "Most likely", "Outlook good", "Signs point to yes", "Ask again later", "Don't count on it", "Outlook not so good", "Very doubtful"];

$("#answer").hide();

magic8Ball.askQuestion = function (question) {
var randomNumber = Math.random();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var Answer = this.listOfAnswers[randomIndex];
$("#answer").fadeIn(4000);
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
$("#answer").text(Answer);
$("#8ball").effect("shake");
console.log(question);
console.log(Answer);
};

var onClick = function() {
	$("#answer").hide();
   setTimeout(
       function() {
var question = prompt("Ask me a Yes/No question");
    magic8Ball.askQuestion(question);
	   }, 500);
};

$("#questionButton").click(onClick);

});
