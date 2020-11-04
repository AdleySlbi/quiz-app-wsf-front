import React, { useEffect, useState } from "react";
import Img from "../../assets/leaderboards-img.svg";
import "./Leaderboards.css";

const axios = require("axios");

function Leaderboards() {
  const [array_scores, setArrayScores] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const array_scores = [];
    useEffect(() => {
      const url = 'https://adley-quizz.herokuapp.com/scores';

        fetch(url)
        .then(res => res.json())
        .then(res => {
            setArrayScores(res.data)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        })

    }, [])
    //   async function fetchData() {
    //     const request = await axios.get("https://adley-quizz.herokuapp.com/api/scores");
        
    //     request.data.data.forEach(element => {
    //       setArrayScores(array_scores.push(element))
    //       // array_scores.push(element)
    //     });
    //   }
    //   fetchData();
    // // eslint-disable-next-line
    // }, []);
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
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
            {/* { array_scores.length > 0 && (array_scores.map(score => <div>{score.score}</div>)) } */}
            {/* <ul>
              {data.map(d => <li key={d.name}>{d.name}</li>)}
            </ul> */}
            {array_scores  ? (
              array_scores.map((test, i) => (
                <span
                  key={i}
                >
                  #{test.username}
                </span>
              )) ) : 
              (<></>)
            }
            {/* {array_scores.map(score => <div>{score.username}</div>)} */}
          </div>
          
          
        </div>
      )
  }
}

export default Leaderboards;
