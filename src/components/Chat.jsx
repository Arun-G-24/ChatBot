import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import AI_BOT from "../assets/AI_bot.json";
import Message from "./Message";
import InputBox from "./InputBox";
import { qaList } from "../data/qaList";

const getRandomSuggestions = () => {
  return Object.keys(qaList)
    .filter(q => q !== "hi" && q !== "hello")
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
};

function Chat() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi! How can I help you today? 🤗" }
  ]);
  //  {console.log(messages);
  //  }
  const [text, setText] = useState("");
   const [suggestions, setSuggestions] = useState(getRandomSuggestions());

   const bottomRef = useRef(null);

  useEffect(() => {
bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;

  const textbox = text.toLowerCase();

    setMessages(prev => [
      ...prev,
      { type: "user", text },
      { type: "bot", text: "Thinking..." }
    ]);
// {console.log(text);
// }

    const reply =
      qaList[textbox] || "Ask JavaScript or React related questions 🙂";

    setTimeout(() => {
      setMessages(prev => {
    const botreply = [...prev];
      botreply[botreply.length - 1] = { type: "bot", text: reply };
        return botreply;
      });
      setSuggestions(getRandomSuggestions());
    }, 1200);

    setText("");
  };

  const handleSuggestionClick = (question) => {
    setMessages(prev => [
      ...prev,
      { type: "user", text: question },
      { type: "bot", text: qaList[question] || "Ask JS or React 🙂" }
    ]);
    setSuggestions(getRandomSuggestions());
  };

  return (
    <div className="w-full mx-auto sm:max-w-md md:max-w-lg h-[95vh] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">

   
      <div className="p-4 border-b font-semibold text-center">
        🤖 Frontend – JavaScript & React <span className="text-blue-500">Q&A</span>
      </div>

      
      <div className="flex justify-center py-2">
        <Lottie animationData={AI_BOT} loop className="w-32" />
      </div>

      
      <div className="flex-1 overflow-y-auto px-3 space-y-2">
        {messages.map((msg, i) => (
          <Message key={i} type={msg.type} text={msg.text} />
        ))}

        <div ref={bottomRef} />
      </div>

      
    <InputBox
        text={text}
         setText={setText}
        sendMessage={sendMessage}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
      />  

    </div>

     /* <table className="border-2">
       <thead>
    <tr>
      <th>JavaScript</th>
      <th>React JS</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>what is javascript</td>
      <td>Malcolm Lockyer</td>
      
    </tr>
    </tbody>
    </table> */
  );
}

export default Chat;
