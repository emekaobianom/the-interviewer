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
  function handleRestart(event) {
    onChangePage("welcome", {});
  }

  function getScore() {
    return `${result.filter((r) => r == "correct").length}/${result.length}`;
  }

  //-------- engine ------
  const [chat, setChat] = useState(chatStore[0]);
  const [chatCount, setChatCount] = useState(1);
  const ONE_SECOND = 1000;
  const currentChatIsLastInStore = chatCount == chatStore.length;

  //chat automatically
  const timer = setTimeout(() => {
    setChat(chat + chatStore[chatCount]);
    setChatCount(chatCount + 1);
  }, ONE_SECOND);

  //stop using store
  if (currentChatIsLastInStore) {
    clearTimeout(timer);
  }

  return (
    <div>
      <h3>Result</h3>
      {parse(chat)}
      {currentChatIsLastInStore && (
        <>
          {Icon.user} <button onClick={handleRestart}>Restart</button>{" "}
        </>
      )}
    </div>
  );
};

export default Result;
