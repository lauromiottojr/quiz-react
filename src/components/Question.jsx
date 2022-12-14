import { useContext } from 'react'

import { QuizContext } from '../context/quiz'

const Question = () => {
    const [quizState, dispach] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <div id='question'>
            <p>Pergunta de {quizState.currentQuestion + 1} a {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id='options-caintainer'>
                <p>Opções</p>
            </div>
            <button>Continuar</button>
        </div>
    )
}

export default Question