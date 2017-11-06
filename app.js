var Basic = require('./Basic-Card.js');
var Cloze = require('./Cloze-Card.js');

var card_1 = new Basic('a', 'b');
card_1.debug();
var card_2 = new Cloze('George Washington was the first president of the United States.', 'George Washington');
card_2.debug();
