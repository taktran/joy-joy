import React from 'react';
import ulog from 'ulog';

import { getJoystickDirection, CONSTANTS } from 'joy-joy';

const { JOYSTICK_AXES_INDEX } = CONSTANTS;

const log = ulog('axes');

// NOTE: Direction is relative to the side view of the controller
const DIRECTIONS = {
  UP: (
    <path
      d="M104.173 126.133L96.5231 137.29L96.8245 114.775L104.173 126.133Z"
      fill="white"
    />
  ),
  UP_RIGHT: (
    <path
      d="M94.2634 148.263L96.921 134.999L80.9993 150.921L94.2634 148.263Z"
      fill="white"
    />
  ),
  RIGHT: <path d="M73 157L84.2583 149.5H61.7417L73 157Z" fill="white" />,
  DOWN_RIGHT: (
    <path
      d="M52.1924 148.263L49.5348 134.999L65.4565 150.921L52.1924 148.263Z"
      fill="white"
    />
  ),
  DOWN: (
    <path
      d="M42.5834 126.5L50.2334 137.657L49.932 115.142L42.5834 126.5Z"
      fill="white"
    />
  ),
  DOWN_LEFT: (
    <path
      d="M51.1924 105.192L48.5348 118.457L64.4565 102.535L51.1924 105.192Z"
      fill="white"
    />
  ),
  LEFT: <path d="M73.2417 96L84.5 103.5H61.9833L73.2417 96Z" fill="white" />,
  UP_LEFT: (
    <path
      d="M95.2634 105.192L97.921 118.457L81.9993 102.535L95.2634 105.192Z"
      fill="white"
    />
  )
};

function Axes({ index, axes }) {
  const direction = getJoystickDirection(axes);
  log.info(`L#${index}`, direction, axes[JOYSTICK_AXES_INDEX]);
  const view = DIRECTIONS[direction];
  return !!view ? view : <React.Fragment />;
}

export default Axes;
