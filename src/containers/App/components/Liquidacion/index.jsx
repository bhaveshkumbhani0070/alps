import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Liquidacion extends React.Component {
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
                                                    <h2 className="mb-0"><b>liquidacion de Transacciones
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
                                            <hr className="m-0" />
                                            <div className="row mb-0">
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="card mb-0">
                                                        <div className="card-content  mt-1">
                                                            <div className="card-body mb-0">
                                                                <div className="col-lg-12 col-md-12 col-12">
                                                                    <div className="row">
                                                                        <div
                                                                            className="col-lg-3 col-md-6 col-sm-12 pl-0 pr-0 text-center">
                                                                            <div className="d-inline">
                                                                                <b> ID Transacciones:</b>
                                                                            </div>
                                                                            <div className="d-inline">

                                                                                <button
                                                                                    className="btn btn-outline-primary h-card2 irounded c-pad mb-1">
                                                                                    <small>10871915</small></button>
                                                                            </div>

                                                                        </div>
                                                                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                                                                            <div className="d-inline">
                                                                                <b> ID Comercio:</b>
                                                                            </div>
                                                                            <div className="d-inline">
                                                                                <button
                                                                                    className="btn btn-outline-primary h-card2 irounded c-pad mb-1">
                                                                                    <small>293834283</small></button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="row">
                                                                                <div className="col-md-6 col-12">
                                                                                    <fieldset
                                                                                        className="form-group position-relative has-icon-left">
                                                                                        <input type='text'
                                                                                            className="form-control pickadate irounded h-card2"
                                                                                            placeholder="Desde" />
                                                                                        <div className="form-control-position">
                                                                                            <i
                                                                                                className="feather icon-calendar text-primary"></i>
                                                                                        </div>
                                                                                    </fieldset>
                                                                                </div>
                                                                                <div className="col-md-6 col-12">
                                                                                    <fieldset
                                                                                        className="form-group position-relative has-icon-left">
                                                                                        <input type='text'
                                                                                            className="form-control pickadate irounded h-card2"
                                                                                            placeholder="Hasta" />
                                                                                        <div className="form-control-position">
                                                                                            <i
                                                                                                className="feather icon-calendar text-primary"></i>
                                                                                        </div>
                                                                                    </fieldset>
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
                                                                                <th>Fecha de abono </th>
                                                                                <th>ID comercio</th>
                                                                                <th>Monto Neto</th>
                                                                                <th>Comisión</th>
                                                                                <th>IVA</th>
                                                                                <th>Monto Bruto</th>
                                                                                <th>MoAccionesnto</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>$125.000</td>
                                                                                <td>$2.932</td>
                                                                                <td>$920.1</td>
                                                                                <td>125.000</td>
                                                                                <td><a href="/">Ver PDF Excel</a> </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>$125.000</td>
                                                                                <td>$2.932</td>
                                                                                <td>$920.1</td>
                                                                                <td>125.000</td>
                                                                                <td><a href="/">Ver PDF Excel</a> </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>$125.000</td>
                                                                                <td>$2.932</td>
                                                                                <td>$920.1</td>
                                                                                <td>125.000</td>
                                                                                <td><a href="/">Ver PDF Excel</a> </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>$125.000</td>
                                                                                <td>$2.932</td>
                                                                                <td>$920.1</td>
                                                                                <td>125.000</td>
                                                                                <td><a href="/">Ver PDF Excel</a> </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>$125.000</td>
                                                                                <td>$2.932</td>
                                                                                <td>$920.1</td>
                                                                                <td>125.000</td>
                                                                                <td><a href="/">Ver PDF Excel</a> </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>22-08-2019</td>
                                                                                <td>293834283</td>
                                                                                <td>$125.000</td>
                                                                                <td>$2.932</td>
                                                                                <td>$920.1</td>
                                                                                <td>125.000</td>
                                                                                <td><a href="/">Ver PDF Excel</a> </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <button className="btn btn-outline-danger rounded bl br">Exportar a
                                                                    PDF</button>
                                                                <button className="btn btn-outline-success rounded bl br">Exportar a
                                                                    Excel</button>
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

export default (withRouter(Liquidacion));