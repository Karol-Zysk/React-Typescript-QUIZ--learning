import styled from "styled-components";

export const Wrapper = styled.div`
  color: white;
  
  min-width: 50%;
  max-width: 50%;
  @media (max-width: 1000px) {
    min-width: 60%;
    max-width: 60%;
  }
  @media (max-width: 800px) {
    min-width: 80%;
    max-width: 80%;
  }
  @media (max-width: 600px) {
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
    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: 300ms ease-in-out;
  :hover {
    opacity: 0.9;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    @media (max-width: 600px) {
      font-size: 0.9rem;
      padding: 0.7rem;
      width: 90%;
    }
    width: 100%;
    padding: 0.8rem;
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
