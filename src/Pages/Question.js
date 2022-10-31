import React, { useState } from "react";
import javascriptQuestions, { options } from "../Data/javascriptQuestions";

const Question = ({ onChangePage,onUpdateAnswer, data }) => {
  //------ hooks -----
  //states
  const quiz = javascriptQuestions[data.quizNo];
  const [timer, setTimer] = useState(30);
  const [answer, setAnswer] = useState("");

  const timeCountDown = setTimeout(() => {
    if (timer == 0) {
      nextQuiz_Or_Result();
    } else {
      setTimer(timer - 1);
    }
  }, 1000);

  //------- handlers -----
  function handleAnswerChange(event) {
    setAnswer(event.target.value);
  }

  function onSubmitHandle(event) {
    event.preventDefault();
    nextQuiz_Or_Result();
  }

  function nextQuiz_Or_Result() {
    //update answer
    UpdateAnswer();

    //RESULT
    if (javascriptQuestions.length < quiz.no + 1) {
      onChangePage("result", { name: "result" });
    } else {
      //NEXT QUIZ
      //the current quiz.no is the index of the next quiz
      //since array index starts from 0
      onChangePage("question", { quizNo: quiz.no });
    }
  }

  //---- helpers
  function UpdateAnswer(){
    onUpdateAnswer( {
      index: (quiz.no-1),
      mark: markAnswer(answer),
    });
  }

  function markAnswer(myanswer) {
    if (myanswer == quiz.answer) {
      return "correct";
    } else {
      return "wrong";
    }
  }

  //-------- engine ------

  return (
    <div>
      <h3>
        Question - No.{quiz.no} !! &#128337;{timer}
      </h3>
      <p>{quiz.question}</p>
      <form onSubmit={onSubmitHandle}>
        {options.map((key) => (
          <div key={key}>
            <input
              type="radio"
              name="option"
              value={key}
              onChange={handleAnswerChange}
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
