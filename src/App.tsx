import { useState, useEffect } from "react";
import { fetchQuizQuestions } from "./components/API";
import { GlobalStyle, Wrapper, Modal } from "./components/App.styles";
import { link } from "./components/API";

//components
import QuestionCard from "./components/QuestionCard";

//Types
import { QuestionState, Difficulty } from "./components/API";
import HallOfFame from "./components/HallOfFame";

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
    if (userAnswers.length === TOTAL_QUESTIONS) {
      setFinalScore(score);
      setShowModal(true);
      console.log(finalScore);
    }
  }, [score, finalScore, number, userAnswers.length]);

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
      setShowModal(false);
    });
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>
          <p className="react_icon">&#x269B;</p> QUIZ
        </h1>

        <Modal showModal={showModal}>
          <div>
            <h2>Great job. Your Score: {finalScore}</h2>

            <label>Your Nickname</label>
            <input type="text" value={nickName} onChange={setNickNameHandler} />
            <button onClick={addResult}>xxx</button>
          </div>
        </Modal>
        <HallOfFame showModal={showModal} />
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
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
      </Wrapper>
    </>
  );
}

export default App;
