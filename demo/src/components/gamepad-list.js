import React from 'react';

import useGamepads from '../effects/use-gamepads';
import Gamepad from './gamepad';

import Onboarding from './onboarding';

const leftToRight = ({ id: idA = '' }, { id: idB = '' }) => {
  return idA.localeCompare(idB);
};

function Gamepads() {
  const gamepads = useGamepads();

  const hasGamepads = !!gamepads && !!Object.keys(gamepads).length;
  const gamepadElems = hasGamepads ? (
    <ul className="gamepad-list">
      {Object.values(gamepads)
        .sort(leftToRight)
        .map(gamepad => {
          const { index } = gamepad;
          return (
            <li key={index} className="gamepad">
              <Gamepad gamepad={gamepad} />
            </li>
          );
        })}
    </ul>
  ) : (
    <Onboarding />
  );
  return gamepadElems;
}

export default Gamepads;
