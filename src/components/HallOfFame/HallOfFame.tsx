import { useState, useEffect } from "react";
import { Wrapper, Grid, GridTop } from "./HallOfFame.styles";
import { link } from "../API";
import axios from "axios";

type Props = {
  showModal: boolean;
  showHallOfFame: boolean;
};

const HallOfFame: React.FC<Props> = ({ showModal, showHallOfFame }) => {
  const [data, setData] = useState<any[]>([]);

  console.log(showHallOfFame);

  type Result = {
    result: {};
    nickName: string;
    score: number;
    date: Date;
  };

  useEffect(() => {
    axios.get(link).then((response) => {
      setData(response.data);
    });
  }, [showModal]);

  const bestResults = data.sort((a, b) => {
    return b.score - a.score;
  });
  return (
    <Wrapper showHallOfFame={showHallOfFame}>
      <GridTop>
        <div>Place</div>
        <div>Name</div>
        <div>Pts </div> <div>Date:</div>
      </GridTop>
      {bestResults.slice(0, 13)?.map((result: Result, index) => {
        return (
          <Grid key={index} tabNumber={index}>
            <div className="place">
              <span>{index + 1}.</span>
            </div>
            <div className="nickName">{result.nickName}</div>
            <div className="tab_score">{result.score}</div>{" "}
            <div className="date">{result.date.toString().slice(0, 20)}</div>
          </Grid>
        );
      })}
    </Wrapper>
  );
};

export default HallOfFame;
