import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Phpsdk extends React.Component {
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
                                        <h2 className="mb-0"><b> Documentación | <span className="color1"> php SDK </span></b></h2>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <hr className="m-0"/>
                                            <div className="row mb-0">
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="card mb-0">
                                                        <div className="card-header d-flex justify-content-between align-items-end">
                                                            <h5 className="mb-0"><b> Latam Payment Group SDK para php </b></h5>
                                                        </div>
                                                        <div className="card-content border border-dark rounded mt-1">
                                                            <div className="card-body mb-0">
                                                                <p><small>Esta librería ofrece un conjunto de métodos y clases
                                                                        para facilitar la integración de tu plataforma con LPG
                                                                    </small> </p>
                                                                <p className="text-justify"><small>lorem ipsum dolor sit amet,
                                                                        consectetur adipisicing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                                        minim veniam, quis
                                                                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                                        ea commodo consequat. Duis aute irure dolor in
                                                                        reprehenderit in voluptate velit esse cillum dolore eu
                                                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                                        non proident, sunt in culpa qui officia deserunt mollit
                                                                        anim id est laborum
                                                                    </small> </p>
                                                                <h6>
                                                                    Versiones soportadas
                                                                </h6>
                                                                <p><small>Nuestro SDK es compatible con PHP versión 5.6 o
                                                                        posterior. Se recomienda trabajar con PHP 7.1 en
                                                                        adelante
                                                                    </small> </p>
                                                                <p className="text-justify"><small>lorem ipsum dolor sit amet,
                                                                        consectetur adipisicing elit, sed do eiusmod tempor
                                                                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                                        minim veniam, quis
                                                                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                                        ea commodo consequat. Duis aute irure dolor in
                                                                        reprehenderit in voluptate velit esse cillum dolore eu
                                                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                                                        non proident, sunt in culpa qui officia deserunt mollit
                                                                        anim id est laborum
                                                                    </small> </p>
                                                                <h6>
                                                                    Instalación
                                                                </h6>
                                                                <p><small>Recomendamos instalar ocupando <span>
                                                                    <a href="/">Composer </a></span></small></p>
                                                                <div className="row">
                                                                    <div className="col-md-1 pr-0">
                                                                    </div>
                                                                    <div className="col-md-7 pl-0">

                                                                    </div>
                                                                    <div className="col-md-2"></div>
                                                                </div>
                                                                <div className="d-inline"> <i
                                                                        className="feather icon-code fa-2x color1"></i>
                                                                </div>
                                                                <div className="d-inline">
                                                                    <h6 className="border btn round mb-1 border-primary p-1">
                                                                        composer require "mercadopago/dx-php:dev-master"
                                                                    </h6>
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

export default (withRouter(Phpsdk));