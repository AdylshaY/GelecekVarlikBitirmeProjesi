import { useEffect, useState } from "react";
import userService from "../../../services/userService";
import UserFlatsList from "./UserFlatsList";

const UserApartmentsManager = () => {
  const [flats, setFlats] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    userService.flats
      .getUsersFlats(user.id)
      .then((response) => setFlats(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center">Dairelerim</h1>
      <UserFlatsList flats={flats} />
    </div>
  );
};

export default UserApartmentsManager;
