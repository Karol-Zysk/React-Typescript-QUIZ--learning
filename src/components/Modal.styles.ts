import styled from "styled-components";

type WrapperProps = {
  showModal: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  z-index: 150;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(25, 25, 25, 0.9);
  display: ${({ showModal }) => (showModal ? "block" : "none")};

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    color: white;
    @media (max-width: 1500px) {
      font-size: 3.5rem;
    }
    @media (max-width: 1000px) {
      font-size: 3rem;
    }
    @media (max-width: 600px) {
      font-size: 2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  label {
    color: white;
    margin: 1rem;
    @media (max-width: 1600px) {
      font-size: 2.5rem;
    }
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  .add_score {
    margin-top: 1rem;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid none;
    border-radius: 10px;
    box-shadow: 3px 2px 1px black;
    font-size: 1.2rem;
    padding: 0.7rem 1rem;
    font-weight: bold;
    transition: all 300ms ease-in-out;
  }
  input {
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 10px;
  }
`;
