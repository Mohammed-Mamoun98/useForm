import React, { useContext } from 'react';
import { ParentContext } from './ContextProvider';
export const Consumer = () => {
  const { counter, setCounter } = useContext(ParentContext);
  return (
    <div>
      <button onClick={() => setCounter(c => c + 1)}>+</button>
      <button onClick={() => setCounter(c => c - 1)}>-</button>
      {JSON.stringify({ counter })}
    </div>
  );
};
