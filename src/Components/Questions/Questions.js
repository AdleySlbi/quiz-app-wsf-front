import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Questions.css";
// const axios = require('axios');

function Questions() {
  const questionUrl = 'https://adley-quizz.herokuapp.com/api/questions'
  const [questions, setQuestions] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState("");

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      // alert("this answer is correct!");
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

    fetch("https://adley-quizz.herokuapp.com/api/scores", {
      method: "POST",
      body: JSON.stringify({
        username: player,
        score: score
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      }
    })
      // Converting to JSON 
      .then(response => response.json())
      // Displaying results to console 
      .then(json => console.log(json));
    // await axios.post(
    //   'https://adley-quizz.herokuapp.com/api/scores',
    //   {
    //       username : player,
    //       score: score,
    //   },
    //   {
    //       'Content-Type': 'application/json',
    //       'Access-Control-Allow-Origin': '*',
    //   }
    //   ).then(response => {
    //       console.log("Success ", response);
    //   })
    //   .catch(error => {
    //       console.log("Error ", error);
    //   }
    // )
  }

  useEffect(() => {
    fetch(questionUrl)
      .then(response => response.json())
      .then(
        data => {
          setQuestions(data.questions)
          setLoaded(true)
        },
        (error) => {
          setError(error)
        }
      )
  }, [questionUrl])

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
      <div>
        { showScore ? (
          <div className="col-12 pt-5 d-flex justify-content-center align-self-center">
            <div className="scoreWrapper">
              <span>Félicitation, you know Adley.</span>
              <span>You scored {score} out of {questions.length}</span>
              <div>
                <span>Enter your name</span>
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
