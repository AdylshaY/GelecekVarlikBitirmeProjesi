import React, { useState, useEffect } from "react";
import AddSite from "./AddSite";
import SiteList from "./SiteList";
import adminService from "../../../services/adminService";

function AdminSitesManager() {
  const [siteList, setSiteList] = useState([]);

  const token = JSON.parse(localStorage.getItem("user")).token;

  useEffect(() => {
    adminService.Sites.getSiteList()
      .then((response) => setSiteList(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-center">Blok Yönetimi</h1>
      <AddSite
        siteList={siteList}
        setSiteList={setSiteList}
        token={token}
      />
      <SiteList
        siteList={siteList}
        setSiteList={setSiteList}
      />
    </div>
  );
}

export default AdminSitesManager;
