import { all, call, spawn } from 'redux-saga/effects';
import { toDosSaga } from './toDosSaga';

export function* rootSaga() {
  const sagas = [toDosSaga] as const;

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
