import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height:  100%;
     
}
body{
    background-color: black;
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    overflow: hidden;
}

*{
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

@keyframes show {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-1200px);
    }
  }
  
  

`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  flex-direction: row;
  > p {
    color: white;
  }

  .score {
    @media (min-width: 700px) {
      position: relative;
      left: -15%;
    }
    color: white;
    font-size: 3rem;
    margin-top: 1rem;
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

  .start,
  .next {
    @media (min-width: 700px) {
      position: relative;
      left: -15%;
    }
    color: white;
    cursor: pointer;
    background: rgba(255, 255, 255, 0);
    border: 2px solid white;
    border-radius: 10px;
    box-shadow: 3px 2px 1px black;
    font-size: 1.5rem;
    padding: 5px 1rem;
    margin-top: 1rem;

    @media (max-width: 1000px) {
      min-width: 60%;
      max-width: 60%;
    }
    @media (max-width: 800px) {
      min-width: 50%;
      max-width: 50%;
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
    background: rgba(200, 200, 200, 0.1);
  }
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: auto;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  width: 300px;
  height: 200px;
  right: 5%;
  @media (max-width: 700px) {
    left: 50%;
    margin-left: -150px;
  }
  top: 35%;
`;
