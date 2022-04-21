import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from './reducers';
import * as ACTIONS from './actions';
const HooksContainer = () => {
  const [stateValue, setValue] = useState(0);
  const [useEffectValue, setUseEffectValue] = useState(null);
  const [state, dispatch] = useReducer(
    Reducer.HooksReducer,
    Reducer.initialState
  );

  useEffect(() => {
    setTimeout(() => setUseEffectValue('useeffect worked'), 3000);
  }, [stateValue]);
  const incrementValue = () => {
    setValue(stateValue + 1);
  };
  const decremebtValue = () => {
    setValue(stateValue - 1);
  };

  const changeUseEffectValue = () => {
    setUseEffectValue('Some string');
  };

  const handleDispatchHooksTrue = () => {
    dispatch(ACTIONS.success());
  };

  const handleDispatchHooksFalse = () => {
    dispatch(ACTIONS.failure());
  };
  return (
    <>
      <div>HooksContainer</div>
      <br />
      <button onClick={() => incrementValue()}>Increment</button>
      <button onClick={() => decremebtValue()}>Decrement</button>
      <br />
      <button onClick={() => changeUseEffectValue()}>
        Change use effect value
      </button>
      <br />
      <button onClick={() => handleDispatchHooksTrue()}>
        Handle dispatch Hooks true
      </button>
      <button onClick={() => handleDispatchHooksFalse()}>
        Handle dispatch Hooks false
      </button>
      <br />
      <div>
        <p>{useEffectValue ? <p>{useEffectValue}</p> : <p>Loading...</p>}</p>

        <h5>
          {JSON.stringify(state.stateprop1, null, 4)}
          {state.stateprop1 ? (
            <p>state prop 1 is true</p>
          ) : (
            <p>state prop is false</p>
          )}
        </h5>
        <p>local state: {stateValue}</p>
      </div>
    </>
  );
};

export default HooksContainer;
