class ClozeCard {
	constructor(text, cloze) {
		this.answer = cloze;
		this.text = text;
	}

	get cloze() {
		return this.answer;
	}

	get partial() {
		return this.text.replace(this.answer, "...");
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