import React from "react";
import { Wrapper } from "./Modal.styles";

type Props = {
  nickName: string;
  setNickNameHandler: (event: {
    target: {
      value: any;
    };
  }) => void;
  addResult: (e: { preventDefault: () => void }) => void;
  finalScore: number;
  showModal: boolean;
};

export const Modal: React.FC<Props> = ({
  addResult,
  nickName,
  setNickNameHandler,
  finalScore,
  showModal,
}) => {
  return (
    <Wrapper showModal={showModal}>
      <div>
        <h1>Great job. Your Score: {finalScore} </h1>

        <label>Your Nickname</label>
        <input type="text" value={nickName} onChange={setNickNameHandler} />
        <button className="add_score" onClick={addResult}>
          Submit Score
        </button>
      </div>
    </Wrapper>
  );
};
