import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  FETCHING_USER,
  FETCHING_USER_FAILURE,
  FETCHING_USER_SUCCESS
} from "./constants";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import { getData, getUser } from "../api/api";

function* fetchData(action) {
  console.log("Saga Data Action ", action);
  try {
    const data = yield getData();
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

function* fetchUser(action) {
  console.log("Saga User Action ", action);
  try {
    const data = yield getUser();
    yield put({ type: FETCHING_USER_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_USER_FAILURE });
  }
}

function* dataSaga() {
  console.log("Called Data Saga");
  yield takeLatest(FETCHING_DATA, fetchData);
  yield takeLatest(FETCHING_USER, fetchUser);
}

export default dataSaga;
