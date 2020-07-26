import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { _t, setLanguage } from "../../../../../shared/translation";
// import TopbarLanguage from './TopbarLanguage';
import { UserProps } from '../../../../../shared/prop-types/ReducerProps';

class Topbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
    }

    setInterval(() => {
      this.checkSession();
    }, 1000);
  }

  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
    user: UserProps.isRequired,
  };

  checkSession = () => {
    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    })
    if (window.x === "e40") {
      console.log('Token Expire');
      window.x = "";
      this.props.history.push('/login');
    }
  }
  onChangeFunc(optionSelected) {
    window.localStorage.setItem("lang", optionSelected);
    window.location.reload();
  }
  render() {
    // const { changeMobileSidebarVisibility, changeSidebarVisibility } = this.props;
   
    let lang = window.localStorage.getItem("lang");
    if (lang === undefined || lang === null || lang === "null") {
      lang = "en";
    }
    setLanguage(lang);

    return (
      <>
        <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
          <div className="navbar-wrapper">
            <div className="navbar-container content">
              <div className="navbar-collapse" id="navbar-mobile">
                <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                  <ul className="nav navbar-nav">
                    <li className="nav-item mobile-menu d-xl-none mr-auto">
                      <Link className="nav-link nav-menu-main menu-toggle hidden-xs" to="#"><i
                        className="ficon feather icon-menu"></i></Link></li>
                  </ul>
                </div>
                <ul className="nav navbar-nav float-right">


                  <li className="dropdown dropdown-user nav-item" style={{margin: "auto"}}>
                    <Link className="dropdown-toggle nav-link dropdown-user-link" to="#"  data-toggle="dropdown">
                      <div className="user-nav d-sm-flex d-none">
                          <span className="user-name text-bold-600">{lang==="en" ? "English" : "Spanish"}</span>
                      </div>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <span className="dropdown-item" onClick={this.onChangeFunc.bind(this, "en")}>{_t("English")}</span>
                      <span className="dropdown-item" onClick={this.onChangeFunc.bind(this, "sp")}>{_t("Spanish")}</span>
                    </div>
                  </li>
                  <li className="dropdown dropdown-notification nav-item">
                    <Link className="nav-link nav-link-label" to="#" data-toggle="dropdown"><i className="ficon feather icon-bell"></i><span
                      className="badge badge-pill badge-primary badge-up">5</span></Link>
                    <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                      <li className="dropdown-menu-header">
                        <div className="dropdown-header m-0 p-2">
                          <h3 className="white">5 New</h3><span className="notification-title">App
                                            Notifications</span>
                        </div>
                      </li>
                      <li className="scrollable-container media-list">
                        <Link className="d-flex justify-content-between" to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-left"><i className="feather icon-plus-square font-medium-5 primary"></i></div>
                            <div className="media-body">
                              <h6 className="primary media-heading">You have new order!</h6><small className="notification-text"> Are your going to meet me
                                                    tonight?</small>
                            </div><small>
                              <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">9 hours
                                                    ago</time></small>
                          </div>
                        </Link>
                        <Link className="d-flex justify-content-between" to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-left"><i className="feather icon-download-cloud font-medium-5 success"></i></div>
                            <div className="media-body">
                              <h6 className="success media-heading red darken-1">99% Server load</h6>
                              <small className="notification-text">You got new order of goods.</small>
                            </div><small>
                              <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">5 hour
                                                    ago</time></small>
                          </div>
                        </Link>
                        <Link className="d-flex justify-content-between" to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-left"><i className="feather icon-alert-triangle font-medium-5 danger"></i></div>
                            <div className="media-body">
                              <h6 className="danger media-heading yellow darken-3">Warning notifixation
                                                </h6><small className="notification-text">Server have 99% CPU usage.</small>
                            </div><small>
                              <time className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00">Today</time></small>
                          </div>
                        </Link>
                        <Link className="d-flex justify-content-between" to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-left"><i className="feather icon-check-circle font-medium-5 info"></i></div>
                            <div className="media-body">
                              <h6 className="info media-heading">Complete the task</h6><small className="notification-text">Cake sesame snaps cupcake</small>
                            </div><small>
                              <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">Last
                                                    week</time></small>
                          </div>
                        </Link>
                        <Link className="d-flex justify-content-between" to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-left"><i className="feather icon-file font-medium-5 warning"></i></div>
                            <div className="media-body">
                              <h6 className="warning media-heading">Generate monthly report</h6><small className="notification-text">Chocolate cake oat cake tiramisu
                                                    marzipan</small>
                            </div><small>
                              <time className="media-meta" dateTime="2015-06-11T18:29:20+08:00">Last
                                                    month</time></small>
                          </div>
                        </Link>
                      </li>
                      <li className="dropdown-menu-footer"><Link className="dropdown-item p-1 text-center" to="#">View all notifications</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown dropdown-user nav-item">
                    <Link className="dropdown-toggle nav-link dropdown-user-link" to="#" data-toggle="dropdown">
                      <div className="user-nav d-sm-flex d-none"><span className="user-name text-bold-600">iHola
                                        Daniela!</span><span className="user-status">Administrator</span></div><span><img
                        className="round" src="app-assets/images/portrait/small/avatar-s-11.jpg"
                        alt="avatar" height="40" width="40" /></span>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                      <Link className="dropdown-item" to="editprofile.html"><i className="feather icon-user"></i> EditarPerfil</Link>
                      <Link className="dropdown-item" to="usuarios.html"><i className="feather icon-mail"></i> Usuario</Link>
                      <Link className="dropdown-item" to="/"><i className="feather icon-check-square"></i> Empresa</Link>
                      <Link className="dropdown-item" to="#"><i className="feather icon-message-square"></i> Sucursales</Link>
                      <div className="dropdown-divider"></div><Link className="dropdown-item" to="#"><i
                        className="feather icon-power"></i> Cerrar sesion</Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <ul className="main-search-list-defaultlist d-none">
          <li className="d-flex align-items-center">
            <Link className="pb-25" to="#">
              <h6 className="text-primary mb-0">Files</h6>
            </Link>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between w-100" to="#">
              <div className="d-flex">
                <div className="mr-50"><img src="app-assets/images/icons/xls.png" alt="png" height="32" /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Two new item submitted</p><small className="text-muted">Marketing
                            Manager</small>
                </div>
              </div><small className="search-data-size mr-50 text-muted">&apos;17kb</small>
            </Link>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between w-100" to="#">
              <div className="d-flex">
                <div className="mr-50"><img src="app-assets/images/icons/jpg.png" alt="png" height="32" /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">52 JPG file Generated</p><small className="text-muted">FontEnd
                            Developer</small>
                </div>
              </div><small className="search-data-size mr-50 text-muted">&apos;11kb</small>
            </Link>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between w-100" to="#">
              <div className="d-flex">
                <div className="mr-50"><img src="app-assets/images/icons/pdf.png" alt="png" height="32" /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">25 PDF File Uploaded</p><small className="text-muted">Digital
                            Marketing Manager</small>
                </div>
              </div><small className="search-data-size mr-50 text-muted">&apos;150kb</small>
            </Link>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between w-100" to="#">
              <div className="d-flex">
                <div className="mr-50"><img src="app-assets/images/icons/doc.png" alt="png" height="32" /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Anna_Strong.doc</p><small className="text-muted">Web
                            Designer</small>
                </div>
              </div><small className="search-data-size mr-50 text-muted">&apos;256kb</small>
            </Link>
          </li>
          <li className="d-flex align-items-center">
            <Link className="pb-25" to="#">
              <h6 className="text-primary mb-0">Members</h6>
            </Link>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between py-50 w-100" to="#">
              <div className="d-flex align-items-center">
                <div className="avatar mr-50"><img src="app-assets/images/portrait/small/avatar-s-8.jpg" alt="png" height="32" /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">John Doe</p><small className="text-muted">UI designer</small>
                </div>
              </div>
            </Link>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between py-50 w-100" to="#">
              <div className="d-flex align-items-center">
                <div className="avatar mr-50"><img src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="png" height="32" /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Michal Clark</p><small className="text-muted">FontEnd
                            Developer</small>
                </div>
              </div>
            </Link>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between py-50 w-100" to="#">
              <div className="d-flex align-items-center">
                <div className="avatar mr-50"><img src="app-assets/images/portrait/small/avatar-s-14.jpg" alt="png" height="32" /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Milena Gibson</p><small className="text-muted">Digital Marketing
                            Manager</small>
                </div>
              </div>
            </Link>
          </li>
          <li className="auto-suggestion d-flex align-items-center cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between py-50 w-100" to="#">
              <div className="d-flex align-items-center">
                <div className="avatar mr-50"><img src="app-assets/images/portrait/small/avatar-s-6.jpg" alt="png" height="32" /></div>
                <div className="search-data">
                  <p className="search-data-title mb-0">Anna Strong</p><small className="text-muted">Web Designer</small>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="main-search-list-defaultlist-other-list d-none">
          <li className="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer">
            <Link className="d-flex align-items-center justify-content-between w-100 py-50" to="#">
              <div className="d-flex justify-content-start"><span className="mr-75 feather icon-alert-circle"></span><span>No
                        results found.</span></div>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default withRouter(Topbar);
