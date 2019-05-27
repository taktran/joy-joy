import React from 'react';
import { CONSTANTS } from 'joy-joy';

import useGamepadData from '../effects/use-gamepad-data';
import JoyCon from './joy-con';

const { GAMEPAD_INFO } = CONSTANTS;

function Gamepad({ gamepad }) {
  const gamepadData = useGamepadData();

  const { id, index } = gamepad;
  const { axes, buttons } = gamepadData[index] || {};
  const gamepadInfo = GAMEPAD_INFO[id];
  const name = gamepadInfo ? gamepadInfo.name : id;

  return (
    <React.Fragment>
      <h3>
        {name}
        <span className="gamepad-index">#{index}</span>
      </h3>
      <JoyCon id={id} index={index} axes={axes} buttons={buttons} />
    </React.Fragment>
  );
}

export default Gamepad;
