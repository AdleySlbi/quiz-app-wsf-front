import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import Leaderboards from "./Components/Leaderboards/Leaderboards";
import Questions from "./Components/Questions/Questions";
import Equipe from "./Components/Equipe/Equipe";
import Footer from "./Components/Footer/Footer";

import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/score" component={Leaderboards} />
          <Route path="/quiz" component={Questions} />
          <Route path="/teams" component={Equipe} />
          {/* <Route
            path="/sample"
            render={(routerProps) => (
              <Sample {...routerProps} sampleProp={"sample"} />
            )}
          /> */}
        </Switch>
        {/* <Footer></Footer> */}
      </div>
    </React.Fragment>
  );
}

export default App;
