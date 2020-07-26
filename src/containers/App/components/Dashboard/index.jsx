import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';
import { _t, setLanguage } from '../../../../shared/translation';

class Dashboard extends React.Component {
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
        console.log('lang',lang);
        setLanguage(lang);
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
                                            <div className="row">
                                                <div className="col-lg-2 col-md-6 col-sm-12">
                                                    <h4 className="mb-0"><b> {_t("Payments")} </b></h4>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-md-4 col-12">
                                                            <b>  Filtra por:</b>
                                                        </div>
                                                        <div className="col-md-8 col-12">
                                                            <fieldset className="form-group position-relative has-icon-left">
                                                                <select className="form-control h-card2 irounded" id="basicSelect">
                                                                    <option>IT</option>
                                                                    <option>Blade Runner</option>
                                                                    <option>Thor Ragnarok</option>
                                                                </select>
                                                                <div className="form-control-position">
                                                                    <i className="feather icon-phone text-primary"></i>
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="row">
                                                        <div className="col-md-6 col-12">
                                                            <fieldset className="form-group position-relative has-icon-left">
                                                                <input type='text' className="form-control pickadate h-card2 irounded" placeholder="Desde" />
                                                                <div className="form-control-position">
                                                                    <i className="feather icon-calendar text-primary"></i>
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                        <div className="col-md-6 col-12">
                                                            <fieldset className="form-group position-relative has-icon-left">
                                                                <input type='text' className="form-control pickadate h-card2 irounded" placeholder="Hasta" />
                                                                <div className="form-control-position">
                                                                    <i className="feather icon-calendar text-primary"></i>
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-sm-12 col-pad">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <img className="card-img img-fluid" src={process.env.PUBLIC_URL+"app-assets/images/slider/1.png"} alt="" />
                                                            <div className="card-img-overlay overflow-hidden c-pad">
                                                                <div className="card-title text-white text-right">
                                                                    <i className="feather icon-help-circle text-muted cursor-pointer" data-toggle="popover" data-placement="bottom" data-container="body" data-content="Abono en Cuenta
                                                                Corresponde a los depósitos efectuados
                                                                en su cuenta bancaria en el periodo
                                                                seleccionado"></i>
                                                                </div>
                                                                <h1 className="card-text h-card1">$ 00.000.000</h1>
                                                                <p className="card-text mb-0"><b> Abono de Cuenta </b></p>
                                                                <button type="button" className="btn btn-outline-primary round mt-1 c-pad h-card5 font-weight-bold">Más información</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12 col-pad">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <img className="card-img img-fluid" src={process.env.PUBLIC_URL+"/app-assets/images/slider/2.png"} alt="Card " />
                                                            <div className="card-img-overlay overflow-hidden c-pad">
                                                                <div className="card-title text-white text-right">
                                                                    <i className="feather icon-help-circle text-muted cursor-pointer" data-toggle="popover" data-placement="bottom" data-container="body" data-content="Abono en Cuenta
                                                                    Corresponde a los depósitos efectuados
                                                                    en su cuenta bancaria en el periodo
                                                                    seleccionado"></i>
                                                                </div>
                                                                <h1 className="card-text h-card2">$ 00.000.000</h1>
                                                                <p className="card-text mb-0"><b> Abonos Futuros </b></p>
                                                                <button type="button" className="btn btn-outline-primary round mt-1 c-pad h-card2 font-weight-bold">Más información</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12 col-pad">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <img className="card-img img-fluid" src={process.env.PUBLIC_URL+"/app-assets/images/slider/3.png"} alt="Card " />
                                                            <div className="card-img-overlay overflow-hidden c-pad">
                                                                <div className="card-title text-white text-right">
                                                                    <i className="feather icon-help-circle text-muted cursor-pointer" data-toggle="popover" data-placement="bottom" data-container="body" data-content="Abono en Cuenta
                                                                        Corresponde a los depósitos efectuados
                                                                        en su cuenta bancaria en el periodo
                                                                        seleccionado"></i>
                                                                </div>
                                                                <h1 className="card-text h-card3">$ 00.000.000</h1>
                                                                <p className="card-text mb-0"><b> Monto de Venta </b></p>
                                                                <button type="button" className="btn btn-outline-primary round mt-1 c-pad h-card3 font-weight-bold">Más información</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6 col-sm-12 col-pad">
                                                    <div className="card">
                                                        <div className="card-content">
                                                            <img className="card-img img-fluid" src={process.env.PUBLIC_URL+"/app-assets/images/slider/4.png"} alt="Card " />
                                                            <div className="card-img-overlay overflow-hidden c-pad">
                                                                <div className="card-title text-white text-right">
                                                                    <i className="feather icon-help-circle text-muted cursor-pointer" data-toggle="popover" data-placement="bottom" data-container="body" data-content="Abono en Cuenta
                                                                            Corresponde a los depósitos efectuados
                                                                            en su cuenta bancaria en el periodo
                                                                            seleccionado"></i>
                                                                </div>
                                                                <h1 className="card-text h-card4">$ 00.000.000</h1>
                                                                <p className="card-text mb-0"><b> Contracargos y reclamos </b>
                                                                </p>
                                                                <button type="button" className="btn btn-outline-primary round mt-1 c-pad h-card4 font-weight-bold">Más información</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />      
                                            <div className="row mb-0">
                                                <div className="card mb-0">
                                                    <div className="card-content">
                                                        <div className="card-body mb-0">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-md-7 col-sm-12 pl-0">
                                                                    <div className="card ">
                                                                        <div className="">
                                                                            <h4 className="card-title font-weight-bold">Ventas por código de comercio <i className="fa fa-chevron-circle-right"></i></h4>
                                                                        </div>
                                                                        <div className="card-content border border-dark rounded mt-1">
                                                                            <div className="card-body">
                                                                                <div id="column-chart"></div>
                                                                                <div className="d-none d-md-block d-lg-block">
                                                                                    <div className="row list-unstyled ml-3 mr-2">
                                                                                        <li className="text-primary mr-2">
                                                                                            <h1 className="text-primary mb-0 mx-auto"> 
                                                                                                <small> <i className="fa fa-circle"></i> </small> $00.00.000 
                                                                                            </h1>
                                                                                            <small>Código de comercio 01</small>
                                                                                        </li>
                                                                                        <div className="d-none d-md-block d-lg-block">
                                                                                            <div className="vl "></div>
                                                                                        </div>
                                                                                        <li className="text-muted ml-2">
                                                                                            <h1 className="text-muted mb-0 mx-auto">
                                                                                                <small><i className="fa fa-circle"></i></small> $00.00.000
                                                                                            </h1>
                                                                                            <small>Código de comercio 01</small>
                                                                                        </li>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-none d-sm-block d-md-none">
                                                                                    <div className="row list-unstyled ml-3 mr-2">
                                                                                        <li className="text-primary">
                                                                                            <h1 className="text-primary mb-0 mx-auto">
                                                                                                $00.00.000
                                                                                            </h1>
                                                                                            <small>Código de comercio 01</small>
                                                                                        </li>
                                                                                        <li className="text-muted">
                                                                                            <h1 className="text-muted mb-0 mx-auto">
                                                                                                $00.00.000
                                                                                            </h1>
                                                                                            <small>Código de comercio 01</small>
                                                                                        </li>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-5 col-md-5 col-sm-12 pl-0 pr-0">
                                                                    <div className="card">
                                                                        <div className="">
                                                                            <h4 className="card-title font-weight-bold">Calendario
                                                                                            <i className="fa fa-chevron-circle-right"></i></h4>
                                                                        </div>
                                                                        <div className="card-content border border-dark rounded mt-1">
                                                                            <div className="card-body">
                                                                                <div id='fc-default'></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-0">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="card">
                                                        <div className="">
                                                            <h4 className="card-title font-weight-bold">Medios de Pago</h4>
                                                        </div>
                                                        <div className="card-content border border-dark rounded mt-1">
                                                            <div className="card-body">
                                                                <h1 className="card-text color1">$ 00.000.000</h1>
                                                                <p className="card-text mb-0"><b>Total medios de pago </b></p>
                                                                <div className="progress mt-1" style={{height: "20px"}}>
                                                                    <div className="progress-bar bgcolor1" role="progressbar" style={{width: "20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    <div className="progress-bar bgcolor2" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    <div className="progress-bar bgcolor3" role="progressbar" style={{width: "50%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <h3 className="color1">
                                                                            <li className="ti"><span>$000.00</span> </li>
                                                                        </h3>
                                                                        <p className="card-text mb-0"><b> Efectivo </b>
                                                                        </p>

                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <h3 className="color2">
                                                                            <li className="ti">$000.00</li>
                                                                        </h3>
                                                                        <p className="card-text mb-0"><b> Débito </b></p>

                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <h3 className="color3">
                                                                            <li className="ti">$000.00</li>
                                                                        </h3>
                                                                        <p className="card-text mb-0"><b> Crédito </b></p>
                                                                        <button type="button" className="btn btn-outline-primary round h-card2">Ver más</button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h4 className="card-title font-weight-bold">Estado de Transacciones
                                                                        </h4>
                                                        </div>
                                                        <div className="card-content border border-dark rounded mt-1">
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-md-4 ">
                                                                        <div className="clearfix text-center">
                                                                            <div className="c100 p25 color1">
                                                                                <span>25%</span>
                                                                                <div className="slice">
                                                                                    <div className="bar"></div>
                                                                                    <div className="fill"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-center">Aceptado</p>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="clearfix text-center">
                                                                            <div className="c100 p25 orange">
                                                                                <span>25%</span>
                                                                                <div className="slice">
                                                                                    <div className="bar"></div>
                                                                                    <div className="fill"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-center">Aceptado</p>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="clearfix text-center">
                                                                            <div className="c100 p25 green">
                                                                                <span>25%</span>
                                                                                <div className="slice">
                                                                                    <div className="bar"></div>
                                                                                    <div className="fill"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-center">Aceptado</p>
                                                                        <button type="button" className="btn btn-outline-primary round h-card2">Ver más</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-0">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="card">
                                                        <div className="card-header">
                                                            <h4 className="card-title font-weight-bold">Medios de Pago</h4>
                                                        </div>
                                                        <div className="card-content border border-dark rounded mt-1">
                                                            <div className="card-body">
                                                                <h1 className="card-text color1">$ 00.000.000</h1>
                                                                <p className="card-text mb-0"><b>Total medios de pago </b></p>
                                                                <div className="progress mt-1" style={{height: "20px"}}>
                                                                    <div className="progress-bar bgcolor1" role="progressbar" style={{width: "20%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    <div className="progress-bar bgcolor2" role="progressbar" style={{width: "30%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    <div className="progress-bar bgcolor3" role="progressbar" style={{width: "50%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-4">
                                                                        <h3 className="color1">
                                                                            <li className="ti">$ 000.00</li>
                                                                        </h3>
                                                                        <p className="card-text mb-0"><b> Efectivo </b></p>

                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <h3 className="color2">
                                                                            <li className="ti">$ 000.00</li>
                                                                        </h3>
                                                                        <p className="card-text mb-0"><b> Débito </b></p>

                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <h3 className="color3">
                                                                            <li className="ti">$ 000.00</li>
                                                                        </h3>
                                                                        <p className="card-text mb-0"><b> Crédito </b></p>
                                                                        <button type="button" className="btn btn-outline-primary round h-card2">Ver más</button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="cards">
                                                        <div className="card-header">
                                                            <h4 className="card-title font-weight-bold">Estado de Transacciones
                                                                        </h4>
                                                        </div>
                                                        <div className="card-content border border-dark rounded mt-1">
                                                            <div className="card-body">
                                                                <div className="row">
                                                                    <div className="col-md-4 ">
                                                                        <div className="clearfix text-center">
                                                                            <div className="c100 p25 color1">
                                                                                <span>25%</span>
                                                                                <div className="slice">
                                                                                    <div className="bar"></div>
                                                                                    <div className="fill"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-center">Aceptado</p>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="clearfix text-center">
                                                                            <div className="c100 p25 orange">
                                                                                <span>25%</span>
                                                                                <div className="slice">
                                                                                    <div className="bar"></div>
                                                                                    <div className="fill"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-center">Aceptado</p>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <div className="clearfix text-center">
                                                                            <div className="c100 p25 green">
                                                                                <span>25%</span>
                                                                                <div className="slice">
                                                                                    <div className="bar"></div>
                                                                                    <div className="fill"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <p className="text-center">Aceptado</p>
                                                                        <button type="button" className="btn btn-outline-primary round h-card2">Ver más</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="card">
                                                        <div className="">
                                                            <h4 className="mb-0">Actividad Clientes</h4>
                                                        </div>
                                                        <div className="card-content">
                                                            <div className="table-responsive mt-1">
                                                                <table className="table table-hover-animation mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Usuario</th>
                                                                            <th>Tipo de pago</th>
                                                                            <th>Número de ventas </th>
                                                                            <th>Monto total</th>
                                                                            <th></th>

                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Trina Lynes" className="avatar pull-up">
                                                                                        <img className="media-object rounded-circle" src={process.env.PUBLIC_URL+"/app-assets/images/portrait/small/avatar-s-1.jpg"} alt="Avatar" height="30" width="30" />
                                                                                    </li>
                                                                                    <li className="pl-2">Angélica Vitale</li>
                                                                                </ul>
                                                                            </td>
                                                                            <td>Crédito</td>
                                                                            <td className="p-1">
                                                                                4
                                                                                        </td>
                                                                            <td>Cordova, Alaska</td>
                                                                            <td>
                                                                                <i className="feather icon-external-link"></i>
                                                                            </td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Trina Lynes" className="avatar pull-up">
                                                                                        <img className="media-object rounded-circle" src={process.env.PUBLIC_URL+"/app-assets/images/portrait/small/avatar-s-1.jpg"} alt="Avatar" height="30" width="30" />
                                                                                    </li>
                                                                                    <li className="pl-2">Angélica Vitale</li>
                                                                                </ul>
                                                                            </td>
                                                                            <td>Crédito</td>
                                                                            <td className="p-1">
                                                                                4
                                                                                        </td>
                                                                            <td>Cordova, Alaska</td>
                                                                            <td>
                                                                                <i className="feather icon-external-link"></i>
                                                                            </td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Trina Lynes" className="avatar pull-up">
                                                                                        <img className="media-object rounded-circle" src={process.env.PUBLIC_URL+"/app-assets/images/portrait/small/avatar-s-1.jpg"} alt="Avatar" height="30" width="30" />
                                                                                    </li>
                                                                                    <li className="pl-2">Angélica Vitale</li>
                                                                                </ul>
                                                                            </td>
                                                                            <td>Crédito</td>
                                                                            <td className="p-1">
                                                                                4
                                                                                        </td>
                                                                            <td>Cordova, Alaska</td>
                                                                            <td>
                                                                                <i className="feather icon-external-link"></i>
                                                                            </td>

                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                                                    <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Trina Lynes" className="avatar pull-up">
                                                                                        <img className="media-object rounded-circle" src={process.env.PUBLIC_URL+"/app-assets/images/portrait/small/avatar-s-1.jpg"} alt="Avatar" height="30" width="30" />
                                                                                    </li>
                                                                                    <li className="pl-2">Angélica Vitale</li>
                                                                                </ul>
                                                                            </td>
                                                                            <td>Crédito</td>
                                                                            <td className="p-1">
                                                                                4
                                                                                        </td>
                                                                            <td>Cordova, Alaska</td>
                                                                            <td>
                                                                                <i className="feather icon-external-link"></i>
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
        )
    }
};

export default (withRouter(Dashboard));