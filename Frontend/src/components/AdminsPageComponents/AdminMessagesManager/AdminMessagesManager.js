import { useState } from "react";
import {
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType,
} from "@microsoft/signalr";
import Lobby from "../../Lobby/Lobby";
import ChatContainer from "../../ChatContainer/ChatContainer";

const App = () => {
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const joinRoom = async (username, room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:20472/admin", {
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets,
        })
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (username, message) => {
        setMessages((messages) => [...messages, { username, message }]);
      });

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });

      connection.onclose((e) => {
        setConnection();
        setMessages([]);
        setUsers([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { username, room });
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-5">
      <h1 className="text-center">Mesajlar</h1>
      <div className="d-flex justify-content-center mt-4">
        {!connection ? (
          <Lobby joinRoom={joinRoom} />
        ) : (
          <ChatContainer
            sendMessage={sendMessage}
            messages={messages}
            users={users}
            closeConnection={closeConnection}
          />
        )}
      </div>
    </div>
  );
};

export default App;
