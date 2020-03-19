/*
 *
 * Login
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loginAction } from './actions';
import history from 'utils/history';
import axios from 'axios';

const stateSelector = createStructuredSelector({
  login: makeSelectLogin(),
});

interface Props {}

function Login(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'login', reducer: reducer } as any);
  useInjectSaga({ key: 'login', saga: saga } as any);

  const { login } = useSelector(stateSelector);

  if (login.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${login.token}`;
    history.push('/list');
  }

  const dispatch = useDispatch();

  let username = '';
  let password = '';
  const onSubmitForm = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    if (!username && !password) {
      return;
    }
    dispatch(loginAction(username, password));
  };
  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require('!svg-url-loader!assets/images/logo.svg')} alt="logo" />
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3" onSubmit={onSubmitForm}>
                  <div className="form-group">
                    <input className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" onChange={e => (username = e.target.value)} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" onChange={e => (password = e.target.value)} />
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                      SIGN IN
                    </button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label>
                        <input type="checkbox" />
                        Keep me signed in
                      </label>
                    </div>
                    <Link to="/forgot" className="auth-link text-black">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="ti-facebook mr-2" />
                      Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account?{' '}
                    <Link to="/sigup" className="text-primary">
                      Create
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
