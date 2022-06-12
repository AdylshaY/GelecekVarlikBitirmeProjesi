import React, { useState, useEffect } from "react";
import LoginCard from "../../components/LoginCard/LoginCard";
import Styled from "./Login.styled";

function Login() {
  const [isAdmin, setIsAdmin] = useState(false);

  const isAdminController = () => {
    setIsAdmin(!isAdmin);
  };

  useEffect(() => {
    localStorage.clear();
  }, [])
  

  return isAdmin ? (
    <Styled>
      <LoginCard
        isAdmin={isAdmin}
        isAdminController={isAdminController}
        title="Yönetici Girişi"
        text="Kullanıcı mısınız?"
      />
    </Styled>
  ) : (
    <Styled>
      <LoginCard
        isAdmin={isAdmin}
        isAdminController={isAdminController}
        title="Kullanıcı Girişi"
        text="Yönetici misiniz?"
      />
    </Styled>
  );
}

export default Login;
