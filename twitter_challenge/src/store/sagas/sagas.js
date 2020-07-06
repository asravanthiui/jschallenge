import { takeLatest, call, put } from "redux-saga/effects";

import { latestTweetsOne } from '../../store/mockData/data1';
import { latestTweetsTwo } from '../../store/mockData/data2';
import * as allConsts from '../consts';

export function* watcherSaga() {
  yield takeLatest(allConsts.API_CALL_REQUEST_USER_ONE, workerSaga);
  yield takeLatest(allConsts.API_CALL_REQUEST_USER_TWO, workerSagaTwo);
}

function fetchDataOne() {
  return latestTweetsOne;
}

function fetchDataTwo() {
  return latestTweetsTwo;
}

function* workerSaga() {
  try {
    const payload = yield call(fetchDataOne);
    yield put({ type: allConsts.TWEETS_USER_ONE, payload });
  
  } catch (error) {
    yield put({ type: allConsts.API_CALL_FAILURE, error });
  }
}

function* workerSagaTwo() {
  try {
    const payload = yield call(fetchDataTwo);
    yield put({ type: allConsts.TWEETS_USER_TWO, payload });
  
  } catch (error) {
    yield put({ type: allConsts.API_CALL_FAILURE, error });
  }
}
