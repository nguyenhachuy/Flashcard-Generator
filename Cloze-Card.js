class ClozeCard {
	constructor(text, cloze) {
		this.answer = cloze;
		this.text = text;
		if(!text.includes(cloze)) console.log("Error!!!");
	}

	get cloze() {
		return this.answer;
	}

	get partial() {
		var part = this.text.replace(this.answer, "...");
		if(part === this.text){
			console.log("Error, answer is not part of the text");
			return this.text;
		}
		else return part; 
	}

	get fullText() {
		return this.text;
	}

	debug() {
		console.log(this.cloze);
		console.log(this.partial);
		console.log(this.fullText);
	}
}

module.exports = ClozeCard;