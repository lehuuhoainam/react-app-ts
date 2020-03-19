/*
 *
 * ListUser
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectListUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getUserListAction } from './actions';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const stateSelector = createStructuredSelector({
  listUser: makeSelectListUser(),
});

interface Props {}

function ListUser(props: Props) {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'listUser', reducer: reducer } as any);
  useInjectSaga({ key: 'listUser', saga: saga } as any);

  const { listUser } = useSelector(stateSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserListAction());
  }, []);
  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <Header />
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title" />
                    <p className="card-description" />
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                          </tr>
                        </thead>
                        <tbody>
                          {listUser.data.map((item, index) => (
                            <tr key={index}>
                              <td className="py-1">
                                <img src={item.avatar} alt="image" />
                              </td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.phone}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ListUser;
