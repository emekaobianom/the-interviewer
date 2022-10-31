import parse from "html-react-parser";
import React, { useState } from "react";
import { Icon } from "../helper";

const Instruction = ({ onChangePage, data }) => {
  //chats
  let chatStore = [
    `${Icon.interviewer} Hi, ${data.name}. <br/>`,
    `${Icon.interviewer} We have 10 Questions from Javascript for you <br/>`,
    `${Icon.interviewer} Each question has a multichoice answers to choose from. Good luck. <br/>`,
  ];

  //------- handlers -----
  function onStartClickHandle(event) {
    onChangePage("question", { quizNo: 0 });
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
      <h3>Instruction</h3>
      {parse(chat)}
      {endOfStoreChat && (
        <>
          {Icon.user} <button onClick={onStartClickHandle}>Start</button>{" "}
        </>
      )}
    </div>
  );
};

export default Instruction;
