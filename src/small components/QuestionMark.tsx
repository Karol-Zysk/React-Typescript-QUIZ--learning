import React from "react";
import styled from "styled-components";
import questionmark from "../components/img/questionmark.png";

type Props = {
  moveValue: number;
};

const Wrapper = styled.div<Props>`
  justify-self: baseline;
  align-self: baseline;
  .x {
    position: absolute;
    justify-self: baseline;
    z-index: ${({ moveValue }) => moveValue && `${1000 / moveValue}`};
    align-self: baseline;
    max-width: ${({ moveValue }) => moveValue && `${moveValue}vh`};
    max-height: 100px;
    animation: x ${({ moveValue }) => moveValue && `${moveValue}s`} linear
      infinite alternate;
    @media (max-width: 600px) {
      animation: x ${({ moveValue }) => moveValue && `${moveValue}s`} linear
        infinite alternate;
    }
  }

  .y {
    justify-self: baseline;
    pointer-events: none;
    align-self: baseline;
    left: ${({ moveValue }) => moveValue && `${moveValue * 10}vw`};
    max-width: 65px;
    max-height: ${({ moveValue }) => moveValue && `${(moveValue / 3) * 30}px`};
    animation: y ${({ moveValue }) => moveValue && `${moveValue * 1.2}s`} linear
      infinite alternate;
  }

  @keyframes x {
    100% {
      transform: translateX(calc(${window.innerWidth}px - 85px));
    }
  }

  @keyframes y {
    100% {
      transform: translateY(calc(${window.innerHeight}px - (18vh + 100px)))
        rotate(360deg);
    }
  }
`;

export const QuestionMark: React.FC<Props> = ({ moveValue }) => {
  console.log(moveValue);

  return (
    <Wrapper moveValue={moveValue}>
      <div className="x">
        <img className="y" src={questionmark} alt="questionmark" />
      </div>
    </Wrapper>
  );
};
