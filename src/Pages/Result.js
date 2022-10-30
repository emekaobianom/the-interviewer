
import parse from "html-react-parser";
import React, { useState } from "react";
import { InterviewIcon, UserIcon } from "../helper";


const Result = () => {

     //chats
  let chatStore = [
    `${InterviewIcon} Your Result for this Quiz is. <br/>`,
    `${InterviewIcon} My name is Mike. <br/>`,
  ];

  //------- handlers -----  
  function onEnterKeyHandle(event) {
    if(event.key === 'Enter'){
      alert(event.target.value);
    } 
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
  let endOfStoreChat = (chatCount == chatStore.length);
  if (endOfStoreChat) {
    clearTimeout(timer);
  }

    return (
        <div>
        <h3>Result</h3>
        {parse(chat)}
      </div>
    );
}

export default Result;