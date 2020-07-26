import React from 'react';
// import Scrollbar from 'react-smooth-scrollbar';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import SidebarContent from './SidebarContent';
// import { SidebarProps } from '../../../../../shared/prop-types/ReducerProps';
import { Link } from 'react-router-dom';
import { _t, setLanguage } from '../../../../../shared/translation';
import { withRouter } from 'react-router';
const logo = `${process.env.PUBLIC_URL}/app-assets/images/logo/logo.svg`;

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {

    }
    render() {
   

    let lang = window.localStorage.getItem("lang");
    if (lang === undefined || lang === null || lang === "null") {
        lang = "en";
    }
    setLanguage(lang);

    return (
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item mr-auto">
                        <Link className="navbar-brand text-center" to="#">
                            <img src={logo} className="img-fluid" alt="ALPS" width="60%" />
                        </Link>
                    </li>
                    <li className="nav-item nav-toggle"><Link className="nav-link modern-nav-toggle pr-0" data-toggle="collapse" to="#"><i
                        className="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i
                            className="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary"
                            data-ticon="icon-disc"></i></Link></li>
                </ul>
            </div>
            <div className="shadow-bottom"></div>
            <div className="main-menu-content">
                <ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
                    <li className="nav-item active"><Link to="/"><i className="feather icon-home"></i><span className="menu-title"
                        data-i18n="Dashboard">{_t("Start")}</span></Link>
                        <li className=" nav-item"><Link to="/dashboard"><i className="feather icon-settings"></i><span className="menu-title"
                            data-i18n="Email">{_t("Set up your account")}</span></Link>
                        </li>
                        <li class=" nav-item"><a href="/"><i class="fa fa-credit-card"></i><span
                            class="menu-title">{_t("Payments")}</span></a>
                            <ul class="menu-content">
                                <li><Link to="/transacciones"><i class="feather icon-circle"></i><span
                                    class="menu-item">{_t("Transactions")}</span></Link>
                                </li>
                                <li><Link to="/suscripciones"><i class="feather icon-circle"></i><span
                                    class="menu-item">{_t("Subscriptions")}</span></Link>
                                </li>
                                <li><Link to="/reembolsos"><i class="feather icon-circle"></i><span
                                    class="menu-item">{_t("Refunds")}</span></Link>
                                </li>
                                <li><a href="/"><i class="feather icon-circle"></i><span class="menu-item">{_t("Fertilizers")}</span></a>
                                </li>
                                <li><Link to="/cobros"><i class="feather icon-circle"></i><span
                                    class="menu-item">{_t("Collections")}</span></Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link to="#"><i className="feather icon-list"></i><span className="menu-title"
                        >{_t("Billing")}</span></Link>
                            <ul className="menu-content">
                                <li><Link to="/factura"><i className="feather icon-circle"></i><span className="menu-item"
                                >{_t("Invoices")}</span></Link>
                                </li>
                                <li><Link to="/liquidacion"><i className="feather icon-circle"></i><span className="menu-item"
                                >{_t("Transaction Settlement")}</span></Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item"><Link to="#"><i className="fa fa-cogs"></i><span className="menu-title"
                        >{_t("Setting")}</span></Link>
                        </li>
                        <li className=" nav-item"><Link to="#"><i className="feather icon-code"></i><span className="menu-title"
                        >{_t("Developers")}</span></Link>
                            <ul className="menu-content">
                                <li><Link to="/documentacion"><i className="feather icon-circle"></i><span className="menu-item"
                                >{_t("Documentation")}</span></Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" nav-item"><Link to="#"><i className="fa fa-key"></i><span className="menu-title"
                        >{_t("Test keys")}</span></Link>
                        </li>
                        <li className=" nav-item"><Link to="#"><i className="fa fa-credit-card"></i><span className="menu-title"
                        >{_t("State")}</span></Link>
                            <ul className="menu-content">
                                <li><Link to="/estado"><i className="feather icon-circle"></i><span className="menu-item"
                                >{_t("Payment status")} 1</span></Link>
                                </li>
                                <li><Link to="/estado"><i className="feather icon-circle"></i><span className="menu-item"
                                >{_t("Payment status")} 2</span></Link>
                                </li>
                            </ul>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    );
}}

// Sidebar.propTypes = {
//     sidebar: SidebarProps.isRequired,
//     changeToDark: PropTypes.func.isRequired,
//     changeToLight: PropTypes.func.isRequired,
//     changeMobileSidebarVisibility: PropTypes.func.isRequired,
// };
export default (withRouter(Sidebar));
