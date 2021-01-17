const startPage = new StartPage()
const quizPage = new QuizPage()
const resultPage = new ResultPage()

function Router() {
	this.route = async (path) => {
		if (!history.state || path !== history.state.path)
			history.pushState({ path }, '', path)

		if (path === '') {
			startPage.init()
			app.innerHTML = ''
			app.appendChild(startPage.target)
		} else if (path === 'quiz') {
			await quizPage.init()
			app.innerHTML = ''
			app.appendChild(quizPage.target)
		} else if (path === 'result') {
			const resultList = quizPage.getResultList()
			if (resultList.length === 0) {
				this.route('quiz')
				return
			}

			resultPage.init(resultList)
			app.innerHTML = ''
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
