import React from "react";
import styled from "styled-components";
import questionmark from "../components/img/questionmark.png";

type Props = {
  moveValue: number;
  align: string;
};

const Wrapper = styled.div<Props>`
  align-self: ${({ align }) => align};
  .x {
    position: absolute;
    z-index: ${({ moveValue }) => moveValue && `${1000 / moveValue}`};
    max-width: ${({ moveValue }) => moveValue && `${moveValue}vh`};
    max-height: 100px;
    animation: ${({ align }) => (align === "flex-end" ? "x" : "z")}
      ${({ moveValue }) => moveValue && `${moveValue * 2}s`} linear infinite
      alternate;
    @media (max-width: 600px) {
      animation: ${({ align }) => (align === "flex-end" ? "x" : "z")}
        ${({ moveValue }) => moveValue && `${moveValue}s`} linear infinite
        alternate;
    }
  }

  .y {
    pointer-events: none;
    left: ${({ moveValue }) => moveValue && `${moveValue * 10}vw`};
    max-width: auto;
    max-height: ${({ moveValue }) => moveValue && `${(moveValue / 3) * 30}px`};
    animation: y ${({ moveValue }) => moveValue && `${moveValue * 1.2}s`} linear
      infinite alternate;
  }

  @keyframes x {
    100% {
      transform: translateX(calc(40px - ${window.innerWidth}px));
    }
  }
  @keyframes z {
    100% {
      transform: translateX(calc(${window.innerWidth}px - 40px));
    }
  }

  @keyframes y {
    100% {
      transform: translateY(calc(${window.innerHeight}px - (18vh + 70px)))
        rotate(360deg);
    }
  }
`;

export const QuestionMark: React.FC<Props> = ({ moveValue, align }) => {
  console.log(moveValue);

  return (
    <Wrapper moveValue={moveValue} align={align}>
      <div className="x">
        <img className="y" src={questionmark} alt="questionmark" />
      </div>
    </Wrapper>
  );
};
