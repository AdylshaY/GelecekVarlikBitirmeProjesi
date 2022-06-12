import React, { useState, useEffect } from "react";
import adminService from "../../../services/adminService";
import Button from "../../Button/Button";

function AddFlat({ selectedApartmentId, setFlatList }) {
  const [flatNo, setFlatNo] = useState(1);
  const [flatUserId, setFlatUserId] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [flatTypeId, setFlatTypeId] = useState();
  const [flatTypesList, setFlatTypesList] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    adminService.User.getUserList()
      .then((response) => {
        setUserList(response);
      })
      .catch((error) => console.log(error));
    adminService.FlatTypes.getFlatTypeList()
      .then((response) => {
        setFlatTypesList(response);
        setFlatTypeId(response[0].id);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      adminService.Flats.addNewFlat({
        flatNo: flatNo,
        apartmentsId: selectedApartmentId,
        usersId: flatUserId,
        isEmpty: isEmpty,
        flatTypeId: flatTypeId,
      }).then(() => {
        adminService.Apartments.getFlats(selectedApartmentId)
          .then((response) => {
            setFlatList(response);
          })
          .catch((error) => console.log(error));
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="input-group my-4" onSubmit={handleSubmit}>
      <span className="input-group-text" id="inputGroup-sizing-default">
        Daire No
      </span>
      <input
        type="number"
        className="form-control"
        min={1}
        value={flatNo}
        onChange={(e) => setFlatNo(e.target.value)}
      />
      <span className="input-group-text ms-4" id="inputGroup-sizing-default">
        Dairede Oturan
      </span>
      <select
        className="me-4 p-2"
        onChange={(e) => {
          setFlatUserId(Number(e.target.value));
        }}
      >
        <option className="p-2" value={null}>
          Boş Daire
        </option>
        {userList.map((user, key) => {
          return (
            <option key={key} className="p-2" value={user.id}>
              {user.fullName}
            </option>
          );
        })}
      </select>
      <span className="input-group-text ms-4" id="inputGroup-sizing-default">
        Daire Tipi
      </span>
      <select
        className="me-4 p-2"
        onChange={(e) => {
          setFlatTypeId(Number(e.target.value));
        }}
      >
        {flatTypesList.map((flat, key) => {
          return (
            <option key={key} className="p-2" value={flat.id}>
              {flat.name}
            </option>
          );
        })}
      </select>
      <select
        className="me-4 p-2"
        onChange={(e) => {
          setIsEmpty(e.target.value === "true");
        }}
      >
        <option className="p-2" value={true}>
          Boş
        </option>
        <option className="p-2" value={false}>
          Dolu
        </option>
      </select>
      <Button name="Ekle" style={{ margin: 0 }} type="submit" />
    </form>
  );
}

export default AddFlat;
