export const COLORS = {
  GRAY: '#747474',
  BLUE: '#00BBDB',
  RED: '#FF5F53'
};

export const GAMEPAD_IDS = {
  LEFT_JOY_CON: 'Joy-Con (L) (Vendor: 057e Product: 2006)',
  RIGHT_JOY_CON: 'Joy-Con (R) (Vendor: 057e Product: 2007)'
};
export const GAMEPAD_INFO = {
  [GAMEPAD_IDS.LEFT_JOY_CON]: {
    id: 'left-joy-con',
    name: 'Left Joy-Con'
  },
  [GAMEPAD_IDS.RIGHT_JOY_CON]: {
    id: 'right-joy-con',
    name: 'Right Joy-Con'
  }
};

export const JOYSTICK_AXES_INDEX = 9;

export const JOYSTICK_DIRECTIONS = {
  UP: -1,
  UP_RIGHT: -0.7142857313156128,
  RIGHT: -0.4285714030265808,
  DOWN_RIGHT: -0.1428571343421936,
  DOWN: 0.14285719394683838,
  DOWN_LEFT: 0.4285714626312256,
  LEFT: 0.7142857313156128,
  UP_LEFT: 1
};

export const BUTTON_MAPPINGS = {
  // NOTE: directions are from the sideways view
  DOWN: 0,
  RIGHT: 1,
  LEFT: 2,
  UP: 3,

  A: 0,
  X: 1,
  B: 2,
  Y: 3,

  SL: 4,
  SR: 5,

  // undefined: 6,
  // undefined: 7,

  MINUS: 8,
  PLUS: 9,

  LEFT_STICK: 10,
  RIGHT_STICK: 11,

  HOME: 12,
  CAPTURE: 13,

  TRIGGER: 14,
  Z_TRIGGER: 15

  // undefined: 16
};
