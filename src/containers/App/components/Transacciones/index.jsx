import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Transacciones extends React.Component {
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
                                                    <h3 className="mb-0"><b>Transacciones</b></h3>
                                                </div>
                                                <div className="col-md-3"></div>
                                                <div className="col-md-3">

                                                    <fieldset className="form-group position-relative has-icon-left ">
                                                        <input type='text' className="form-control pickadate irounded h-card2" placeholder="Desde" />
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
                                                                            <div className="col-lg-2 col-md-3 col-sm-12 pl-0 pr-0 text-center mb-1">
                                                                                <div className="btn-group">
                                                                                    <button type="button" className="btn btn-outline-primary c-pad h-card2 bl">ID Local</button>
                                                                                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br" data-toggle="dropdown">
                                                                                    </button>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="/">Fecha registro</a>
                                                                                        <a className="dropdown-item" href="/">Fecha registro</a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div className="col-lg-2 col-md-3 col-sm-12 text-center mb-1">
                                                                                <div className="btn-group">
                                                                                    <button type="button" className="btn btn-outline-primary c-pad h-card2 bl">Local</button>
                                                                                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br" data-toggle="dropdown">
                                                                                    </button>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="/">Fecha registro</a>
                                                                                        <a className="dropdown-item" href="/">Fecha registro</a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div className="col-lg-3 col-md-3 col-sm-12 text-center mb-1">
                                                                                <div className="btn-group">
                                                                                    <button type="button" className="btn btn-outline-primary c-pad h-card2 bl">Tipo Cuota</button>
                                                                                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br" data-toggle="dropdown">
                                                                                    </button>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="/">Fecha registro</a>
                                                                                        <a className="dropdown-item" href="/">Fecha registro</a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div className="col-lg-3 col-md-3 col-sm-12 text-center mb-1">
                                                                                <div className="btn-group">
                                                                                    <button type="button" className="btn btn-outline-primary c-pad h-card2 bl">Cod. Autorización</button>
                                                                                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split c-pad h-card2 br" data-toggle="dropdown">
                                                                                    </button>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="/">Fecha registro</a>
                                                                                        <a className="dropdown-item" href="/">Fecha registro</a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            <div className="col-lg-2 col-md-6 col-sm-12 text-center">

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="table-responsive">
                                                                        <table className="table zero-configuration border border-muted rounded">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Fecha Transacción</th>
                                                                                    <th>Fecha Abono</th>
                                                                                    <th>ID Local</th>
                                                                                    <th>Local</th>
                                                                                    <th>Tipo Tarjeta</th>
                                                                                    <th>Venta neta afecta</th>
                                                                                    <th>Tipo cuota</th>
                                                                                    <th>Nº Cuotas</th>
                                                                                    <th>Cod. Autorización</th>
                                                                                    <th>Monto Transacción</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>01-01-20</td>
                                                                                    <td>03-01-20</td>
                                                                                    <td>78612984198</td>
                                                                                    <td>SUCURSAL 01 </td>
                                                                                    <td>DÉBITO</td>
                                                                                    <td>$16.980</td>
                                                                                    <td>Comercio</td>
                                                                                    <td>S/C</td>
                                                                                    <td>2193123</td>
                                                                                    <td>$16.980</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>01-01-20</td>
                                                                                    <td>03-01-20</td>
                                                                                    <td>78612984198</td>
                                                                                    <td>SUCURSAL 01 </td>
                                                                                    <td>DÉBITO</td>
                                                                                    <td>$16.980</td>
                                                                                    <td>Comercio</td>
                                                                                    <td>S/C</td>
                                                                                    <td>2193123</td>
                                                                                    <td>$16.980</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>01-01-20</td>
                                                                                    <td>03-01-20</td>
                                                                                    <td>78612984198</td>
                                                                                    <td>SUCURSAL 01 </td>
                                                                                    <td>DÉBITO</td>
                                                                                    <td>$16.980</td>
                                                                                    <td>Comercio</td>
                                                                                    <td>S/C</td>
                                                                                    <td>2193123</td>
                                                                                    <td>$16.980</td>
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
            </div >
            
        )
    }
};

export default (withRouter(Transacciones));