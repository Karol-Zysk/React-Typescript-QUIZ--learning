import React from "react";

type Props = {
  show: boolean;
  disabled: boolean;
  startQuiz: () => Promise<void>;
};

export const Button: React.FC<Props> = ({ show, disabled, startQuiz }) => {
  return (
    <button onClick={startQuiz} className="start" disabled={disabled}>
      {show ? "Try Again" : "Start "}
    </button>
  );
};
