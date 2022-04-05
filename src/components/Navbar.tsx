import React from "react";
import { Wrapper } from "./Navbar.styles";

type Props = {
  setQuiz: React.Dispatch<React.SetStateAction<boolean>>;
  quiz: boolean;
  setShowHallOfFame: React.Dispatch<React.SetStateAction<boolean>>;
  showHallOfFame: boolean;
};

const Navbar: React.FC<Props> = ({
  setQuiz,
  quiz,
  showHallOfFame,
  setShowHallOfFame,
}) => {
  return (
    <Wrapper>
      <p>
        <h1 onClick={() => setQuiz(true)} data-replace="Quiz">
          <span>Quiz</span>
        </h1>{" "}
      </p>
      <p>
        <h2
          onClick={() => setShowHallOfFame(!showHallOfFame)}
          data-replace="Hall Of Fame"
        >
          <span>Hall Of Fame</span>
        </h2>
      </p>
    </Wrapper>
  );
};

export default Navbar;
