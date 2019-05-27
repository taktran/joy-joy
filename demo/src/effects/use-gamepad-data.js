import { useState, useEffect } from 'react';

import { startPolling } from 'joy-joy';

function useGamepadData() {
  const [gamepadData, setGamepadData] = useState({});

  useEffect(() => {
    const { stopPolling } = startPolling(data => {
      setGamepadData(data);
    });

    return () => stopPolling();
  });

  return gamepadData;
}

export default useGamepadData;
