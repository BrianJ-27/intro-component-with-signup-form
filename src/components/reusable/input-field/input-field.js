import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-bottom: 1.3rem;
  border: 1px solid var(--clr-text-normal);
  border-radius: var(--soft-curve);
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  ::placeholder {
    padding-left: 20px;
  }
`;

const InputField = ({ ...props }) => {
  return (
    <div className="group">
      <StyledInput required {...props} />
    </div>
  );
};

export default InputField;
