import parse from "html-react-parser";
import React, { useState } from "react";
import { Icon } from "../helper";

const Result = ({ onChangePage, result }) => {
  //chats
  let chatStore = [
    `${Icon.interviewer} Your Result for this Quiz is. <br/>`,
    `<h1>${getScore()}<h1/>`,
  ];

  //------- handlers -----
  function onRestartHandle(event) {
    onChangePage("welcome", {});
  }

  function getScore() {
    return `${result.filter((r) => r == "correct").length}/${result.length}`;
  }

  //-------- engine ------
  const [chat, setChat] = useState(chatStore[0]);
  const [chatCount, setChatCount] = useState(1);

  //chat automatically
  const timer = setTimeout(() => {
    setChat(chat + chatStore[chatCount]);
    setChatCount(chatCount + 1);
  }, 1000);

  //stop using store
  let endOfStoreChat = chatCount == chatStore.length;
  if (endOfStoreChat) {
    clearTimeout(timer);
  }

  return (
    <div>
      <h3>Result</h3>
      {parse(chat)}
      {endOfStoreChat && (
        <>
          {result}
          {Icon.user} <button onClick={onRestartHandle}>Restart</button>{" "}
        </>
      )}
    </div>
  );
};

export default Result;
