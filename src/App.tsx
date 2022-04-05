import { useState, useEffect } from "react";
import { fetchQuizQuestions } from "./components/API";
import { Game, GlobalStyle, Wrapper } from "./components/App.styles";
// import crown from "./components/img/crown.png";
import questionmark from "./components/img/questionmark.png";
import { link } from "./components/API";

//components
import QuestionCard from "./components/QuestionCard";

//Types
import { QuestionState, Difficulty } from "./components/API";
import HallOfFame from "./components/HallOfFame";
import Navbar from "./components/Navbar";
import { Modal } from "./Modal";
import { Button } from "./components/Button";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 5;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [nickName, setNickName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [quiz, setQuiz] = useState<boolean>(false);
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [showHallOfFame, setShowHallOfFame] = useState<boolean>(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      // save answer

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  useEffect(() => {
    if (!loading && userAnswers.length === TOTAL_QUESTIONS) {
      setDisableButton(true);
      setFinalScore(score);
      setTimeout(() => {
        setShowModal(true);
        setDisableButton(false);
      }, 2000);
    }
  }, [score, gameOver, userAnswers.length, loading]);

  const setNickNameHandler = (event: { target: { value: any } }) => {
    const value = event.target.value;
    setNickName(value);
  };
  const addResult = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const result = {
      score: finalScore,
      nickName: nickName,
    };

    fetch(link, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result),
    }).then(() => {
      console.log("new result added");
      setTimeout(() => {
        setShowModal(false);
      }, 500);
    });
  };

  return (
    <>
      <GlobalStyle />
      <Navbar
        setQuiz={setQuiz}
        quiz={quiz}
        setShowHallOfFame={setShowHallOfFame}
        showHallOfFame={showHallOfFame}
      />
      <Wrapper>
        <div className="x">
          <img className="y" src={questionmark} alt="questionmark" />
        </div>

        {/* {quiz && <Image src={crown} />} */}
        <Game>
          {(quiz && gameOver) || userAnswers.length === TOTAL_QUESTIONS ? (
            <Button
              disabled={disableButton}
              show={userAnswers.length === TOTAL_QUESTIONS}
              startQuiz={startQuiz}
            ></Button>
          ) : null}
          {!gameOver ? <p className="score">Score: {score}</p> : null}
          {loading && <p>Loading Questions</p>}
          {!loading && !gameOver && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestion={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}
          {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next
            </button>
          ) : null}
        </Game>

        <HallOfFame showHallOfFame={showHallOfFame} showModal={showModal} />
        <Modal
          showModal={showModal}
          finalScore={finalScore}
          setNickNameHandler={setNickNameHandler}
          nickName={nickName}
          addResult={addResult}
        ></Modal>
      </Wrapper>
    </>
  );
}

export default App;
