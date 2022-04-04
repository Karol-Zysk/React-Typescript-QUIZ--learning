import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 15vh;
  color: white;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 2rem;
  h2 {
    overflow: hidden;
    position: relative;
    display: inline-block;
  }

  h2::before,
  h2::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
  }
  h2::before {
    background-color: #54b3d6;
    height: 2px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }
  h2::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    color: #54b3d6;
  }

  h2:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
  h2:hover::after {
    transform: translate3d(0, 0, 0);
  }

  h2 span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  h2:hover span {
    transform: translate3d(-200%, 0, 0);
  }

  h2 {
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    vertical-align: top;
  }
`;
