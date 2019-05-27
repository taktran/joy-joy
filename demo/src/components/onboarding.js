import React from 'react';

import JoyConShoulder from './joy-con/shoulder';

const Onboarding = props => {
  return (
    <section className="onboarding">
      <p>To connect a Joy-Con:</p>
      <ol>
        <li>
          Hold the <em>SYNC</em> button on the Joy-Con controller until the
          lights start flashing
        </li>
        <li>
          Connect the controller to your computer using your Bluetooth settings
        </li>
        <li>Once connected, press some buttons</li>
      </ol>
      <JoyConShoulder />
    </section>
  );
};

export default Onboarding;
