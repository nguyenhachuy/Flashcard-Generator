var BasicCard = require('./Basic-Card.js');
var ClozeCard = require('./Cloze-Card.js');
var inquirer = require('inquirer');

var questions = [
	{
		type: 'input',
		name: ''
	}
];
// var card_1 = new Basic('a', 'b');
// var card_2 = new Cloze('George Washington was the first president of the United States.', 'George Washington');
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

// card_1.debug();
// card_2.debug();
