import React from "react";
import Styled from "./Button.styled";

function Button(props) {
  return (
    <Styled>
      <button className="button" style={props.style} onClick={props.onClick} id={props.id} type={props.type}>
        {props.name}
      </button>
    </Styled>
  );
}

export default Button;