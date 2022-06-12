import styled from "styled-components";

const Styled = styled.div`
  .App {
    background-color: white;
  }

  .Auth-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .Auth-form {
    width: 420px;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 8px;
    background-color: white;
  }

  .Auth-form-content {
    padding-left: 12%;
    padding-right: 12%;
  }

  .Auth-form-title {
    text-align: center;
    margin-bottom: 1em;
    font-size: 24px;
    color: rgb(34, 34, 34);
    font-weight: 800;
  }

  label {
    font-size: 14px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  }

  p {
    color: grey;
    cursor: pointer;
    text-align: center;
    margin-top: 25px;
    transition-duration: 0.2s;
  }

  p:hover {
    color: black;
  }

`;

export default Styled;
