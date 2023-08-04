
import { positionsStore } from '../store';

const useDamageStore = () => {
  return positionsStore.getState();
};

export default useDamageStore;
