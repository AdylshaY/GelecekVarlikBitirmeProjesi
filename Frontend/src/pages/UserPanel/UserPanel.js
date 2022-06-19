import React, { useState } from "react";
import UserPanelSideBar from "../../components/UserPanelSideBar/UserPanelSideBar";
import UserApartmentsManager from "../../components/UsersPageComponents/UserApartmentsManager/UserApartmentsManager";
import UserBillsManager from "../../components/UsersPageComponents/UserBillsManager/UserBillsManager";
import UserCreditCardsManager from "../../components/UsersPageComponents/UserCreditCardsManager/UserCreditCardsManager";
import UserMessagesManager from "../../components/UsersPageComponents/UserMessagesManager/UserMessagesManager";

function UserPanel() {
  const [component, setComponent] = useState("Dairelerim");

  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return (
      <>
        <div className="container-fluid p-0">
          <div className="row me-0">
            <div className="col-3">
              <UserPanelSideBar
                setComponent={setComponent}
                component={component}
                user={user}
              />
            </div>
            <div className="col-8">
              {component === "Dairelerim" ? <UserApartmentsManager /> : null}
              {component === "Faturalarım" ? <UserBillsManager /> : null}
              {component === "Kredi Kartlarım" ? (
                <UserCreditCardsManager />
              ) : null}
              {component === "Mesajlar" ? <UserMessagesManager /> : null}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>YOU SHOULD NOT BE HERE</div>;
  }
}

export default UserPanel;
