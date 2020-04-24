import React from "react";
import "./App.css";
import "./App.js"

const charColor = {
  color: 'blue'
}

const headerColor = {
  color: 'black'
}

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title" style={headerColor}>Down</h3>
        <div className="down__value" style={charColor}>3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title" style={headerColor}>To Go</h3>
        <div className="toGo__value"style={charColor}>7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title"style={headerColor}>Ball on</h3>
        <div className="ballOn__value"style={charColor}>21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title"style={headerColor}>Quarter</h3>
        <div className="quarter__value"style={charColor}>4</div>
      </div>
    </div>
  );
};

export default BottomRow;
