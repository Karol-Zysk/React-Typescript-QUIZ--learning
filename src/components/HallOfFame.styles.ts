import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  color: black;
  width: auto;
  height: auto;
  padding: 1rem;
  left: 0;
  top: 0;
  position: absolute;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 1fr;
  div {
    border-right: 1px solid black;
    padding: 4px;
    padding-left: 8px;
  }
`;

export const GridTop = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 1fr;

  div {
    border: 1px solid black;
    padding: 4px;
    font-weight: bold;
  }
`;
