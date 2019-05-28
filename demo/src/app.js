import React from 'react';
import ulog from 'ulog';
import FPSStats from 'react-fps-stats';

import './app.css';

import GitHubCorner from './components/github-corner';
import GamepadList from './components/gamepad-list';

const log = ulog('app');

function App() {
  const stats = log.level >= log.INFO ? <FPSStats left="auto" right="0" /> : '';

  return (
    <div className="container">
      <GitHubCorner url="https://github.com/taktran/joy-joy" />
      {stats}
      <section className="main">
        <header>
          <h1>Joy Joy demo</h1>
          <h4>
            A <a href="https://en.wikipedia.org/wiki/Joy-Con">Joy-Con</a> game
            controller library for the browser
          </h4>
        </header>

        <GamepadList />
      </section>
    </div>
  );
}

export default App;
