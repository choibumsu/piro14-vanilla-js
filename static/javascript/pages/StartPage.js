function StartPage() {
	this.init = () => {
		this.setElements()
		this.bindEvents()
	}

	this.setElements = () => {
		this.template = /*html*/ `
      <div id="start-page">
        <h1 class="title">🎊 Welcome To JavaScript Test ✍️</h1>
        <button class="start-btn">START</button>
      </div>
    `

		this.target = document.createElement('div')
		this.target.innerHTML = this.template
		this.target = this.target.firstElementChild

		this.startBtn = this.target.querySelector('.start-btn')
	}

	this.bindEvents = () => {
		this.startBtn.addEventListener('click', this.clickEventListener)
	}

	this.clickEventListener = () => {
		router.route('quiz')
	}
}
