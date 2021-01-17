function Result(props) {
	this.init = () => {
		for (let key in props) {
			this[key] = props[key]
		}

		this.setData()
		this.setElements()
	}

	this.setData = () => {
		this.userAnswer = this.examples[this.answer]
		this.correctAnswer = this.examples.find((example) => example['is_answer'])
		this.isCorrect = this.userAnswer === this.correctAnswer
	}

	this.setElements = () => {
		this.template = /*html*/ `
      <div class="result">
        <div class="result-icon ${this.isCorrect ? 'correct' : 'incorrect'}">
          ${this.isCorrect ? '👍 Excellent!' : '🤦‍♂️ No...'}
        </div>
        <div class="question">Q. ${this.question}</div>
        <div class="user-answer">A. ${this.userAnswer.title}</div>
        ${
					this.isCorrect
						? ''
						: /* html */ `<div class="correct-answer">Right Answer. ${this.correctAnswer.title}</div>`
				}
      </div>
    `

		this.target = document.createElement('div')
		this.target.innerHTML = this.template
		this.target = this.target.firstElementChild
		console.log(this.target)
	}

	this.init()
}
