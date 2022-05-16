import React from "react";
import Button from "../../reusable/button/button";
import styled from "styled-components";

const Header = styled.header``;

const CustomHeader = () => {
  return (
    <Header>
      <h1 className="title__primary">Learn to code by watching others</h1>

      <p className="content__intro">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>

      <Button>
        <span className="content__btn">Try it free 7 days</span> then $20/mo.
        thereafter
      </Button>
    </Header>
  );
};

export default CustomHeader;
