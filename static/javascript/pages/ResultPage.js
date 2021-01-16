function ResultPage() {
	this.init = () => {
		this.setElements()
		this.bindEvents()
	}

	this.setElements = () => {
		this.template = /*html*/ `
      <div id="result-page">
        <h1 class="title">Thank You 🥸</h1>
        <button class="restart-btn">RESTART</button>
      </div>
    `

		this.target = document.createElement('div')
		this.target.innerHTML = this.template
		this.target = this.target.firstElementChild

		this.restartBtn = this.target.querySelector('.restart-btn')
	}

	this.bindEvents = () => {
		this.restartBtn.addEventListener('click', this.clickEventListener)
	}

	this.clickEventListener = () => {
		router.route('quiz')
	}

	this.init()
}
