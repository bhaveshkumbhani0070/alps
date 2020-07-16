import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Estado extends React.Component {
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
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="row mb-0">
                                                <div className="col-md-6">
                                                    <h2 className="mb-0"><b>Estado de Pago
                                                        </b>
                                                    </h2>
                                                </div>
                                                <div className="col-md-3"></div>
                                                <div className="col-md-3">

                                                    <fieldset className="form-group position-relative has-icon-left ">
                                                        <input type='text' className="form-control pickadate irounded h-card2"
                                                            placeholder="Desde" />
                                                        <div className="form-control-position">
                                                            <i className="feather icon-calendar text-primary"></i>
                                                        </div>
                                                    </fieldset>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body pt-0">
                                            <hr className="m-0"/>
                                            <div className="row mb-0">
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="card mb-0">
                                                        <div className="card-content  mt-1">
                                                            <div className="card-body mb-0">
                                                                <div className="col-lg-12 col-md-12 col-12">
                                                                    <div className="row">
                                                                        <div className="col-md-3">
                                                                            <div className="btn-group btn-group-justified">
                                                                                <div className="btn-group">
                                                                                    <button type="button"
                                                                                        className="btn btn-outline-primary c-pad h-card2 bl">ID
                                                                                        Transacción</button>
                                                                                </div>
                                                                                <div className="btn-group">
                                                                                    <button type="button"
                                                                                        className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br"
                                                                                        data-toggle="dropdown">
                                                                                    </button>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#">ID
                                                                                            Transacción</a>
                                                                                        <a className="dropdown-item" href="#">ID
                                                                                            Transacción</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <div className="btn-group btn-group-justified">
                                                                                <div className="btn-group">
                                                                                    <button type="button"
                                                                                        className="btn btn-outline-primary c-pad h-card2 bl">Usuario</button>
                                                                                </div>
                                                                                <div className="btn-group">
                                                                                    <button type="button"
                                                                                        className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br"
                                                                                        data-toggle="dropdown">
                                                                                    </button>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item"
                                                                                            href="#">Usuario</a>
                                                                                        <a className="dropdown-item"
                                                                                            href="#">Usuario</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <div className="btn-group btn-group-justified">
                                                                                <div className="btn-group">
                                                                                    <button type="button"
                                                                                        className="btn btn-outline-primary c-pad h-card2 bl">Tipo
                                                                                        de tarjeta</button>
                                                                                </div>
                                                                                <div className="btn-group">
                                                                                    <button type="button"
                                                                                        className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br"
                                                                                        data-toggle="dropdown">
                                                                                    </button>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#">Tipo
                                                                                            de tarjeta</a>
                                                                                        <a className="dropdown-item" href="#">Tipo
                                                                                            de tarjeta</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-3">
                                                                            <div className="btn-group btn-group-justified">
                                                                                <div className="btn-group">
                                                                                    <button type="button"
                                                                                        className="btn btn-outline-primary c-pad h-card2 bl">Estado</button>
                                                                                </div>
                                                                                <div className="btn-group">
                                                                                    <button type="button"
                                                                                        className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br"
                                                                                        data-toggle="dropdown">
                                                                                    </button>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item"
                                                                                            href="#">Estado</a>
                                                                                        <a className="dropdown-item"
                                                                                            href="#">Estado</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="table-responsive">
                                                                    <table
                                                                        className="table zero-configuration border border-muted rounded">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>Emitida el</th>
                                                                                <th>ID Transacción</th>
                                                                                <th>Usuario</th>
                                                                                <th>Tipo de Tarjeta</th>
                                                                                <th>Monto total</th>
                                                                                <th>Estado</th>
                                                                                <th>Acción</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>ejemplo@ejemplo.cl</td>
                                                                                <td>Mastercard </td>
                                                                                <td>$16.980
                                                                                </td>
                                                                                <td>Aceptado
                                                                                </td>
                                                                                <td><a href=""> Ver detalles <i
                                                                                            className="feather icon-eye"></i></a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>ejemplo@ejemplo.cl</td>
                                                                                <td>Mastercard </td>
                                                                                <td>$16.980
                                                                                </td>
                                                                                <td>Aceptado
                                                                                </td>
                                                                                <td><a href=""> Ver detalles <i
                                                                                            className="feather icon-eye"></i></a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>ejemplo@ejemplo.cl</td>
                                                                                <td>Mastercard </td>
                                                                                <td>$16.980
                                                                                </td>
                                                                                <td>Aceptado
                                                                                </td>
                                                                                <td><a href=""> Ver detalles <i
                                                                                            className="feather icon-eye"></i></a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>ejemplo@ejemplo.cl</td>
                                                                                <td>Mastercard </td>
                                                                                <td>$16.980
                                                                                </td>
                                                                                <td>Aceptado
                                                                                </td>
                                                                                <td><a href=""> Ver detalles <i
                                                                                            className="feather icon-eye"></i></a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>ejemplo@ejemplo.cl</td>
                                                                                <td>Mastercard </td>
                                                                                <td>$16.980
                                                                                </td>
                                                                                <td>Aceptado
                                                                                </td>
                                                                                <td><a href=""> Ver detalles <i
                                                                                            className="feather icon-eye"></i></a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>ejemplo@ejemplo.cl</td>
                                                                                <td>Mastercard </td>
                                                                                <td>$16.980
                                                                                </td>
                                                                                <td>Aceptado
                                                                                </td>
                                                                                <td><a href=""> Ver detalles <i
                                                                                            className="feather icon-eye"></i></a>
                                                                                </td>
                                                                            </tr>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
};

export default (withRouter(Estado));