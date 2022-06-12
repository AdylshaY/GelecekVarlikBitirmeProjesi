import React, { useEffect, useState } from "react";
import Styled from "../AdminApartmentsManager/ApartmentUpdateModal.styled";
import Button from "../../Button/Button";
import adminService from "../../../services/adminService";

function FlatUpdateModal({
  setIsOpen,
  userList,
  setFlatList,
  selectedApartmentId,
  flatId,
}) {
  const [flatNo, setFlatNo] = useState(1);
  const [flatUserId, setFlatUserId] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [flatTypeId, setFlatTypeId] = useState();
  const [flatTypesList, setFlatTypesList] = useState([]);

  useEffect(() => {
    adminService.FlatTypes.getFlatTypeList()
      .then((response) => {
        setFlatTypesList(response);
      })
      .catch((error) => console.log(error));
    adminService.Flats.getFlatById(flatId)
      .then((response) => {
        setFlatNo(response.flatNo);
        setFlatUserId(response.usersId);
        setFlatTypeId(response.flatTypeId);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      adminService.Flats.updateFlat({
        id: Number(flatId),
        flatNo: flatNo,
        apartmentsId: selectedApartmentId,
        usersId: flatUserId,
        isEmpty: isEmpty,
        flatTypeId: flatTypeId,
      }).then(() => {
        adminService.Apartments.getFlats(selectedApartmentId)
          .then((response) => setFlatList(response))
          .catch((error) => console.log(error))
          .finally(() => setIsOpen(false));
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Styled>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal2">
          <div className="modal2Header">
            <h5 className="heading2">Daire Bilgisi Güncelleme</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal2Content">
            <form className="input-group my-4 d-flex" onSubmit={handleSubmit}>
              <span
                className="input-group-text mb-3"
                id="inputGroup-sizing-default"
              >
                Daire No
              </span>
              <input
                type="number"
                className="form-control mb-3"
                min={1}
                onChange={(e) => setFlatNo(e.target.value)}
                value={flatNo}
              />
              <span
                className="input-group-text mb-3"
                id="inputGroup-sizing-default"
              >
                Dairede Oturan
              </span>
              <select
                className="me-4 p-2 mb-3"
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
              <span
                className="input-group-text mb-3"
                id="inputGroup-sizing-default"
              >
                Daire Tipi
              </span>
              <select
                className="me-4 p-2 mb-3"
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
                className="me-4 p-2 mb-3"
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
              <div className="d-flex justify-content-center w-100">
                <button type="submit" className="btn btn-primary w-100">
                  Güncelle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Styled>
  );
}

export default FlatUpdateModal;
