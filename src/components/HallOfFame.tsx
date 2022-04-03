import { useState, useEffect } from "react";
import { Wrapper, Grid, GridTop } from "./HallOfFame.styles";
import { link } from "../components/API";
import axios from "axios";

type Props = {
  showModal: boolean;
};

const HallOfFame: React.FC<Props> = (showModal) => {
  const [data, setData] = useState<any[]>([]);

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
    <Wrapper>
      <GridTop>
        <div>Place</div>
        <div>Name</div>
        <div>Score </div> <div>Date:</div>
      </GridTop>
      <div></div>
      {bestResults.map((result: Result, index) => {
        return (
          <Grid key={index}>
            <div>{index + 1}.</div>
            <div>{result.nickName}</div>
            <div>{result.score}</div>{" "}
            <div>{result.date.toString().slice(0, 20)}</div>
          </Grid>
        );
      })}
    </Wrapper>
  );
};

export default HallOfFame;
