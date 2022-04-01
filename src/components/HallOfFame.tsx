import { useState, useEffect } from "react";
import { Wrapper } from "./HallOfFame.styles";
import { link } from "../components/API";
import axios from "axios";

type Props = {
  showModal: boolean;
};

const HallOfFame: React.FC<Props> = (showModal) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(link).then((response) => {
      setData(response.data);
    });
  }, [showModal]);
  const bestResults = data.sort((a, b) => {
    return b.score - a.score;
  });
  console.log(bestResults);

  return (
    <Wrapper>
      {bestResults.map((result) => {
        return (
          <p>
            {result.nickName} Score: {result.score} {result.date},
          </p>
        );
      })}
    </Wrapper>
  );
};

export default HallOfFame;
