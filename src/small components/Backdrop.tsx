import React from "react";
import styled from "styled-components";

const ScreenBackdrop = styled.div`
  width: 100vw;
  height: 83vh;
  position: fixed;
  top: 17vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 110;
`;

export const Backdrop = () => {
  return <ScreenBackdrop />;
};
