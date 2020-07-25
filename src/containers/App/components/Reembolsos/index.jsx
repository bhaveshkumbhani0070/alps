import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Reembolsos extends React.Component {
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
                <section id="number-tabs">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Reembolsos | <b className="color1"> Solicitud de reembolso</b>
                                    </h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <form action="#" className="number-tab-steps wizard-circle">

                                            <h6>01. Selección</h6>
                                            <fieldset>
                                                <div className="col-lg-12 col-md-12 col-12">

                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                                            <div className="form-row">
                                                                <div className="col-md-3">
                                                                    <b>Código:</b>
                                                                </div>
                                                                <div className="col-md-9">

                                                                    <fieldset
                                                                        className="form-group position-relative has-icon-left">
                                                                        <select className="form-control h-card2 irounded"
                                                                            id="basicSelect">
                                                                            <option>IT</option>
                                                                            <option>Blade Runner</option>
                                                                            <option>Thor Ragnarok</option>
                                                                        </select>
                                                                        <div className="form-control-position">
                                                                            <i
                                                                                className="feather icon-phone text-primary"></i>
                                                                        </div>
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="form-row">
                                                                <div className="col-md-2 pr-0">
                                                                    <b> Fetcha:</b>
                                                                </div>
                                                                <div className="col-md-5 pl-0 mb-1">
                                                                    <input type='date'
                                                                        className="form-control h-card2 irounded"
                                                                        placeholder="Desde" />
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <input type='date'
                                                                        className="form-control h-card2 irounded" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table zero-configuration">
                                                        <thead>
                                                            <tr>
                                                                <th>Código</th>
                                                                <th>Fecha de venta</th>
                                                                <th>ID Local</th>
                                                                <th>Medio de pago</th>
                                                                <th>Monto</th>
                                                                <th>Estado</th>
                                                                <th>Acciones</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>02941924</td>
                                                                <td>03-01-20</td>
                                                                <td>1247918924712</td>
                                                                <td>DÉBITO</td>
                                                                <td>$11.980</td>
                                                                <td>Aceptado</td>
                                                                <td><a href="/">Ver Reembolsar</a> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>02941924</td>
                                                                <td>03-01-20</td>
                                                                <td>1247918924712</td>
                                                                <td>DÉBITO</td>
                                                                <td>$11.980</td>
                                                                <td>Aceptado</td>
                                                                <td><a href="/">Ver Reembolsar</a> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>02941924</td>
                                                                <td>03-01-20</td>
                                                                <td>1247918924712</td>
                                                                <td>DÉBITO</td>
                                                                <td>$11.980</td>
                                                                <td>Aceptado</td>
                                                                <td><a href="/">Ver Reembolsar</a> </td>
                                                            </tr>
                                                            <tr>
                                                                <td>02941924</td>
                                                                <td>03-01-20</td>
                                                                <td>1247918924712</td>
                                                                <td>DÉBITO</td>
                                                                <td>$11.980</td>
                                                                <td>Aceptado</td>
                                                                <td><a href="/">Ver Reembolsar</a> </td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </fieldset>

                                            <h6>02. Monto a reenbolsar</h6>
                                            <fieldset>
                                                <div className="table-responsive">
                                                    <table className="table zero-configuration">
                                                        <thead>
                                                            <tr>
                                                                <th>Código</th>
                                                                <th>Fecha de venta</th>
                                                                <th>ID Local</th>
                                                                <th>Medio de pago</th>
                                                                <th>Monto</th>
                                                                <th>Estado</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>02941924</td>
                                                                <td>03-01-20</td>
                                                                <td>1247918924712</td>
                                                                <td>DÉBITO</td>
                                                                <td>$11.980</td>
                                                                <td>Aceptado</td>
                                                            </tr>
                                                            <tr>
                                                                <td>02941924</td>
                                                                <td>03-01-20</td>
                                                                <td>1247918924712</td>
                                                                <td>DÉBITO</td>
                                                                <td>$11.980</td>
                                                                <td>Aceptado</td>
                                                            </tr>
                                                            <tr>
                                                                <td>02941924</td>
                                                                <td>03-01-20</td>
                                                                <td>1247918924712</td>
                                                                <td>DÉBITO</td>
                                                                <td>$11.980</td>
                                                                <td>Aceptado</td>
                                                            </tr>
                                                            <tr>
                                                                <td>02941924</td>
                                                                <td>03-01-20</td>
                                                                <td>1247918924712</td>
                                                                <td>DÉBITO</td>
                                                                <td>$11.980</td>
                                                                <td>Aceptado</td>
                                                            </tr>
                                                        </tbody>

                                                    </table>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-12">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <h6> Monto de reembolso:
                                                                <small>
                                                                    <span className="btn-group">
                                                                        <button
                                                                            className="btn btn-outline-primary h-card2 irounded w-100 btn-block">$25.000</button>
                                                                    </span>
                                                                </small>
                                                            </h6>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <h6> Comisión de reembolso:
                                                                <small>
                                                                    <span className="btn-group">
                                                                        <button
                                                                            className="btn btn-outline-primary h-card2 irounded w-100 btn-block">240</button>
                                                                    </span>
                                                                </small>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-1">
                                                        <div className="col-lg-3 col-md-6 col-sm-12">

                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                            <button
                                                                className="btn btn-outline-primary h-card2 irounded w-100 btn-block">VOLVER</button>

                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                            <button
                                                                className="btn btn-primary irounded w-100 btn-block">CONTINUAR</button>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12">

                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                            <h6>03. Confirmación</h6>
                                            <fieldset>
                                                <div className="col-lg-12 col-md-12 col-12">

                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card">
                                                                <div className="card-title">
                                                                    <h4 className="m-1"><b> Datos del solicitante
                                                                        </b></h4>
                                                                </div>
                                                                <div className="card-content">
                                                                    <div
                                                                        className="card-body border border-muted border-2 rounded">
                                                                        <form>
                                                                            <div className="form-group">
                                                                                <label for="Fecha">Fecha</label>
                                                                                <input type="text"
                                                                                    className="form-control input rounded-0"
                                                                                    id="Fecha"
                                                                                    aria-describedby="Correo electrónico"
                                                                                    placeholder="03-01-20"/>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="Monto">Monto
                                                                                </label>
                                                                                <input type="text"
                                                                                    className="form-control input rounded-0"
                                                                                    id="Monto" placeholder="25.000"/>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="Código">Código</label>
                                                                                <input type="number"
                                                                                    className="form-control input rounded-0"
                                                                                    id="Código"
                                                                                    placeholder="12841982401"/>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="Beneficiario">Beneficiario
                                                                                    del reembolso
                                                                                </label>
                                                                                <input type="number"
                                                                                    className="form-control input rounded-0"
                                                                                    id="Beneficiario"
                                                                                    placeholder="1824128498312344"/>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="Medio">Medio de pago
                                                                                </label>
                                                                                <input type="text"
                                                                                    className="form-control input rounded-0"
                                                                                    id="Medio" placeholder="Débito"/>
                                                                            </div>
                                                                            <fieldset className="checkbox">
                                                                                <div
                                                                                    className="vs-checkbox-con vs-checkbox-primary">
                                                                                    <input type="checkbox"/>
                                                                                    <span className="vs-checkbox">
                                                                                        <span
                                                                                            className="vs-checkbox--check">
                                                                                            <i
                                                                                                className="vs-icon feather icon-check"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className=""><small> Acepto las
                                                                                            condiciones generales de uso
                                                                                            del reembolso
                                                                                        </small></span>
                                                                                </div>
                                                                            </fieldset>
                                                                        </form>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                            <div className="card">
                                                                <div className="card-title">
                                                                    <h4 className="m-1"><b> Datos de Transacción
                                                                        </b></h4>
                                                                </div>
                                                                <div className="card-content">
                                                                    <div
                                                                        className="card-body border border-muted border-2 rounded">
                                                                        <form>

                                                                            <div className="form-group">
                                                                                <label for="Transferencia">Fecha
                                                                                    Transferencia</label>
                                                                                <input type="text"
                                                                                    className="form-control input rounded-0"
                                                                                    id="Transferencia" placeholder="04-02-20
                                                                                "/>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="Monto">Monto a reembolsar
                                                                                </label>
                                                                                <input type="text"
                                                                                    className="form-control input rounded-0"
                                                                                    id="Monto" placeholder="25.000"/>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label for="reembolso">Cargo reembolso
                                                                                </label>
                                                                                <input type="text"
                                                                                    className="form-control input rounded-0"
                                                                                    id="reembolso" placeholder="240"/>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="row mt-1">
                                                        <div className="col-lg-3 col-md-6 col-sm-12">

                                                        </div>

                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                            <button
                                                                className="btn btn-outline-primary h-card2 irounded w-100 btn-block">VOLVER</button>

                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                            <button
                                                                className="btn btn-primary irounded w-100 btn-block">CONTINUAR</button>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6 col-sm-12">

                                                        </div>
                                                    </div>

                                                </div>

                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
            
        )
    }
};

export default (withRouter(Reembolsos));