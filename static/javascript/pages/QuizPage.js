const QUIZ_LIST = [
	{
		id: 1,
		question: '자바스크립트는 자바에서 파생된 언어이다.',
		examples: ['예', '아니오'],
	},
	{
		id: 2,
		question: '자바스크립트가 해당하는 것은?',
		examples: ['프로토타입 기반 언어', '클래스 기반 언어', '변수 기반 언어'],
	},
	{
		id: 3,
		question: '다음 중 자바스크립트 변수 선언 방법이 아닌것은?',
		examples: ['const', 'let', 'var', 'int'],
	},
]

function QuizPage() {
	this.init = () => {
		this.setElements()
		this.bindEvents()
		this.setCurrentQuiz(this.quizList[0])
	}

	this.setElements = () => {
		this.template = /*html*/ `
			<div id="quiz-page">
			</div>
		`

		this.target = document.createElement('div')
		this.target.innerHTML = this.template
		this.target = this.target.firstElementChild

		this.quizList = QUIZ_LIST.map((quizInfo) => {
			const quiz = new Quiz(this, quizInfo)
			this.target.appendChild(quiz.target)

			return quiz
		})
	}

	this.bindEvents = () => {}

	this.setCurrentQuiz = (newCurrentQuiz) => {
		this.quizList.forEach((quiz) => quiz.hide())
		newCurrentQuiz.show()
	}

	this.selectAnswer = (answerInfo) => {
		const currentQuiz = this.quizList.reduce(
			(currentQuizInfo, quiz, index) => {
				return quiz.id === answerInfo.quizId
					? {
							index,
							quiz,
					  }
					: currentQuizInfo
			},
			{ index: 0, quiz: {} }
		)
		currentQuiz.quiz.answer = answerInfo.answerIndex

		const nextQuiz = this.quizList[currentQuiz.index + 1]

		setTimeout(() => {
			if (nextQuiz) {
				this.setCurrentQuiz(nextQuiz)
			} else {
				router.route('result')
			}
		}, 800)
	}

	this.init()
}
