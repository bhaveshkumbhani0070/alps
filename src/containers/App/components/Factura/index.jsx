import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Factura extends React.Component {
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
                                        <h2 className="mb-0">Factura | <b className="color1"> Mis facturas de comisiones </b></h2>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <hr className="m-0" />
                                            <div className="row mb-0">
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="card mb-0">
                                                        <div className="card-content  mt-1">
                                                            <div className="card-body mb-0">
                                                                <div className="col-lg-12 col-md-12 col-12">
                                                                    <div className="row">
                                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                                        </div>
                                                                        <div className="col-lg-1 col-md-6 col-sm-12">
                                                                            <b className="align-middle"> Fecha: </b>
                                                                        </div>
                                                                        <div className="col-lg-8 col-md-6 col-sm-12">
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
                                                                                <th>Nombre producto</th>
                                                                                <th>Fecha</th>
                                                                                <th>URL pública</th>
                                                                                <th>Moneda</th>
                                                                                <th>Monto</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Producto 1</td>
                                                                                <td>01-01-2020</td>
                                                                                <td>https://lapaymentgroup.com/pro</td>
                                                                                <td>Peso Chileno (CLP) </td>
                                                                                <td>$11.990
                                                                        </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Producto 2</td>
                                                                                <td>01-01-2020</td>
                                                                                <td>https://lapaymentgroup.com/pro</td>
                                                                                <td>Peso Chileno (CLP) </td>
                                                                                <td>$11.990
                                                                        </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Producto 3</td>
                                                                                <td>01-01-2020</td>
                                                                                <td>https://lapaymentgroup.com/pro</td>
                                                                                <td>Peso Chileno (CLP) </td>
                                                                                <td>$11.990
                                                                        </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Producto 4</td>
                                                                                <td>01-01-2020</td>
                                                                                <td>https://lapaymentgroup.com/pro</td>
                                                                                <td>Peso Chileno (CLP) </td>
                                                                                <td>$11.990
                                                                        </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Producto 5</td>
                                                                                <td>01-01-2020</td>
                                                                                <td>https://lapaymentgroup.com/pro</td>
                                                                                <td>Peso Chileno (CLP) </td>
                                                                                <td>$11.990
                                                                        </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Producto 6</td>
                                                                                <td>01-01-2020</td>
                                                                                <td>https://lapaymentgroup.com/pro</td>
                                                                                <td>Peso Chileno (CLP) </td>
                                                                                <td>$11.990
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

export default (withRouter(Factura));