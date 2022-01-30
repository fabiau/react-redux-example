import { all, call, spawn } from 'redux-saga/effects';
import { todosSaga } from './todosSaga';

export function* rootSaga() {
  const sagas = [todosSaga] as const;

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
