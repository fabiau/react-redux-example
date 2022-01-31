import { ISagaModule } from 'redux-dynamic-modules-saga';
import defaultTodosSlice from '../../../modules/todos/default/defaultTodosSlice';
import { ITodosState } from '../../../modules/todos/default/ITodosState';
import { crazyTodosSaga } from './sagas';

export interface ICrazyTodosModule {
  todos: ITodosState;
}

export function getCrazyTodosModule(): ISagaModule<ICrazyTodosModule> {
  return {
    id: 'todos',
    reducerMap: {
      todos: defaultTodosSlice,
    },
    sagas: [crazyTodosSaga],
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: [],
    retained: false,
  };
}
