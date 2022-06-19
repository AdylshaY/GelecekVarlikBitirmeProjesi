import { useEffect, useState } from "react";
import adminService from "../../../services/adminService";
import AdminMessages from "./AdminMessages";
import { useNavigate } from "react-router-dom";

const AdminMessagesManager = () => {
  const [userList, setUserList] = useState([]);
  const [selectedUserMail, setSelectedUserMail] = useState();

  useEffect(() => {
    adminService.User.getUserList()
      .then((response) => setUserList(response))
      .catch((error) => console.log(error));
  }, []);
  if (selectedUserMail === undefined) {
    return (
      <>
        <ul className="list-group mt-5">
          <h3 className="my-3">Kullanıcı Listesi</h3>
          {userList.map((user, key) => {
            return (
              <li
                className="list-group-item d-flex align-items-center justify-content-between"
                key={key}
              >
                <span>İsim: {user.fullName}</span>
                <span>İsim: {user.email}</span>
                <div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    value={user.email}
                    onClick={(event) => {
                      setSelectedUserMail(event.target.value);
                    }}
                  >
                    Mesajlar
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-5">
          Mesaj göndermek istediğiniz kullanıcının sağındaki mesajlar butonuna
          tıklayınız.
        </p>
      </>
    );
  } else {
    return <AdminMessages selectedUserMail={selectedUserMail} setSelectedUserMail={setSelectedUserMail}/>;
  }
};

export default AdminMessagesManager;
