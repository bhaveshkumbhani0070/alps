import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Suscripciones extends React.Component {
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
                                    <div className="card-header">
                                        <h4 className="m-1"> <b> Suscripciones</b>
                                        </h4>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body pt-0">
                                            <hr className="mt-0" />
                                            <div className="col-lg-12 col-md-12 col-12 mt-2">
                                                <div className="row text-center">
                                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                                        <div className="form-row">
                                                            <div className="col-md-4">
                                                                <b>ID del plan::</b>
                                                            </div>
                                                            <div className="col-md-8 mb-1">
                                                                <div className="btn-group btn-group-justified">
                                                                    <div className="btn-group">
                                                                        <button type="button" className="btn btn-outline-primary c-pad h-card2 bl">10871915</button>
                                                                    </div>
                                                                    <div className="btn-group">
                                                                        <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br" data-toggle="dropdown">
                                                                        </button>
                                                                        <div className="dropdown-menu">
                                                                            <a className="dropdown-item" href="#">10871915</a>
                                                                            <a className="dropdown-item" href="#">10871915</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                                        <div className="form-row">
                                                            <div className="col-md-2 pr-0">
                                                                <b> Fetcha:</b>
                                                            </div>
                                                            <div className="col-md-5 pl-0 mb-1">
                                                                <input type='date' className="form-control h-card2 irounded"
                                                                    placeholder="Desde" />
                                                            </div>
                                                            <div className="col-md-5 mb-1">
                                                                <input type='date' className="form-control h-card2 irounded" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="table-responsive mt-2">
                                                <table className="table zero-configuration">
                                                    <thead>
                                                        <tr>
                                                            <th>ID del plan </th>
                                                            <th>Nombre suscripción </th>
                                                            <th>Moneda</th>
                                                            <th>Monto</th>
                                                            <th>Estado</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>A</td>
                                                            <td>Vinos estándar 3 vinos</td>
                                                            <td>$11.980</td>
                                                            <td>CLP</td>
                                                            <td>Activo</td>
                                                        </tr>
                                                        <tr>
                                                            <td>B</td>
                                                            <td>Vinos estándar 3 vinos</td>
                                                            <td>$11.980</td>
                                                            <td>CLP</td>
                                                            <td>Activo</td>
                                                        </tr>
                                                        <tr>
                                                            <td>C</td>
                                                            <td>Vinos estándar 3 vinos</td>
                                                            <td>$11.980</td>
                                                            <td>CLP</td>
                                                            <td>Activo</td>
                                                        </tr>
                                                        <tr>
                                                            <td>C</td>
                                                            <td>Vinos estándar 3 vinos</td>
                                                            <td>$11.980</td>
                                                            <td>CLP</td>
                                                            <td>Activo</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a href="createsuscripciones.html" className="btn btn-outline-primary h-card4 irounded">Crear suscripción</a>
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

export default (withRouter(Suscripciones));