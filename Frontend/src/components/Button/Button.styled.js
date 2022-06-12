import styled from "styled-components";

const Styled = styled.div`
  display: contents;

  .button {
    background-color: #1d3557;
    border: 2px solid #819fa7;
    color: #f2f2f0;
    margin: 10px;
    padding: 5px;
    width: 125px;
    font-size: 16px;
    border-radius: 15px;
    border-color: #5b6e74;
    cursor: pointer;
    transition-duration: 0.4s;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }
  .button:hover {
    background-color: white;
    color: #1d3557;
    border: 2px solid #1d3557;
  }
`;
export default Styled;
