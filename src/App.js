import React, { useState } from "react";
import Welcome from "./Pages/Welcome";
import Instruction from "./Pages/Instruction";
import Question from "./Pages/Question";
import Result from "./Pages/Result";

const App = () => {
  const [page, setPage] = useState("welcome");
  const [data, setData] = useState({});

  function handleOnChangePage(newPage,newData) {
    setData(newData);
    setPage(newPage);
  }

  return (
    <>
      <h1>The Interviewer</h1>
      <hr />
      {/* page */}
      {page == "welcome" && <Welcome onChangePage={handleOnChangePage} />}
      {page == "instruction" && <Instruction data={data} onChangePage={handleOnChangePage} />}
      {page == "question" && <Question data={data} onChangePage={handleOnChangePage} key={data.quizNo} />}
      {page == "result" && <Result onChangePage={handleOnChangePage} />}
      <hr />
    </>
  );
};

export default App;
