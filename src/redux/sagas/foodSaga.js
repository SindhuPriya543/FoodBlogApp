import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFoods() {
  try {
    const response = yield call(axios.get, 'http://localhost:5000/foods');
    yield put({ type: 'FETCH_FOODS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_FOODS_FAILURE', payload: error.message });
  }
}

function* fetchFoodDetail(action) {
  try {
    const response = yield call(axios.get,`http://localhost:5000/foods/${action.payload}` );
    yield put({ type: 'FETCH_FOOD_DETAIL_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_FOOD_DETAIL_FAILURE', payload: error.message });
  }
}

function* foodSaga() {
  yield takeEvery('FETCH_FOODS_REQUEST', fetchFoods);
  yield takeEvery('FETCH_FOOD_DETAIL_REQUEST', fetchFoodDetail);
}

export default foodSaga;