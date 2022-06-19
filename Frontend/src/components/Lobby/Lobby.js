import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

const Lobby = ({ joinRoom, selectedUserMail, setSelectedUserMail }) => {
  const [room, setRoom] = useState(selectedUserMail);

  const email = JSON.parse(localStorage.getItem("user")).email;

  const navigate = useNavigate();

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
          value={room}
          disabled={true}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success w-100" type="submit">
          Katıl
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger w-100 mt-2" type="button" onClick={() => setSelectedUserMail()}>
          Geri
        </button>
      </div>
    </form>
  );
};

export default Lobby;
