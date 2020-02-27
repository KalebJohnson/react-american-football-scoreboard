//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [totalHome, setTotalHome] = useState(0);
  const [totalAway, setTotalAway] = useState(0);
  const [totalClock, setTotalClock] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Me</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{totalHome}</div>
          </div>

          <div className="away">
            <h2 className="away__name">React</h2>
            <div className="away__score">{totalAway}</div>
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
            setTotalHome(totalHome + 2);
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
                      setTotalAway(totalAway + 2);
                    }}
                    >
                    Away Field Goal
                    </button>
                    <button
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
