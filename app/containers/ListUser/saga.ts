import { call, put, takeLatest } from 'redux-saga/effects';
import { getUserListSuccess, getUserListError } from 'containers/ListUser/actions';
import ActionTypes from 'containers/ListUser/constants';
import request from 'utils/request';
import { usersApi } from 'utils/apiUrl';

/**
 * Github repos request/response handler
 */
export function* getUserList() {
  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, usersApi, 'get');
    yield put(getUserListSuccess(res.data));
  } catch (err) {
    alert('Error');
    yield put(getUserListError());
  }
}

// Individual exports for testing
export default function* getUserListSaga() {
  yield takeLatest(ActionTypes.GET_USER_LIST_ACTION, getUserList);
}
