import React, { useState } from "react";
import Welcome from "./Pages/Welcome";
import Instruction from "./Pages/Instruction";
import Question from "./Pages/Question";
import Result from "./Pages/Result";

const App = () => {
  const [page, setPage] = useState("welcome");
  const [data, setData] = useState({});
  const [result, setResult] = useState([]);

  function handleChangePage(newPage, newData) {
    setData(newData);
    setPage(newPage);
  }

  function handleGoToNextQuiz(newData) {
    setData(newData);
    setPage("question");
  }

  function handleUpdateAnswer(newData) {
    //update score
    let resultCopy = result;
    resultCopy[newData.index] = newData.mark;
    setResult(resultCopy);
  }

  return (
    <>
      <h1>The Interviewer</h1>
      <hr />
      {/* page */}
      {page == "welcome" && <Welcome onChangePage={handleChangePage} />}
      {page == "instruction" && (
        <Instruction data={data} onGoToNextQuiz={handleGoToNextQuiz} />
      )}
      {page == "question" && (
        <Question
          data={data}
          onUpdateAnswerChoice={handleUpdateAnswer}
          onGoToNextQuiz={handleGoToNextQuiz}
          onChangePage={handleChangePage}
          key={data.quizIndex}
        />
      )}
      {page == "result" && (
        <Result result={result} onChangePage={handleChangePage} />
      )}
      <hr />
    </>
  );
};

export default App;
