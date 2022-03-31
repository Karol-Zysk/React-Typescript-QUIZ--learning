import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border: 2px solid black;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-bottom: 1rem;

  p {
    font-size: 1rem;
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
    width: 100%;
    padding: 0.8rem;
    margin: 5px 0px;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg,rgba(0, 255, 0, 0.8),rgba(255, 255, 255, 0.8) )"
        : !correct && userClicked
        ? "linear-gradient(90deg,rgba(255, 0, 0, 0.8),rgba(255, 255, 255, 0.8) )"
        : "linear-gradient(90deg,rgba(0, 0, 0, 0.8),rgba(255, 255, 255, 0.8) )"};
    border: 3px solid black;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: black;
    font-weight: bold;
  }
`;
