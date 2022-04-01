import styled, { createGlobalStyle } from "styled-components";
import BGImg from "./img/background.jpg";

export const GlobalStyle = createGlobalStyle`
html{
    height:  100%;
     
}
body{
    background-image: url(${BGImg});
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 3rem;
    margin: 0;
    text-shadow: 3px 0px 1px black;
    font-weight: bold;
  }

  h1 {
    text-shadow: 2px 3px 4px black;
    color: white;
    font-size: 5rem;
    font-weight: bold;
    display: flex;
    height: min-content;
    align-items: center;
    margin: 0;
  }
  p {
    height: min-content;
    margin: 0;
    padding: 0;
  }
  .react_icon {
    font-weight: 500;
    font-size: 9rem;
  }

  .start,
  .next {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.95);
    border: 2px solid none;
    border-radius: 10px;
    box-shadow: 3px 2px 1px black;
    font-size: 1.5rem;
    padding: 5px;
    width: 100%;
    font-weight: bold;
    transition: all 300ms ease-in-out;
  }
  .start:hover,
  .next:hover {
    background: rgba(200, 200, 200, 0.7);
  }
`;

type ModalProps = {
  showModal: boolean;
};

export const Modal = styled.div<ModalProps>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
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
`;
