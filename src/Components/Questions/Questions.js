import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Questions.css";
const axios = require('axios');

function Questions() {

  const [questions, setQuestions] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState("");

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  const handlePlayerInput = (event) => {
    setPlayer(event.target.value);
  }

  const handleSubmit = async (event) => {
    console.log(player, score);
    event.preventDefault();
    await axios({
      method: 'post',
      url: 'https://adley-quizz.herokuapp.com/api/scores',
      data: {
        username: player,
        score: score,
      }
    })
  }

  useEffect(() => {
    Promise.all(
      [
        fetch('https://adley-quizz.herokuapp.com/api/questions'),
        fetch('https://polar-ocean-73785.herokuapp.com/api/questions/random')
      ]
    )
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => {
          // setQuestions(data1.questions)
          // setQuestionRandom(data2.questions )
          setQuestions([...data1.questions, data2.questions ])
          setLoaded(true)
        }, 
        (error) => {
          setError(error);
        }
    );
  }, [])


  if (error) {
    return (
      <div>
        <span>Error : {error.message}</span>
      </div>
    )
  } else if (loaded === false) {
    return (
      <div>
        <span>Loading</span>
      </div>
    )
  } else {
    return (
      <div className="questions-content">
        { showScore ? (
          <div className="wrapperScoreWrapper col-12 pt-5 d-flex justify-content-center align-self-center">
            <div className="scoreWrapper d-flex flex-column justify-content-center align-self-center">
              <h2>Félicitation, you know Adley.</h2>
              <h3>You scored {score} out of {questions.length}</h3>
              <div>
                <span className="inputStyle">Enter your name</span>
                <form onSubmit={handleSubmit}>
                  <input type="text" value={player.value} onChange={handlePlayerInput} />
                  <div onClick={handleSubmit} className="button col mt-3">
                    <Link to="/score">Envoyer</Link>
                  </div>

                </form>
              </div>
            </div>
          </div>
        ) : (
            <>
              <div className="questions d-flex col-12 pt-5">
                <div className="col-6 questionWrapper">
                  <h1>{questions[currentQuestion].question}</h1>
                </div>
                <div className="col-6 answerWrapper">
                  <div className="questionNumber">
                    <span> {currentQuestion + 1}/ {questions.length}</span>
                  </div>
                  <ul>
                    {questions[currentQuestion].answers.map((answerprint, i) => (
                      <li key={i} className="oneAnswer" onClick={() => handleAnswerButtonClick(answerprint.isCorrect)}>{answerprint.answer}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )

        }
      </div>
    );
  }
}

export default Questions;
