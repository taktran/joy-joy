import React from 'react';

import { CONSTANTS } from 'joy-joy';

import JoyConLeft from './joy-con-left';
import JoyConRight from './joy-con-right';

const { GAMEPAD_IDS } = CONSTANTS;

const JoyCon = ({ id, index, buttons, axes }) => {
  const hasData = !!buttons && !!axes;
  const isLeft = GAMEPAD_IDS.LEFT_JOY_CON === id;

  return hasData ? (
    isLeft ? (
      <JoyConLeft index={index} buttons={buttons} axes={axes} />
    ) : (
      <JoyConRight index={index} buttons={buttons} axes={axes} />
    )
  ) : (
    <React.Fragment />
  );
};

export default JoyCon;
