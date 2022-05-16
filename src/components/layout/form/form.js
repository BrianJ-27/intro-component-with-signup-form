import React from "react";
import Button from "../../reusable/button/button";
import styled from "styled-components";

const StyledForm = styled.form`
  background-color: var(--clr-light-normal);
  padding: 1rem;
`;

const form = () => {
  return (
    <StyledForm action="">
      <fieldset>
        <div className="flex__container">
          <label htmlFor="">First Name</label>
          <input type="text" />

          <label htmlFor="">Last Name</label>
          <input type="text" />

          <label htmlFor="">Email Address</label>
          <input type="email" />

          <label htmlFor="">Password</label>
          <input type="password" />

          <Button form_btn>Claim your free trial</Button>
        </div>
      </fieldset>

      <p className="content__body">
        By clicking the button, you are agreeing to our
        <strong className="content__terms">Terms and Services</strong>
      </p>
    </StyledForm>
  );
};

export default form;
