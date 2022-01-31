import { store } from './store';
import componentsContainer from './context/componentsContainer';

export const api = {
  store,
  componentsContainer,
} as const;
