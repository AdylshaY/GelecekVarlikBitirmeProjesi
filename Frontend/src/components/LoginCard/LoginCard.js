import React, { useState, useEffect } from "react";
import Styled from "./LoginCard.styled";
import Button from "../Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginCard({ title, text, isAdminController, isAdmin }) {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin && isAdmin) {
      navigate("/admin");
    } else if (isLogin && !isAdmin) {
      navigate("/user");
    }
  }, [isLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isAdmin) {
        const response = await axios.post(
          "http://localhost:20472/api/Admin/login",
          { email: email, password: pwd },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (response.data.statusCode === 200) {
          const userInfo = {
            email: response.data.data.dtoLoginUser.email,
            token: response.data.data.accessToken,
          };
          localStorage.setItem("user", JSON.stringify(userInfo));
          setIsLogin(true);
        } else {
          window.alert("Kullanıcı adı veya şifre yanlış.");
        }
      } else {
        const response = await axios.post(
          "http://localhost:20472/api/Users/login",
          { email: email, password: pwd },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        if (response.data.statusCode === 200) {
          const userInfo = {
            id: response.data.data.dtoLoginUser.id,
            email: response.data.data.dtoLoginUser.email,
            token: response.data.data.accessToken,
          };
          localStorage.setItem("user", JSON.stringify(userInfo));
          setIsLogin(true);
        } else {
          window.alert("Kullanıcı adı veya şifre yanlış.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">{title}</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                required
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                required
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                name="Giriş Yap"
                style={{ width: "auto", margin: "15px  0 0 0" }}
              />
            </div>
            <p onClick={isAdminController}>{text}</p>
          </div>
        </form>
      </div>
    </Styled>
  );
}

export default LoginCard;
