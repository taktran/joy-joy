import { useState, useEffect } from 'react';

import { subscribeToGamepads, unsubscribeFromGamepads } from 'joy-joy';

const updateGamepad = ({ key, gamepad }) => gamepads => {
  if (!gamepad) {
    return gamepads;
  }

  const newGamepads = Object.assign({}, gamepads, {
    [key]: gamepad
  });
  return newGamepads;
};

const removeGamepad = ({ key, gamepad }) => gamepads => {
  if (!gamepad) {
    return gamepads;
  }

  const newGamepads = Object.assign({}, gamepads);
  delete newGamepads[key];
  return newGamepads;
};

function useGamepads() {
  const [gamepads, setGamepads] = useState({});

  useEffect(() => {
    subscribeToGamepads({
      onGamepadConnected: ({ key, gamepad }) => {
        setGamepads(updateGamepad({ key, gamepad }));
      },
      onGamepadDisconnected: ({ key, gamepad }) => {
        setGamepads(removeGamepad({ key, gamepad }));
      }
    });

    return () => unsubscribeFromGamepads();
  });

  return gamepads;
}

export default useGamepads;
