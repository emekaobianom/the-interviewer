import React, { useState } from "react";
import javascriptQuestions, { options } from "../Data/javascriptQuestions";

const Question = ({ onChangePage, data }) => {
  //------ hooks -----
  //states
  const quiz = javascriptQuestions[data.quizNo];
  let [timer, setTimer] = useState(15);

  const timeCountDown = setTimeout(() => {
    if (timer == 0) {
      nextQuiz_Or_Result();
    } else {
      setTimer(timer - 1);
    }
  }, 1000);

  //------- handlers -----
  function handleChange(event) {
    //  alert(event.target.value);
    // alert(currentDate.getTime())
  }
  function onSubmitHandle(event) {
    event.preventDefault();
    nextQuiz_Or_Result();
  }

  function nextQuiz_Or_Result() {
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
              onChange={handleChange}
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
