import { useState } from "react";

const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="btn btn-primary" type="submit" disabled={!message}>
          Send
        </button>
      </div>
    </form>
  );
};

export default SendMessageForm;
