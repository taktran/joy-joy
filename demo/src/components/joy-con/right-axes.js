import React from 'react';
import ulog from 'ulog';

import { getJoystickDirection, CONSTANTS } from 'joy-joy';

const { JOYSTICK_AXES_INDEX } = CONSTANTS;

const log = ulog('axes');

// NOTE: Direction is relative to the side view of the controller
const DIRECTIONS = {
  UP: (
    <path
      d="M48.5834 240.5L56.2334 251.657L55.932 229.142L48.5834 240.5Z"
      fill="white"
    />
  ),
  UP_RIGHT: (
    <path
      d="M57.1924 219.192L54.5348 232.457L70.4565 216.535L57.1924 219.192Z"
      fill="white"
    />
  ),
  RIGHT: <path d="M79.2417 210L90.5 217.5H67.9833L79.2417 210Z" fill="white" />,
  DOWN_RIGHT: (
    <path
      d="M101.263 219.192L103.921 232.457L87.9993 216.535L101.263 219.192Z"
      fill="white"
    />
  ),
  DOWN: (
    <path
      d="M110.173 240.133L102.523 251.29L102.825 228.775L110.173 240.133Z"
      fill="white"
    />
  ),
  DOWN_LEFT: (
    <path
      d="M100.263 262.263L102.921 248.999L86.9993 264.921L100.263 262.263Z"
      fill="white"
    />
  ),
  LEFT: <path d="M79 271L90.2583 263.5H67.7417L79 271Z" fill="white" />,
  UP_LEFT: (
    <path
      d="M58.1924 262.263L55.5348 248.999L71.4565 264.921L58.1924 262.263Z"
      fill="white"
    />
  )
};

function Axes({ index, axes }) {
  const direction = getJoystickDirection(axes);
  log.info(`R#${index}`, direction, axes[JOYSTICK_AXES_INDEX]);
  const view = DIRECTIONS[direction];
  return !!view ? view : <React.Fragment />;
}

export default Axes;
