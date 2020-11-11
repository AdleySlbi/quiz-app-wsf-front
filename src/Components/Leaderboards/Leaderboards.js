import React, { useEffect, useState } from "react";
import Img from "../../assets/leaderboards-img.svg";
import "./Leaderboards.css";

function Leaderboards() {
  const [array_scores1, setArrayScores1] = useState([]);
  const [array_scores2, setArrayScores2] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // const url = 'https://adley-quizz.herokuapp.com/api/scores';
    // const url = 'https://polar-ocean-73785.herokuapp.com/api/scores/60';

    Promise.all(
      [
        fetch('https://wsf-popcorn-backend.herokuapp.com/api/scores'),
        fetch('https://polar-ocean-73785.herokuapp.com/api/scores/60')
      ]
    )
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => {
            setArrayScores1(data1.scores)
            setArrayScores2(data2.data)
            console.log(data2.data)
            setIsLoaded(true)
        }, 
        (error) => {
          setError(error);
        }
    );
     
      // fetch(url)
      // .then(res => res.json())
      // .then(res => {
      //   setArrayScores(res.data)
      //   setIsLoaded(true)
      // },
      // (error) => {
      //   setError(error);
      // })

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
          {array_scores1  ? (array_scores1.map((field, i) => (
              <span className="row" key={i}>
                #{field.username} {field.score}
              </span>)) ) 
            : (<></>)
          }
          {array_scores2  ? (array_scores2.map((field, i) => (
              <span className="row" key={i}>
                #{field.username} {field.score}
              </span>)) ) 
            : (<></>)
          }
        </div>
        
        
      </div>
    )
  }
}

export default Leaderboards;
