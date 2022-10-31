import parse from "html-react-parser";
import React, { useState } from "react";
import { InterviewIcon, UserIcon } from "../helper";

const Result = ({ onChangePage }) => {
  //chats
  let chatStore = [
    `${InterviewIcon} Your Result for this Quiz is. <br/>`,
    `<h1>3/10<h1/>`,
  ];

  //------- handlers -----
  function onRestartHandle(event) {
    onChangePage("welcome", {});
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
          {UserIcon} <button onClick={onRestartHandle}>Restart</button>{" "}
        </>
      )}
    </div>
  );
};

export default Result;
