import { useState, useRef, useEffect } from "react";

function Messages() {
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const addMessage = () => {
    setMessages([...messages, "New Message"]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div style={{ height: "200px", overflowY: "scroll" }}>
      {messages.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}

      <div ref={bottomRef}></div>

      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default Messages;