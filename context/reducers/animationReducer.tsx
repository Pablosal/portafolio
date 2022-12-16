import { actions } from '../types';

function animationReducer(state: any, action: string) {
  switch (action) {
    case actions.animationActions.TOGGLE_ANIMATIONS:
      return {
        pauseAnimations: !state.pauseAnimations,
      };

    default:
      return state;
  }
}

export default animationReducer;
