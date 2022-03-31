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
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    background-image: linear-gradient(180deg, rgba(100,100,100, 0.5), transparent);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-fill-color: transparent;
    -moz-fill-color: black;
    -moz-background-clip: text;
    filter: drop-shadow(2px 2px black);
    font-size: 90px;
    font-weight: bold;
    color: transparent;
    text-align: center;
    margin: 20px;
  }
`;
