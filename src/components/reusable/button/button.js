import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: var(--clr-accent-text);
  box-shadow: 0px 8px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius: var(--soft-curve);
  border: 2px solid var(--clr-accent-text);
  color: var(--clr-light-normal);
  margin-bottom: 1rem;
  padding: 1.2rem 3.5rem;
  letter-spacing: 1.6px;
  line-height: 1.4;
  font-weight: var(--fp-f-weight-normal);
  font-size: 11px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: palevioletred;
    color: white;
  }
  &:focus,
  &:focus-visible {
    outline: 3px dotted black;
  }

  ${(props) =>
    props.form_btn &&
    css`
      background: var(--clr-primary-base);
      text-transform: uppercase;
      font-weight: var(--fp-f-weight-bold);

      border: 2px solid var(--clr-primary-base);
      &:hover {
        background-color: transparent;
        color: var(--clr-primary-base);
      }
    `};
`;

const CustomButton = ({ handleButton, ...props }) => {
  return <StyledButton onClick={() => handleButton()} {...props} />;
};

export default CustomButton;
