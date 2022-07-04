import React from "react";
import styled from "styled-components";

const SampleComponent = () => {
  return (
    <Container>
      <div className="title">chiliclub-client sample component</div>
      <button disabled={true}>sample button</button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  .title {
    font-weight: bold;
  }
`;

export default SampleComponent;
