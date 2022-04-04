import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  height: auto;
  background: transparent;
  font-size: 1rem;

  padding: 2rem;
  color: black;
  left: 0;
  top: 0;
  position: absolute;
  @media (max-width: 1000px) {
    font-size: 0.9rem;
    width: 45%;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
    width: 60%;
  }
  @media (max-width: 500px) {
    width: 100%;
    font-size: 0.7rem;
    padding: 0.5rem;
    display: none;
  }
`;

type Prop = {
  tabNumber: number;
};

export const Grid = styled.div<Prop>`
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.6fr 1fr;
  background: ${({ tabNumber }) =>
    tabNumber === 0
      ? "linear-gradient(90deg, rgba(255,253,86,0.7) 0%, rgba(201,183,0,0.7) 41%, rgba(255,231,0,0.7) 100%)"
      : tabNumber === 1
      ? "linear-gradient(90deg, rgba(245,245,240,0.7) 0%, rgba(181,181,177,0.7) 41%, rgba(125,123,109,0.7) 100%)"
      : tabNumber === 2
      ? "linear-gradient(90deg, rgba(247,110,46,0.7) 0%, rgba(240,144,8,0.7) 41%, rgba(209,108,0,0.7) 100%)"
      : tabNumber % 2
      ? "rgba(255,255,255,0.25)"
      : "rgba(0,0,0,0.25)"};
  .tab_score,
  .place {
    justify-content: center;
    font-size: 1.1rem;
    @media (max-width: 1000px) {
      font-size: 1rem;
    }
    @media (max-width: 700px) {
      font-size: 0.9rem;
    }
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  .date {
    font-size: 0.7rem;
    display: flex;
    align-items: center;
    @media (max-width: 1000px) {
      font-size: 0.7rem;
    }
    @media (max-width: 700px) {
      font-size: 0.6rem;
    }
    @media (max-width: 500px) {
      font-size: 0.5rem;
    }
  }
  div {
    border-right: 1px solid black;
    padding: 4px;
    padding-left: 8px;
    display: flex;
  }
`;

export const GridTop = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.6fr 1fr;

  div {
    border: 1px solid black;
    padding: 4px;
    font-weight: bold;
  }
`;
