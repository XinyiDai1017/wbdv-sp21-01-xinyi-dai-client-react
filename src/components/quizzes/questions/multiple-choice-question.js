import React from "react";

const MultipleChoiceQuestion = ({question}) => {
    return(
        <div>
            <h4>{question.question}</h4>
            {question.correct}

            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li key={choice}>
                                <label>
                                    <input type="radio" name={question._id}/>
                                    {choice}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MultipleChoiceQuestion;