import parse from "html-react-parser";
import React, { useState } from "react";
import { Icon } from "../helper";

const Instruction = ({ onGoToNextQuiz, data }) => {
  //chats
  let chatStore = [
    `${Icon.interviewer} Hi, ${data.name}. <br/>`,
    `${Icon.interviewer} We have 10 Questions from Javascript for you <br/>`,
    `${Icon.interviewer} Each question has a multichoice answers to choose from. Good luck. <br/>`,
  ];

  //------- handlers -----
  function onStartClickHandle(event) {
    onGoToNextQuiz({ quizIndex: 0 });
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
      <h3>Instruction</h3>
      {parse(chat)}
      {currentChatIsLastInStore && (
        <>
          {Icon.user} <button onClick={onStartClickHandle}>Start</button>{" "}
        </>
      )}
    </div>
  );
};

export default Instruction;
