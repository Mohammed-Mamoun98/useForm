import React, { createContext, useState } from 'react';
import { Consumer } from './ContextConsumer';

export const ParentContext = createContext({
  counter: 0,
  setCounter: () => {}
});

export const Provider = () => {
  const [counter, setCounter] = useState(0);
  const contextValue = {
    counter,
    setCounter
  };

  return (
    <ParentContext.Provider value={contextValue}>
      <Consumer />
    </ParentContext.Provider>
  );
};
