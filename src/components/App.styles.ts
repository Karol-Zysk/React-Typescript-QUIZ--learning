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
  height: 75vh;
  padding-right: 30rem;

  flex-direction: row;
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

    .x {
      max-width: 100px;
      max-height: 100px;
      animation: x 13s linear infinite alternate;
    }

    .y {
      max-width: 100px;
      height: 100px;
      animation: y 7s linear infinite alternate;
    }

    @keyframes x {
      100% {
        transform: translateX(calc(100vw - 100px));
      }
    }

    @keyframes y {
      100% {
        transform: translateY(calc(100vh - 100px));
      }
    }
  }

  .start,
  .next {
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
    background: rgba(200, 200, 200, 0.1);
  }
`;

export const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: auto;
  margin-right: 35rem;
`;

// export const Image = styled.img`
//   position: absolute;
//   width: 20%;
//   height: 30%;
//   right: 10%;
//   top: 35%;
// `;
