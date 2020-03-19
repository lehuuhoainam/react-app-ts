import * as React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo mr-5" to="/list">
          <img src={require('!svg-url-loader!assets/images/logo.svg')} className="mr-2" alt="logo" />
        </Link>
        <Link className="navbar-brand brand-logo-mini" to="/list">
          <img src={require('!svg-url-loader!assets/images/logo.svg')} alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="ti-view-list"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                  <i className="ti-search" />
                </span>
              </div>
              <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown mr-1">
            <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
              <i className="ti-email mx-0"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <img src={require('assets/images/faces/face4.jpg')} alt="image" className="profile-pic" />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">David Grey</h6>
                  <p className="font-weight-light small-text text-muted mb-0">The meeting is cancelled</p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <img src={require('assets/images/faces/face2.jpg')} alt="image" className="profile-pic" />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
                  <p className="font-weight-light small-text text-muted mb-0">New product launch</p>
                </div>
              </a>
              <a className="dropdown-item">
                <div className="item-thumbnail">
                  <img src={require('assets/images/faces/face3.jpg')} alt="image" className="profile-pic" />
                </div>
                <div className="item-content flex-grow">
                  <h6 className="ellipsis font-weight-normal"> Johnson</h6>
                  <p className="font-weight-light small-text text-muted mb-0">Upcoming board meeting</p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
