import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Documentacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {

    }
    render() {
        // const {  } = this.state;
        // const {  } = this.props;
        return (
            <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="header-navbar-shadow"></div>
            <div className="content-wrapper">
                <div className="content-body">
                    <div className="row mb-0">
                        <div className="col-lg-12 col-md-12 col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-end">
                                    <h2 className="mb-0"><b> Documentación </b></h2>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <hr className="m-0"/>
                                        <div className="row mb-0">
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="card mb-0">
                                                    <div className="card-header d-flex justify-content-between align-items-end">
                                                        <h5 className="mb-0"><b> SDK’s </b></h5>
                                                    </div>
                                                    <div className="card-content border border-dark rounded mt-1">
                                                        <div className="card-body mb-0">
                                                            <p><small>Para facilitar tu integración con nuestros servicios
                                                                    de LPG, hemos creado un conjunto de SDKs para los
                                                                    principales lenguajes:
                                                                </small> </p>
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3 col-sm-12 col-pad">
                                                                    <Link className="btn  btn-primary w-100" to="/phpsdk"
                                                                        role="button">PHP</Link>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3 col-sm-12 col-pad">
                                                                    <a className="btn  btn-primary w-100 font-weight-bold"
                                                                        href="/" role="button">JS
                                                                    </a>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3 col-sm-12 col-pad">
                                                                    <a className="btn  btn-primary w-100 font-weight-bold"
                                                                        href="/" role="button">Java
                                                                    </a>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3 col-sm-12 col-pad">
                                                                    <a className="btn  btn-primary w-100 font-weight-bold"
                                                                        href="/" role="button">RUBY
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-0">
                                                    <div className="card-header d-flex justify-content-between align-items-end">
                                                        <h5 className="mb-0"><b> Plugins y módulos de integración </b></h5>
                                                    </div>
                                                    <div className="card-content border border-dark rounded mt-1">
                                                        <div className="card-body mb-0">
                                                            <p><small>Tenemos los principales módulos y plugins de
                                                                    plataformas ecommerce para integrar:</small> </p>
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-lg-2 col-md-2 col-sm-12 col-pad"></div>
                                                                    <div className="col-lg-2 col-md-2 col-sm-12 col-pad">
                                                                        <a className="btn  btn-primary w-100" href="/"
                                                                            role="button">Prestshop</a>
                                                                    </div>
                                                                    <div className="col-lg-1 col-md-1 col-sm-12 col-pad"></div>
                                                                    <div className="col-lg-2 col-md-2 col-sm-12 col-pad">
                                                                        <a className="btn  btn-primary w-100 font-weight-bold"
                                                                            href="/" role="button">WooCom
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-lg-1 col-md-1 col-sm-12 col-pad"></div>
                                                                    <div className="col-lg-2 col-md-2 col-sm-12 col-pad">
                                                                        <a className="btn  btn-primary w-100 font-weight-bold"
                                                                            href="/" role="button">Magento
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-lg-2 col-md-2 col-sm-12 col-pad"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-0">
                                                    <div className="card-header d-flex justify-content-between align-items-end">
                                                        <h5 className="mb-0"><b> Llaves de prueba
                                                            </b></h5>
                                                    </div>
                                                    <div className="card-content border border-dark rounded mt-1">
                                                        <div className="card-body mb-0">
                                                            <p><small>Prueba tu integración en ambiente de testing con las
                                                                    siguientes configuraciones
                                                                </small> </p>
                                                            <h6>
                                                                API Key - Ambiente de test
                                                            </h6>
                                                            <p className="text-justify">
                                                                lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua. Ut enim ad minim veniam
                                                            </p>
                                                            <div className="col-lg-12 col-md-12 col-12">
                                                                <div className="row">
                                                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                                                        <div className="input-group">
                                                                            <input type="text"
                                                                                className="form-control input rounded-0"
                                                                                placeholder="asjbfaojscmfascaskcjasoidhfoashfh"/>
                                                                            <span className="input-group-btn">
                                                                                <button className="btn btn-default reveal"
                                                                                    type="button"><i
                                                                                        className="fa fa-eye"></i></button>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6 className="mt-1">
                                                                API Key - Ambiente de test
                                                            </h6>
                                                            <p className="text-justify">
                                                                lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua. Ut enim ad minim veniam
                                                            </p>
                                                            <div className="col-lg-12 col-md-12 col-12">
                                                                <div className="row">
                                                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                                                        <div className="input-group">
                                                                            <input type="text"
                                                                                className="form-control input rounded-0"
                                                                                placeholder="asjbfaojscmfascaskcjasoidhfoashfh"/>
                                                                            <span className="input-group-btn">
                                                                                <button className="btn btn-default reveal"
                                                                                    type="button"><i
                                                                                        className="fa fa-eye"></i></button>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-0">
                                                    <div className="card-header d-flex justify-content-between align-items-end">
                                                        <h5 className="mb-0"><b> Tarjetas de crédito para pruebas

                                                            </b></h5>
                                                    </div>
                                                    <div className="card-content border border-dark rounded mt-1">
                                                        <div className="card-body mb-0">

                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <h6>
                                                                        Tarjeta que siempre APRUEBA

                                                                    </h6>
                                                                    <p className="mb-0">Nº de tarjeta: 0000 0000 0000 0000 <i
                                                                            className="fa fa-copy text-primary fa-2x"></i>
                                                                    </p>
                                                                    <p className="mb-0">Fecha de expiración: 00/00
                                                                    </p>
                                                                    <p className="mb-0">
                                                                        CVC: 000
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <h6>
                                                                        Tarjeta que siempre APRUEBA

                                                                    </h6>
                                                                    <p className="mb-0">Nº de tarjeta: 0000 0000 0000 0000 <i
                                                                            className="fa fa-copy text-primary fa-2x"></i>
                                                                    </p>
                                                                    <p className="mb-0">Fecha de expiración: 00/00
                                                                    </p>
                                                                    <p className="mb-0">
                                                                        CVC: 000
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-0">
                                                    <div className="card-header d-flex justify-content-between align-items-end">
                                                        <h5 className="mb-0"><b> Llaves de prueba
                                                            </b></h5>
                                                    </div>
                                                    <div className="card-content border border-dark rounded mt-1">
                                                        <div className="card-body mb-0">
                                                            <p><small>Prueba tu integración en ambiente de testing con las
                                                                    siguientes configuraciones
                                                                </small> </p>
                                                            <h6>
                                                                API Key - Ambiente de test
                                                            </h6>
                                                            <p className="text-justify">
                                                                lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua. Ut enim ad minim veniam
                                                            </p>
                                                            <div className="col-lg-12 col-md-12 col-12">
                                                                <div className="row">
                                                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                                                        <div className="input-group">
                                                                            <input type="text"
                                                                                className="form-control input rounded-0"
                                                                                placeholder="asjbfaojscmfascaskcjasoidhfoashfh"/>
                                                                            <span className="input-group-btn">
                                                                                <button className="btn btn-default reveal"
                                                                                    type="button"><i
                                                                                        className="fa fa-eye"></i></button>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h6 className="mt-1">
                                                                API Key - Ambiente de test
                                                            </h6>
                                                            <p className="text-justify">
                                                                lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                                                aliqua. Ut enim ad minim veniam
                                                            </p>
                                                            <div className="col-lg-12 col-md-12 col-12">
                                                                <div className="row">
                                                                    <div className="col-lg-8 col-md-8 col-sm-12">
                                                                        <div className="input-group">
                                                                            <input type="text"
                                                                                className="form-control input rounded-0"
                                                                                placeholder="asjbfaojscmfascaskcjasoidhfoashfh"/>
                                                                            <span className="input-group-btn">
                                                                                <button className="btn btn-default reveal"
                                                                                    type="button"><i
                                                                                        className="fa fa-eye"></i></button>
                                                                            </span>
                                                                        </div>
                                                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        )
    }
};

export default (withRouter(Documentacion));