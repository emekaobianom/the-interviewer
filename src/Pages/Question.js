import React, { useState } from "react";
import javascriptQuestions, { options } from "../Data/javascriptQuestions";
import { Icon } from "../helper";

const Question = ({
  onChangePage,
  onGoToNextQuiz,
  onUpdateAnswerChoice,
  data,
}) => {
  const quiz = javascriptQuestions[data.quizIndex];
  const QUIZ_INDEX = quiz.no - 1;
  const NEXT_QUIZ_NO = QUIZ_INDEX + 1;
  const moreQuestionsExists = javascriptQuestions.length > NEXT_QUIZ_NO;
  const ONE_SECOND = 1000;

  const [timer, setTimer] = useState(30);
  const [answer, setAnswer] = useState("");

  //start time countdown immediately
  setTimeout(() => {
    if (timer == 0) {
      nextQuizOrResult();
    } else {
      setTimer(timer - 1);
    }
  }, ONE_SECOND);

  function handleAnswerChoice(event) {
    setAnswer(event.target.value);
  }

  function handleNextButton(event) {
    event.preventDefault();
    nextQuizOrResult();
  }

  function nextQuizOrResult() {
    //update answer
    UpdateMyAnswerChoice();

    if (moreQuestionsExists) {
      //go to NEXT QUIZ
      onGoToNextQuiz({ quizIndex: NEXT_QUIZ_NO });
    } else {
      //go to RESULT page
      onChangePage("result");
    }
  }

  //---- helpers
  function UpdateMyAnswerChoice() {
    onUpdateAnswerChoice({
      index: QUIZ_INDEX,
      mark: Mark(answer),
    });
  }

  function Mark(myAnswer) {
    if (myAnswer == quiz.answer) {
      return "correct";
    } else {
      return "wrong";
    }
  }

  //-------- render ------

  return (
    <div>
      <h3>
        Question - No.{quiz.no} !! {Icon.clock}
        {timer}
      </h3>
      <h5>{quiz.question}</h5>
      <p>{quiz.details}</p>
      <form onSubmit={handleNextButton}>
        {options.map((key) => (
          <div key={key}>
            <input
              type="radio"
              name="option"
              value={key}
              onChange={handleAnswerChoice}
            />
            <label htmlFor="option">
              {key}. {quiz.option[key]}
            </label>
            <br />
          </div>
        ))}
        <hr />
        <input type="submit" value="Next"></input>
      </form>
    </div>
  );
};

export default Question;
