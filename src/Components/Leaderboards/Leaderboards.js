import React, { useEffect, useState } from "react";
import Img from "../../assets/leaderboards-img.svg";
import "./Leaderboards.css";

function Leaderboards() {
  const [array_scores1, setArrayScores1] = useState([]);
  const [array_scores2, setArrayScores2] = useState([]);
  const [array_scores3, setArrayScores3] = useState([]);
  const [array_scores4, setArrayScores4] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const colors = [
    '#F08231',
    '#E46711',
    '#FED548',
    "#1E5696",
    "#3E88EE",
    "#142855",
  ];

  let currentColor = null;
  const randomColor = () => {
    currentColor = colors[(Math.random() * colors.length) >> 0];
    return currentColor;
  };

  useEffect(() => {
    
    Promise.all(
      [
        fetch('https://wsf-popcorn-backend.herokuapp.com/api/scores/2'),
        fetch('https://polar-ocean-73785.herokuapp.com/api/scores/2'),
        fetch ('https://adley-quizz.herokuapp.com/api/scores/2'),
        fetch('https://stagingquizzpursuit.herokuapp.com/api/scores/2')
      ]
    )
    .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
    .then(([data1, data2, data3, data4]) => {
          setArrayScores1(data1.scores)
          setArrayScores2(data2.questions)
          setArrayScores3(data3.scores)
          setArrayScores4(data4.scores)
          setIsLoaded(true)
        }, 
        (error) => {
          setError(error);
        }
    );
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (isLoaded === false) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div className="leaderboards col">
        
        <div className="col-12 col-sm-6">
          <h1>Leaderboards</h1>
          
          <img
          className="leaderboard-background"
          src={Img}
          alt="home background"
          />
        </div>
        <div className="col-12 col-sm-6">
          {array_scores2 && <h3>Wsf PopCorn Quiz</h3>}
          {array_scores1  ? (array_scores1.map((field, i) => (
              <span className="score-row row mt-2 p-1" style={{ background: randomColor()  }} key={i}>
                <p className="m-0 p-0 pl-5" style={{ textTransform: 'capitalize'}}>{field.username} </p>
                <p className="m-0 p-0 pr-5">score : {field.score}</p>
              </span>)) ) 
            : (<></>)
          }
          {array_scores2 && <h3>Polar ocean</h3>}
          {array_scores2  ? (array_scores2.map((field, i) => (
              <span className="score-row row mt-2 p-1" style={{ background: randomColor() }} key={i}>
                <p className="m-0 p-0 pl-5" style={{ textTransform: 'capitalize'}}>{field.username} </p>
                <p className="m-0 p-0 pr-5">score :{field.score}</p>
              </span>)) ) 
            : (<></>)
          }
          {array_scores3 && <h3>Ego Quiz</h3>}
          {array_scores3  ? (array_scores3.map((field, i) => (
              <span className="score-row row mt-2 p-1" style={{ background: randomColor() }} key={i}>
                <p className="m-0 p-0 pl-5" style={{ textTransform: 'capitalize'}}>{field.username} </p>
                <p className="m-0 p-0 pr-5">score :{field.score}</p>
              </span>)) ) 
            : (<></>)
          }
          {array_scores4 && <h3>Pursuit Quiz</h3>}
          {array_scores4  ? (array_scores4.map((field, i) => (
              <span className="score-row row mt-2 p-1" style={{ background: randomColor() }} key={i}>
                <p className="m-0 p-0 pl-5" style={{ textTransform: 'capitalize'}}>{field.username} </p>
                <p className="m-0 p-0 pr-5">score :{field.score}</p>
              </span>)) ) 
            : (<></>)
          }

        </div>        
      </div>
    )
  }
}

export default Leaderboards;
