import styled from "styled-components";

type showHall = {
  showHallOfFame: boolean;
};

export const Wrapper = styled.div<showHall>`
  border: 3px solid goldenrod;
  color: white;

  border: 2px solid white;

  background: linear-gradient(
    132deg,
    rgba(121, 0, 195, 0.5) 0%,
    rgba(169, 0, 177, 0.5) 100%
  );
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  font-size: 1rem;
  width: 30%;
  height: 80vh;
  position: fixed;
  top: 17vh;
  z-index: 1400;

  transform: ${({ showHallOfFame }) =>
    showHallOfFame
      ? "translateX(500%)"
      : `translateX(calc(${window.innerWidth}px - 0.3*(${window.innerWidth}px)))`};
  transition: all 300ms ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px) {
    font-size: 0.9rem;
    width: 45%;
    transform: ${({ showHallOfFame }) =>
      showHallOfFame
        ? "translateX(500%)"
        : `translateX(calc(${window.innerWidth}px - 0.45*(${window.innerWidth}px)))`};
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
    width: 60%;
    transform: ${({ showHallOfFame }) =>
      showHallOfFame
        ? "translateX(500%)"
        : `translateX(calc(${window.innerWidth}px - 0.6*(${window.innerWidth}px)))`};
  }
  @media (max-width: 500px) {
    width: 90%;
    font-size: 0.7rem;
    padding: 0.5rem;
    transform: ${({ showHallOfFame }) =>
      showHallOfFame
        ? "translateX(500%)"
        : `translateX(calc(${window.innerWidth}px - 0.9*(${window.innerWidth}px)))`};
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
      ? "rgba(255,255,255,0.1)"
      : "none"};
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
    border-bottom: 1px solid black;
    padding: 4px;
    padding-left: 8px;
    display: flex;
  }
`;

export const GridTop = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr 0.6fr 1fr;

  div {
    border-right: 1px solid black;

    padding: 8px;
    padding-left: 10px;
    font-weight: bold;
  }
`;
