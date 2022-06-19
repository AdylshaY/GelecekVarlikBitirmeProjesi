import React, { useState } from "react";
import AdminPanelSideBar from "../../components/AdminsPageComponents/AdminPanelSidebar/AdminPanelSideBar";
import AdminApartmentsManager from "../../components/AdminsPageComponents/AdminApartmentsManager/AdminApartmentsManager";
import AdminUsersManager from "../../components/AdminsPageComponents/AdminUsersManager/AdminUsersManager";
import AdminBillsManager from "../../components/AdminsPageComponents/AdminBillsManager/AdminBillsManager";
import AdminMessagesManager from "../../components/AdminsPageComponents/AdminMessagesManager/AdminMessagesManager";
import AdminFlatsManager from "../../components/AdminsPageComponents/AdminFlatsManager/AdminFlatsManager";
import AdminSitesManager from "../../components/AdminsPageComponents/AdminSitesManager/AdminSitesManager";

function AdminPanel() {
  const [component, setComponent] = useState("Apartmanlar");

  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return (
      <>
        <div className="container-fluid p-0">
          <div className="row me-0">
            <div className="col-3">
              <AdminPanelSideBar
                setComponent={setComponent}
                component={component}
                user={user}
              />
            </div>
            <div className="col-8">
              {component === "Apartmanlar" ? <AdminApartmentsManager /> : null}
              {component === "Bloklar" ? <AdminSitesManager /> : null}
              {component === "Kullanıcılar" ? <AdminUsersManager /> : null}
              {component === "Faturalar" ? <AdminBillsManager /> : null}
              {component === "Mesajlar" ? <AdminMessagesManager /> : null}
              {component === "Daireler" ? <AdminFlatsManager /> : null}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <h1 className="d-flex justify-content-center m-5">
        YOU SHOULD NOT BE HERE
      </h1>
    );
  }
}

export default AdminPanel;
