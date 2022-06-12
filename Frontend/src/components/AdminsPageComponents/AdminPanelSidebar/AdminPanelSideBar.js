import React from "react";
import Styled from "./AdminPanelSideBar.styled";
import { useNavigate } from "react-router-dom";

function AdminPanelSideBar({ component, setComponent, user }) {
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
            <span className="fs-4">Admin Paneli</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <a
                className={
                  component === "Apartmanlar"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Apartmanlar
              </a>
            </li>
            <li>
              <a
                className={
                  component === "Bloklar"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Bloklar
              </a>
            </li>
            <li>
              <a
                className={
                  component === "Daireler"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Daireler
              </a>
            </li>
            <li>
              <a
                className={
                  component === "Kullanıcılar"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Kullanıcılar
              </a>
            </li>
            <li>
              <a
                className={
                  component === "Faturalar"
                    ? "nav-link text-white active"
                    : "nav-link text-white"
                }
                onClick={(e) => {
                  setComponent(e.target.text);
                }}
              >
                Faturalar
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

export default AdminPanelSideBar;
