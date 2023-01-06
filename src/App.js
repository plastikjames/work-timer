import React from 'react';
import './App.css';

import SetTimers from './components/setTimers';
import Timer from './components/timer';
import Controls from './components/controls';

function App() {
  return (
    <div className="App">
      <div className="container d-flex align-items-center vh-100">
        <div className="mx-auto">
          <div className="row">
            <h1 className="display-1">Work Timer</h1>
          </div>
          <div className="row">
            <div className="col">
              <SetTimers name={"Break"}/>
            </div>
            <div className="col">
              <SetTimers name={"Session"}/>
            </div>
          </div>
          <div className="row">
            <Timer />
          </div>
          <div className="row">
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
