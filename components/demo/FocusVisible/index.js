import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-style: inset;
  width: 100px;
  > :focus-visible {
    outline: 2px solid blue;
  }
`;

const FocusVisibleExample = () => {
  return (
    <Container>
      <div role="button" tabIndex={0}>
        Highlighted on keyboard tab
      </div>
    </Container>
  );
};
export default FocusVisibleExample;
