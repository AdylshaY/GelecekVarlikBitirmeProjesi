import styled from "styled-components";

const Styled = styled.div`
  .message-container {
    height: 200px;
    background-color: white;
    overflow: auto;
    border-radius: 5px;
    margin-bottom: 2px;
  }

  .user-message {
    text-align: right;
    padding-right: 5px;
    font-size: 18px;
  }

  .message {
    display: inline-flex;
    margin: 0px auto 0px auto;
    padding: 10px;
    font-size: 14px;
    color: white;
    border-radius: 20px;
    margin-top: 3px;
  }

  .from-user {
    font-size: small;
    margin-bottom: 3px;
    margin-right: 5px;
  }
`;

export default Styled;
