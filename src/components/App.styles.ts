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
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: white;
  }

  .score {
    color: white;
    font-size: 3rem;
    @media (max-width: 1000px) {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 650px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 3rem;
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
    @media (max-width: 1000px) {
      font-size: 4rem;
    }
    @media (max-width: 800px) {
      font-size: 3.5rem;
    }
    @media (max-width: 600px) {
      font-size: 3rem;
    }
    @media (max-width: 450px) {
      font-size: 2rem;
    }
  }
  p {
    height: min-content;
    margin: 0;
    padding: 0;
  }
  .react_icon {
    font-weight: 500;
    font-size: 8rem;
    @media (max-width: 1000px) {
      font-size: 5rem;
    }
    @media (max-width: 800px) {
      font-size: 4.5rem;
    }
    @media (max-width: 600px) {
      font-size: 4rem;
    }
    @media (max-width: 450px) {
      font-size: 3rem;
    }
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

    min-width: 40%;
    max-width: 40%;
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
    font-weight: bold;
    transition: all 300ms ease-in-out;
  }
  .start:hover,
  .next:hover {
    background: rgba(200, 200, 200, 0.7);
  }
`;
