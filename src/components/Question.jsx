import { useContext } from 'react'

import { QuizContext } from '../context/quiz'

const Question = () => {
    const [quizState, dispach] = useContext(QuizContext)

    console.log(quizState)
    return (
        <div>Question</div>
    )
}

export default Question