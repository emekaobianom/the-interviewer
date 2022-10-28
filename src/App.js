import React, { useState } from "react";
import parse from "html-react-parser";
import { InterviewIcon, UserIcon } from "./helper";

const App = () => {
  //chats
  let chatStore = [
    `${InterviewIcon} Hi, Good Afternoon. <br/>`,
    `${InterviewIcon} My name is Mike. <br/>`,
    `${InterviewIcon} What's yours - <br/>`,
    `${UserIcon} <input type="text" placeholder="your name" />`,
  ];

  const [chat, setChat] = useState(chatStore[0]);
  const [chatCounter, setChatCounter] = useState(1);

  //chat automatically
  const timer = setTimeout(() => {
    setChat(chat + chatStore[chatCounter]);
    setChatCounter(chatCounter + 1);
  }, 1000);

  //when
  if (chatCounter == chatStore.length) {
    clearTimeout(timer);
  }

  return (
    <>
      <h1>The Interviewer</h1>
      <hr />
      <p>{parse(chat)}</p>
      <hr />
    </>
  );
};

export default App;
