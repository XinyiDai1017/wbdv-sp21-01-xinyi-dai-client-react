// const QUIZZES_URL = 'http://localhost:4000/api/quizzes';
const QUIZZES_URL = "https://wbdv-xinyidai-a8node.herokuapp.com/api/quizzes";

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}

export default {
    findQuestionsForQuiz
}
