import { createContext } from 'react';

const AnimationContext = createContext<AppContextInterface | null>({
  initialState: { pauseAnimations: false },
  toggleAnimations: () => '',
});
interface AppContextInterface {
  initialState: { pauseAnimations: boolean };
  toggleAnimations: () => void;
}

export default AnimationContext;
