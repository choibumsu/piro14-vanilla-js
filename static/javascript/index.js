const startPage = new StartPage()
const quizPage = new QuizPage()
const resultPage = new ResultPage()

function Router() {
	this.route = (path) => {
		if (!history.state || path !== history.state.path)
			history.pushState({ path }, '', path)

		if (path === '') {
			app.innerHTML = ''
			startPage.init()
			app.appendChild(startPage.target)
		} else if (path === 'quiz') {
			app.innerHTML = ''
			quizPage.init()
			app.appendChild(quizPage.target)
		} else if (path === 'result') {
			app.innerHTML = ''
			resultPage.init()
			app.appendChild(resultPage.target)
		}
	}

	this.back = (num = -1) => {
		history.go(num)
	}

	this.go = (num = 1) => {
		history.go(num)
	}

	this.getState = () => {
		return history.state
	}
}

const router = new Router()
const app = document.querySelector('#app')

router.route(location.pathname.replace('/', ''))
window.addEventListener('popstate', () => {
	router.route(location.pathname.replace('/', ''))
})
