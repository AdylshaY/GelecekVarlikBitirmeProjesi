import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import AddUser from "./AddUser";
import adminService from "../../../services/adminService";

function AdminUsersManager() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    adminService.User.getUserList()
      .then((response) => {
        setUserList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center">Kullanıcı Yönetimi</h1>
      <AddUser setUserList={setUserList} />
      <UserList userList={userList} setUserList={setUserList} />
    </div>
  );
}

export default AdminUsersManager;
