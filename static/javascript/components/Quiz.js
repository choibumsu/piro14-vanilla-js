function Quiz(parent, props) {
	this.init = () => {
		for (let key in props) {
			this[key] = props[key]
		}

		this.setElements()
		this.bindEvents()
	}

	this.setElements = () => {
		this.template = /*html*/ `
      <div class="quiz dp-none" data-id="${this.id}">
        <div class="question">Q. ${this.question}</div>
        <ul class="example-container">
          ${this.examples
						.map(
							(example, index) =>
								/*html*/ `<li class="example" data-index="${index}">${example}</li>`
						)
						.join('')}
        </ul>
      </div>
    `

		this.target = document.createElement('div')
		this.target.innerHTML = this.template
		this.target = this.target.firstElementChild

		this.exampleContainerElem = this.target.querySelector('.example-container')
	}

	this.bindEvents = () => {
		this.exampleContainerElem.addEventListener('click', (e) => {
			this.clickEventListener(e)
		})
	}

	this.clickEventListener = (e) => {
		const closestExampleElem = e.target.closest('.example')
		if (closestExampleElem) {
			this.selectAnswer(e, closestExampleElem)
		}
	}

	this.selectAnswer = (e, exampleElem) => {
		const unselectedExamples = this.target.querySelectorAll(
			`.example:not([data-index="${exampleElem.dataset.index}"])`
		)
		unselectedExamples.forEach((example) => {
			example.style.transform = `translateY(16px) scale(0.75)`
			example.style.opacity = 0
		})

		exampleElem.classList.add('active')
		parent.selectAnswer({
			quizId: this.id,
			answerIndex: +exampleElem.dataset.index,
		})
	}

	this.hide = () => {
		this.target.classList.add('dp-none')
	}

	this.show = () => {
		this.target.classList.remove('dp-none')
		this.target.style.opacity = 0
		setTimeout(() => {
			this.target.style.opacity = 1
		}, 0)
	}

	this.init()
}
