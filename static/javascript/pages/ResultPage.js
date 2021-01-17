function ResultPage() {
	this.init = (resultList) => {
		this.resultList = [...resultList]

		this.setElements()
		this.bindEvents()
	}

	this.setElements = () => {
		this.template = /*html*/ `
			<div id="result-page">
				<div class="inner-container">
					<h1 class="title">Result 🥸</h1>
					<div class="result-container"></div>
					<button class="restart-btn">RESTART</button>
				</div>
      </div>
    `

		this.target = document.createElement('div')
		this.target.innerHTML = this.template
		this.target = this.target.firstElementChild

		this.resultContainer = this.target.querySelector('.result-container')
		this.resultList.forEach((resultInfo) => {
			const result = new Result(resultInfo)
			console.log(result.target)
			this.resultContainer.appendChild(result.target)
		})

		this.restartBtn = this.target.querySelector('.restart-btn')
	}

	this.bindEvents = () => {
		this.restartBtn.addEventListener('click', this.clickEventListener)
	}

	this.clickEventListener = () => {
		router.route('quiz')
	}
}
