import React, { useState } from "react";
import Button from "../../reusable/button/button";
import FormField from "../../reusable/input-field/input-field";
import styled from "styled-components";

const StyledForm = styled.form`
  background-color: var(--clr-light-normal);
  border-radius: var(--soft-curve);
  padding: 1rem;

  label {
    /*Hide label but make it accessible for screen readers*/
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleUpdate = (field, { target }) => {
    setFormData({
      ...formData,
      [field]: target.value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    alert(`Form Submission Details:
            ${formData.firstName}
            ${formData.lastName}
            ${formData.email}
            ${formData.password}
            `);
  };

  const handleButton = () => {
    console.log("Button was clicked");
  };

  return (
    <>
      <Button onClick={() => handleButton()}>
        <span className="content__btn">Try it free 7 days</span> then $20/mo.
        thereafter
      </Button>
      <StyledForm action="/index.html" method="get" onSubmit={handleSubmitForm}>
        <fieldset>
          <div className="flex__container">
            <FormField
              type="text"
              name="firstName"
              id="first_name"
              value={formData.firstName}
              onChange={(e) => handleUpdate("firstName", e)}
              style={{ marginTop: "1rem" }}
              placeholder="First Name"
            />
            <label htmlFor="first_name">First Name</label>

            <FormField
              type="text"
              name="lastName"
              id="last_name"
              value={formData.lastName}
              onChange={(e) => handleUpdate("lastName", e)}
              placeholder="Last Name"
            />
            <label htmlFor="last_name">Last Name</label>

            <FormField
              type="email"
              name="email"
              id="form_email"
              value={formData.email}
              onChange={(e) => handleUpdate("email", e)}
              placeholder="Email Address"
            />
            <label htmlFor="form_email">Email Address</label>

            <FormField
              type="password"
              name="password"
              id="form_password"
              value={formData.password}
              onChange={(e) => handleUpdate("password", e)}
              placeholder="Password"
            />
            <label htmlFor="form_password">Password</label>

            <Button form_btn>Claim your free trial</Button>
          </div>
        </fieldset>

        <p className="content__body">
          By clicking the button, you are agreeing to our
          <strong className="content__terms"> Terms and Services</strong>
        </p>
      </StyledForm>
    </>
  );
};
export default Form;
