import React, { useState } from "react";
import SiteUpdateModal from "./SiteUpdateModal";
import adminService from "../../../services/adminService";

function SiteList({ siteList, setSiteList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [siteId, setSiteId] = useState();
  return (
    <>
      <ul className="list-group">
        <h3>Blok Listesi</h3>
        {siteList.map((site, key) => {
          return (
            <li
              key={key}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="ms-2">
                <p className="m-0 d-inline-flex">{site.name}</p>
                <p className="ms-5 mb-0 d-inline-flex">
                  Kayıtlı apartman sayısı: {site.apartmentCount}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  id={site.id}
                  onClick={(e) => {
                    setSiteId(e.target.id);
                    setIsOpen(true);
                  }}
                >
                  Güncelle
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  id={site.id}
                  onClick={(e) => {
                    adminService.Sites.deleteSite(e.target.id)
                      .then(() => {
                        adminService.Sites.getSiteList()
                          .then((response) => {
                            setSiteList(response);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  Sil
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {isOpen && (
        <SiteUpdateModal
          siteList={siteList}
          siteId={siteId}
          setIsOpen={setIsOpen}
          setSiteList={setSiteList}
        />
      )}
    </>
  );
}

export default SiteList;
