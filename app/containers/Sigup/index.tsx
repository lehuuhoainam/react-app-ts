/*
 *
 * Sigup
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSigup from './selectors';
import reducer from './reducer';
import saga from './saga';

const stateSelector = createStructuredSelector({
  sigup: makeSelectSigup(),
});

interface Props {}

function Sigup(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'sigup', reducer: reducer } as any);
  useInjectSaga({ key: 'sigup', saga: saga } as any);

  const { sigup } = useSelector(stateSelector);
  const dispatch = useDispatch();
  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require('!svg-url-loader!assets/images/logo.svg')} alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form className="pt-3">
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                  <select className="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/login">
                    SIGN UP
                  </Link>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sigup;
