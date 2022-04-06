import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  @media (min-width: 700px) {
    position: relative;
    left: -15%;
  }

  margin-top: 2rem;
  min-width: 40%;
  max-width: 40%;
  @media (max-width: 1000px) {
    min-width: 60%;
    max-width: 60%;
  }
  @media (max-width: 800px) {
    min-width: 50%;
    max-width: 50%;
  }
  @media (max-width: 700px) {
    min-width: 80%;
    max-width: 80%;
    padding: 10px;
  }
  @media (max-width: 600px) {
    min-width: 90%;
    max-width: 90%;
    padding: 10px;
  }
  @media (max-width: 320px) {
    min-width: 90%;
    max-width: 90%;
    padding: 10px;
  }
  background: linear-gradient(
    132deg,
    rgba(121, 0, 195, 0.5) 0%,
    rgba(169, 0, 177, 0.5) 100%
  );
  border-radius: 10px;
  border: 2px solid white;
  padding: 20px;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-bottom: 1rem;

  transition: all 300ms;

  p {
    font-size: 1rem;
    @media (max-width: 400px) {
      font-size: 0.9rem;
    }
  }
  z-index: 100;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: 300ms ease-in-out;
  @media (max-width: 500px) {
    margin-top: -20px;
    padding: 0;
  }
  :hover {
    opacity: 0.9;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.9rem;
    @media (max-width: 600px) {
      font-size: 0.8rem;
      padding: 0.6rem;
      width: 90%;
    }
    width: 100%;
    padding: 0.6rem;
    margin: 5px 0px;
    background: ${({ correct, userClicked }) =>
      correct
        ? "rgba(0, 255, 0, 0.5)"
        : !correct && userClicked
        ? "rgba(255, 0, 0, 0.5)"
        : "rgba(0, 0, 0, 0.3)"};
    border: 1px solid white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: white;
    font-weight: bold;
  }
`;
