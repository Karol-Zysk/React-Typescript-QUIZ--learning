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
  p{
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
    background: 
      rgba(255, 255, 255, 0.95);
    border: 2px solid none;
    border-radius: 10px;
    box-shadow: 3px 2px 1px black;
    font-size: 1.5rem;
    padding: 5px;
    width: 100%;
    font-weight: bold;
    transition: all 300ms ease-in-out ;
  }
  .start:hover,
  .next:hover {
    background: 
    rgba(200, 200, 200, 0.7);
   
  }
`;
