class BasicCard {
	constructor (front, back) {
		this.question = front;
		this.answer = back;
	}

	get front() {
		return this.question;
	}

	get back() {
		return this.answer;	
	}

	set front(question) {
		this.question = question;
	}

	set back(answer) {
		this.answer = answer;
	}

	debug() {
		console.log(this.front);
		console.log(this.back);
	}
}

module.exports = BasicCard;
