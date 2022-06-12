import React from "react";
import { useNavigate } from "react-router-dom";
import Styled from "./UserPanelSideBar.styled";

function UserPanelSideBar({ component, setComponent, user }) {
  const navigate = useNavigate();
  return (
    <Styled>
      <main className="d-flex flex-nowrap">
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
          style={{ width: "280px" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span className="fs-4">Kullanıcı Paneli</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a
                className={
                  component === "Dairelerim"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Dairelerim
              </a>
            </li>
            <li>
              <a
                className={
                  component === "Faturalarım"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Faturalarım
              </a>
            </li>
            <li>
              <a
                className={
                  component === "Kredi Kartlarım"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Kredi Kartlarım
              </a>
            </li>
            <li>
              <a
                className={
                  component === "Mesajlar"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Mesajlar
              </a>
            </li>
          </ul>
          <hr />
          <div className="dropdown">
            <a
              href=""
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-circle-user rounded-circle me-2"></i>
              <strong>{user.email}</strong>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a
                  className="dropdown-item"
                  href=""
                  onClick={(e) => {
                    localStorage.setItem("user", null);
                    navigate("/");
                  }}
                >
                  Çıkış Yap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Styled>
  );
}

export default UserPanelSideBar;
