
import parse from "html-react-parser";
import React, { useState } from "react";
import { InterviewIcon, UserIcon } from "../helper";


const Welcome = ({onChangePage}) => {

     //chats
  let chatStore = [
    `${InterviewIcon} Hi, Good Afternoon. <br/>`,
    `${InterviewIcon} My name is Mike. <br/>`,
    `${InterviewIcon} What's yours - <br/>`,
  ];

  //------- handlers -----  
  function onEnterKeyHandle(event) {
    if(event.key === 'Enter'){
    
      onChangePage('instruction',{name:event.target.value})
    
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
        {parse(chat)}
        {endOfStoreChat && <>{UserIcon} <input type="text" onKeyPress={onEnterKeyHandle} placeholder="your name" /> </> }
      </div>
    );
}

export default Welcome;