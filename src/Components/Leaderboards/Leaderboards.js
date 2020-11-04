import React, { useEffect, useState } from "react";
import Img from "../../assets/leaderboards-img.svg";
import "./Leaderboards.css";

function Leaderboards() {
  const [array_scores, setArrayScores] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const url = 'https://adley-quizz.herokuapp.com/api/scores';

      fetch(url)
      .then(res => res.json())
      .then(res => {
        setArrayScores(res.scores)
        setIsLoaded(true)
      },
      (error) => {
        setError(error);
      })

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
          {array_scores  ? (array_scores.map((test, i) => (
              <span key={i}>
                #{test.username} {test.score}
              </span>)) ) 
            : (<></>)
          }
        </div>
        
        
      </div>
    )
  }
}

export default Leaderboards;
