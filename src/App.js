import Header from "./Components/Header/Header";
import Questions from "./Components/Questions/Questions";
import Footer from "./Components/Footer/Footer";
import React from "react";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header></Header>
        <Questions></Questions>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default App;
