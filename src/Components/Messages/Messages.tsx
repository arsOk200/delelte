import React, {useEffect, useState} from 'react';
import MessageItem from "../Message-item/Message-Item";
import {Message} from "../../type";
const URL = 'http://146.185.154.90:8000/messages';

const Messages = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setInterval(() => {
      const fetchData = async () => {
        const response = await fetch(URL);
        if (response.ok) {
          const messagesResponse = await response.json();
          setMessages(messagesResponse);
        }
      };
      fetchData().catch(console.log);
    }, 4000);
  }, []);


  return (
    <div className="d-flex flex-column-reverse">
      {messages.map((message)=> (
        <MessageItem
          message={message.message}
          name={message.author}
          date={message.datetime}
          key={Math.random().toString()}
        />
      ))}
    </div>
  );
};

export default Messages;