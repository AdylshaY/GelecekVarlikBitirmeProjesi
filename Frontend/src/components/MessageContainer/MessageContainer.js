import { useEffect, useRef } from "react";
import Styled from "./MessageContainer.styled";

const MessageContainer = ({ messages }) => {
  const messageRef = useRef();

  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <Styled>
      <div ref={messageRef} className="message-container">
        {messages.map((m, index) => (
          <div key={index} className="user-message">
            <div className="message bg-primary">{m.message}</div>
            <div className="from-user">{m.username}</div>
          </div>
        ))}
      </div>
    </Styled>
  );
};

export default MessageContainer;
