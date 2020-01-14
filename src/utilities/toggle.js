// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Toggle = ({ children }) => {
  const [toggleState, setToggleState] = useState({
    on: true
  });

  const { on } = toggleState;

  const toggle = () => {
    setToggleState({ on: !on });
  };

  return children({
    on: on,
    toggle: toggle
  });
};

export default Toggle;
