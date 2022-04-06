import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 17vh;
  color: #c3c3c3;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  padding: 2rem;
  @media (max-width: 600px) {
    padding: 0.7rem;
  }
  border-bottom: 4px solid white;
  h1 {
    padding: 0.1rem 0.5rem;
    font-size: 2.8rem;
    @media (max-width: 800px) {
      font-size: 2.2rem;
      padding: 0.2rem 0.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1.8rem;
      padding: 0.2rem 0.5rem;
    }
  }
  h2 {
    padding: 0.1rem 0.5rem;
    @media (max-width: 800px) {
      font-size: 1.8rem;
      padding: 0.1rem 0.5rem;
    }
    @media (max-width: 500px) {
      font-size: 1.2rem;
      padding: 0.2rem 0.5rem;
    }
    @media (max-width: 360px) {
      font-size: 1.2rem;
      padding: 0.2rem 0.5rem;
    }
  }
  h2,
  h1 {
    border: 3px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    /* padding: 0.5rem 0.5rem; */
    cursor: pointer;
    overflow: hidden;
    position: relative;
    text-align: center;
    display: inline-block;
  }

  h1:hover,
  h2:hover {
    border: 3px solid rgba(255, 255, 255, 1);
    transition: all 300ms ease;
  }

  h2::before,
  h2::after,
  h1::before,
  h1::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0rem;
  }
  h2::before,
  h1::before {
    background-color: #fdfdfd;
    height: 0px;
    bottom: 0;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }
  h1::after,
  h2::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
    color: #ffffff;
  }

  h2:hover::before,
  h2:hover::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
  h2:hover::after,
  h1:hover::after {
    transform: translate3d(0, 0, 0);
  }

  h2 span,
  h1 span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  h2:hover span,
  h1:hover span {
    transform: translate3d(-200%, 0, 0);
  }

  h2,
  h1 {
    text-decoration: none;
    color: #ffffffa3;
    font-weight: 700;
    vertical-align: top;
  }
`;
