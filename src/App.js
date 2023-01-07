import React from 'react';
import './App.css';

import SetTimers from './components/setTimers';
import Timer from './components/timer';
import Controls from './components/controls';
import { useSelector } from 'react-redux';
import { selectTimers } from './features/setTimersSlice';

function App() {
  const timers = useSelector(selectTimers);

  return (
    <div className="App">
      <div className="container d-flex align-items-center vh-100">
        <div className="mx-auto">
          <div className="row">
            <h1 className="display-1">Work Timer</h1>
          </div>
          <div className="row">
            {timers.map(timer => {
              return (
                <div className="col" key={timer.index}>
                  <SetTimers name={timer.name} index={timer.index} time={timer.time} />
                </div>
              )
            })}
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
