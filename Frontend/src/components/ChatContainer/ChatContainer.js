import ConnectedUsers from "../ConnectedUsers/ConnectedUsers";
import MessageContainer from "../MessageContainer/MessageContainer";
import SendMessageForm from "../SendMessageForm/SendMessageForm";
import Styled from "./ChatContainer.styled";

const ChatContainer = ({ sendMessage, messages, users, closeConnection }) => (
  <Styled>
    <div className="d-flex justify-content-between mb-3 border p-2 align-items-center rounded">
      <ConnectedUsers users={users} />
      <div className="leave-room">
        <button className="btn btn-danger" onClick={() => closeConnection()}>
          Odadan Ayrıl
        </button>
      </div>
    </div>
    <div className="border p-2 rounded messages">
      <MessageContainer messages={messages} />
      <SendMessageForm sendMessage={sendMessage} />
    </div>
  </Styled>
);

export default ChatContainer;
