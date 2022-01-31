import { ISagaModule } from 'redux-dynamic-modules-saga';
import defaultTodosSlice from './defaultTodosSlice';
import { ITodosModule } from './ITodosModule';
import { defaultTodosSaga } from './sagas';

export function getDefaultTodosModule(): ISagaModule<ITodosModule> {
  return {
    id: 'todos',
    reducerMap: {
      todos: defaultTodosSlice,
    },
    sagas: [defaultTodosSaga],
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: [],
    retained: false,
  };
}
