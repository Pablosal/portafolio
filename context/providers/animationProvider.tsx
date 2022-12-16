import * as React from 'react';
import AnimationContext from '../contexts/animationContext';
import animationReducer from '../reducers/animationReducer';
import { actions } from '../types';

const AnimationProvider = ({ children }: React.PropsWithChildren) => {
  const initialState = {
    pauseAnimations: false,
  };
  const [dispatch] = React.useReducer(animationReducer, initialState);

  function toggleAnimations() {
    return dispatch({ type: actions.animationActions.TOGGLE_ANIMATIONS });
  }
  return (
    <AnimationContext.Provider value={{ initialState, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
