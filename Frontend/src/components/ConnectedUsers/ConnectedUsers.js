import Styled from "./ConnectedUsers.styled";

const ConnectedUsers = ({ users }) => (
  <Styled>
    <div className="user-list">
      <p className="me-4 fw-bold mb-0">Connected Users: </p>
      {users.map((u, idx) => (
        <p key={idx} className="me-2 mb-0">{u},</p>
      ))}
    </div>
  </Styled>
);

export default ConnectedUsers;
