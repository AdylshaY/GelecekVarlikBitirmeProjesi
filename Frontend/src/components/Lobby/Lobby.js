import { useState, useEffect } from "react";

const Lobby = ({ joinRoom }) => {
  const [room, setRoom] = useState();

  const email = JSON.parse(localStorage.getItem("user")).email;

  return (
    <form
      className="lobby"
      onSubmit={(e) => {
        e.preventDefault();
        joinRoom(email, room);
      }}
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control mb-3"
          value={email}
          disabled={true}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Kullanıcı Adı"
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success w-100"
          type="submit"
          disabled={!room}
        >
          Katıl
        </button>
      </div>
    </form>
  );
};

export default Lobby;
