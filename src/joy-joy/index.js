import ulog from 'ulog';

import * as CONSTANTS from './contants';

const log = ulog('joy-joy');

const WAIT_TIME = 16; // 60fps

const { JOYSTICK_AXES_INDEX, JOYSTICK_DIRECTIONS } = CONSTANTS;
const floatIsEqual = (a, b) => Math.abs(a - b) < Number.EPSILON;

const gamepadConnected = onGamepadConnected => event => {
  const { gamepad } = event;
  const key = getKey(gamepad);
  log.log('gamepadConnected', key, gamepad);
  onGamepadConnected({ key, gamepad });
};

const gamepadDisconnected = onGamepadDisconnected => event => {
  const { gamepad } = event;
  const key = getKey(gamepad);
  log.log('gamepadDisconnected', key, gamepad);
  onGamepadDisconnected({ key, gamepad });
};

export { CONSTANTS };

export function getKey({ id, index }) {
  return `${id}#${index}`;
}

export function getJoystickDirection(axes) {
  const value = axes[JOYSTICK_AXES_INDEX];
  let direction;
  Object.keys(JOYSTICK_DIRECTIONS).forEach(key => {
    const pos = JOYSTICK_DIRECTIONS[key];
    if (floatIsEqual(pos, value)) {
      direction = key;
    }
  });
  return direction;
}

export function subscribeToGamepads({
  onGamepadConnected = () => {},
  onGamepadDisconnected = () => {}
}) {
  log.log('subscribeToGamepads');

  window.addEventListener(
    'gamepadconnected',
    gamepadConnected(onGamepadConnected)
  );
  window.addEventListener(
    'gamepaddisconnected',
    gamepadDisconnected(onGamepadDisconnected)
  );
}

export function unsubscribeFromGamepads() {
  log.log('unsubscribeToGamepads');

  window.removeEventListener('gamepadconnected', gamepadConnected);
  window.removeEventListener('gamepaddisconnected', gamepadDisconnected);
}

export function startPolling(handler) {
  let isTicking = false;

  log.log('startPolling');

  const tick = gamepadStateHandler => {
    if (isTicking) {
      gamepadStateHandler(navigator.getGamepads());

      // Keep ticking
      setTimeout(() => {
        window.requestAnimationFrame(() => tick(gamepadStateHandler));
      }, WAIT_TIME);
    }
  };

  if (!isTicking) {
    log.log('startPolling init');
    isTicking = true;
    tick(handler);
  }

  const stopPolling = () => {
    log.log('stopPolling');
    isTicking = false;
  };

  return {
    stopPolling
  };
}
