import React, { useState } from "react";
import Welcome from "./Pages/Welcome";
import Instruction from "./Pages/Instruction";
import Question from "./Pages/Question";
import Result from "./Pages/Result";

const App = () => {
  const [page, setPage] = useState("welcome");
  const [data, setData] = useState({});
  const [result, setResult] = useState([]);

  function handleOnChangePage(newPage, newData) {    
      setData(newData);
      setPage(newPage);
  }

  function handleOnUpdateAnswer(newData) {   
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
      {page == "welcome" && <Welcome onChangePage={handleOnChangePage} />}
      {page == "instruction" && (
        <Instruction data={data} onChangePage={handleOnChangePage} />
      )}
      {page == "question" && (
        <Question
          data={data}
          onUpdateAnswer={handleOnUpdateAnswer}
          onChangePage={handleOnChangePage}
          key={data.quizNo}
        />
      )}
      {page == "result" && (
        <Result result={result} onChangePage={handleOnChangePage} />
      )}
      <hr />
    </>
  );
};

export default App;
