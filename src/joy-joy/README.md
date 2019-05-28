# Joy Joy

A [Joy-Con](https://en.wikipedia.org/wiki/Joy-Con) game controller library for the browser. Built using the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API).

To see a demo of the library, visit https://taktran.github.io/joy-joy/.

## Installation

```javascript
npm install joy-joy
```

## Usage

```javascript
import {
  subscribeToGamepads,
  unsubscribeFromGamepads,
  startPolling
} from 'joy-joy';

subscribeToGamepads({
  onGamepadConnected: ({ key, gamepad }) => {
    // addGamepad(key, gamepad)
  },
  onGamepadDisconnected: ({ key, gamepad }) => {
    // removeGamepad(key, gamepad)
  }
});

const { stopPolling } = startPolling(data => {
  // Do something with data
});

// When done
stopPolling();
unsubscribeFromGamepads();
```

### Data

`onGamepadConnected`/`onGamepadDisconnected` > `gamepad` (see [Gamepad docs](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad)):

```javascript
{
  connected: true,
  id: "Joy-Con (R) (Vendor: 057e Product: 2007)",
  index: 0,
  mapping: "",
  timestamp: 0,
  vibrationActuator: null,
  axes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.2857143878936768],
  buttons: [
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton,
    GamepadButton
  ]
}
```

`GamepadButton` (see [GamepadButton docs](https://developer.mozilla.org/en-US/docs/Web/API/GamepadButton)):

```javascript
{
  pressed: false,
  touched: false,
  value: 0
}
```

`startPolling` > `data`:

```javascript
{
  0: {
    connected: true,
    id: "Joy-Con (R) (Vendor: 057e Product: 2007)",
    index: 0,
    mapping: "",
    timestamp: 0,
    vibrationActuator: null,
    axes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1.2857143878936768],
    buttons: [
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton,
      GamepadButton
    ]
  },
  ...
}
```

## Development

- Install [nvm](https://github.com/creationix/nvm)
- Use correct node version

        nvm use

- Install dependencies

        npm install

- Go to [demo folder](https://github.com/taktran/joy-joy/tree/master/demo) and run
