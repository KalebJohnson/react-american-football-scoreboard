//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
const charColor = {
  color: 'blue'
}

const timerStyle = {
  margin: '1rem',
};

const image = './football-background.jpg';

const boardStyle = {
  backgroundColor: 'red',
  boarderRadius: '1rem',
  border: '5px solid black'
}

const headerColor = {
  color: 'black'
}



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [totalHome, setTotalHome] = useState(0);
  const [totalAway, setTotalAway] = useState(0);

 // const [totalClock, setTotalClock] = useState(0);


  return (
    <div className="container">
      <section className="scoreboard" style={boardStyle}>
        <div className="topRow">
          <div className="home">
            <h2 className="home__name"style={headerColor}>Kaleb</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score" style={charColor}>{totalHome}</div>
          </div>
  <div className="timer" style={timerStyle}>00:33</div>
          <div className="away">
            <h2 className="away__name"style={headerColor}>React</h2>
            <div className="away__score"style={charColor}>{totalAway}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown"
          onClick={() => {
            setTotalHome(totalHome + 7);
          }}
          >
          Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal"
            onClick={() => {
            setTotalHome(totalHome + 3);
            }}
            >
            Home Field Goal
            </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"
                    onClick={() => {
                      setTotalAway(totalAway + 7);
                    }}
                    >
                    Away Touchdown
                    </button>
          <button className="awayButtons__fieldGoal"
                    onClick={() => {
                      setTotalAway(totalAway + 3);
                    }}
                    >
                    Away Field Goal
                    </button>
                    <button className="awayButtons__fieldGoal"
                    onClick={() => {
                      setTotalAway(totalAway - totalAway);
                      setTotalHome(totalHome - totalHome);
                    }}
                    >
                    RESET
                    </button>
        </div>
      </section>
    </div>
  );

  
}







export default App;
