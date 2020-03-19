import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginError } from 'containers/Login/actions';
import ActionTypes from 'containers/Login/constants';
import request from 'utils/request';
import { loginApi } from 'utils/apiUrl';

/**
 * Github repos request/response handler
 */
export function* login({ payload }: any) {
  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, loginApi, 'post', { username: payload.username, password: payload.password });
    localStorage.setItem('token', res.data.token);
    yield put(loginSuccess(res.data.token));
  } catch (err) {
    alert('Error');
    yield put(loginError());
  }
}

// Individual exports for testing
export default function* loginSaga() {
  yield takeLatest(ActionTypes.LOGIN_ACTION, login);
}
