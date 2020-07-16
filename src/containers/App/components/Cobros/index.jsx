import React from 'react';
// import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router';

class Cobros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cobros:false
        }
    }
    componentWillMount() {

    }
    changeToCobros=()=>{
        this.setState({
            cobros:!this.state.cobros
        })
    }
    render() {
        const { cobros } = this.state;
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
                                <div className="card-content">
                                    <div className="card-body pt-0">
                                        <div className="row mb-0">
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="card mb-0">
                                                    <div className="card-content">
                                                        <div className="card-body mb-0">
                                                            <div className="row">
                                                                <div className="col-lg-3 col-md-3 col-sm-12 col-pad">

                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 col-pad">
                                                                    <div className="card">
                                                                        <div className="card-title">
                                                                            <h4 className="m-1">Cobros |<b className="color1"> Crear
                                                                                    cobros
                                                                                </b></h4>
                                                                        </div>
                                                                        {!cobros ? 
                                                                        <div className="card-content">
                                                                            <div
                                                                                className="card-body border border-muted border-2 rounded">
                                                                                <form>
                                                                                    <div className="form-group">
                                                                                        <label
                                                                                            for="Correoelectrónico">Correo
                                                                                            electrónico</label>
                                                                                        <input type="email"
                                                                                            className="form-control input rounded-0"
                                                                                            id="Correoelectrónico"
                                                                                            aria-describedby="Correo electrónico"
                                                                                            placeholder="Correo electrónico"/>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label for="Foto">Foto</label>
                                                                                        <br />
                                                                                        <label className="btn btn-outline-primary">
                                                                                            <i className="feather icon-camera fa-2x"></i>
                                                                                            <span className="align-middle"> Subir  imagen </span> 
                                                                                            <input type="file" hidden />
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label
                                                                                            for="Repetir contraseña">Moneda</label>
                                                                                        <select
                                                                                            className="form-control input rounded-0"
                                                                                            id="basicSelect">
                                                                                            <option>Peso Chileno (CLP)
                                                                                            </option>
                                                                                            <option>Peso Chileno (CLP)
                                                                                            </option>
                                                                                            <option>Peso Chileno (CLP)
                                                                                            </option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label
                                                                                            for="Correoelectrónico">Monto</label>
                                                                                        <input type="email"
                                                                                            className="form-control input rounded-0"
                                                                                            id="Correoelectrónico"
                                                                                            aria-describedby="Correo electrónico"
                                                                                            placeholder="$11.990"/>
                                                                                    </div>

                                                                                    <div className="form-group">
                                                                                        <label for="Repetir contraseña">
                                                                                            Número de ID </label>
                                                                                        <input type="password"
                                                                                            className="form-control input rounded-0"
                                                                                            id="Repetir contraseña"
                                                                                            placeholder="SKU, EAN, etc." />
                                                                                    </div>
                                                                                    <div className="form-row mb-1">
                                                                                        <div className="col-md-4">
                                                                                            <small> Fecha de
                                                                                                vencimiento:</small>
                                                                                        </div>
                                                                                        <div className="col-md-6">
                                                                                            <input type="date"
                                                                                                className="form-control irounded h-card2"
                                                                                                id="Correoelectrónico"
                                                                                                aria-describedby="Correo electrónico"
                                                                                                placeholder="https://mi.url.co/exito" />

                                                                                        </div>
                                                                                        <div className="col-md-2">

                                                                                        </div>
                                                                                    </div>

                                                                                    <h3>URL una vez finalizado el pago </h3>
                                                                                    <div className="form-group">
                                                                                        <label for="Correoelectrónico">Pago
                                                                                            exitoso</label>
                                                                                        <input type="text"
                                                                                            className="form-control input rounded-0"
                                                                                            id="Correoelectrónico"
                                                                                            aria-describedby="Correo electrónico"
                                                                                            placeholder="https://mi.url.co/exito" />
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label for="Correoelectrónico">Pago
                                                                                            en proceso</label>
                                                                                        <input type="email"
                                                                                            className="form-control input rounded-0"
                                                                                            id="Correoelectrónico"
                                                                                            aria-describedby="Correo electrónico"
                                                                                            placeholder="https://mi.url.co/en-proceso" />
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label for="Correoelectrónico">Pago
                                                                                            erróneo</label>
                                                                                        <input type="email"
                                                                                            className="form-control input rounded-0"
                                                                                            id="Correoelectrónico"
                                                                                            aria-describedby="Correo electrónico"
                                                                                            placeholder="https://mi.url.co/error" />
                                                                                    </div>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col text-center">
                                                                                                <span className="btn btn-primary"
                                                                                                     onClick={this.changeToCobros} >CREAR</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                         :
                                                                         <div className="card-content">
                                                                        <div
                                                                            className="card-body border border-muted border-2 rounded">
                                                                            <h3 className="text-center">¡Tu enlace para
                                                                                cobrar está listo! </h3>
                                                                            <button
                                                                                className="btn btn-outline-primary irounded h-card4 btn-block mt-2"><i
                                                                                    className="fa fa-chain"></i>
                                                                                https://latampaymentgroup.com</button>
                                                                            <p className="mt-3 text-center">Compártelo en
                                                                                Redes Sociales
                                                                            </p>
                                                                            <div className="row">
                                                                                <div className="col-md-4">
                                                                                    <button
                                                                                        className="btn btn-outline-primary rounded btn-block mt-2"><i
                                                                                            className="fa fa-facebook"></i></button>
                                                                                </div>
                                                                                <div className="col-md-4">
                                                                                    <button
                                                                                        className="btn btn-outline-primary rounded  btn-block mt-2"><i
                                                                                            className="fa fa-whatsapp"></i></button>
                                                                                </div>
                                                                                <div className="col-md-4">
                                                                                    <button
                                                                                        className="btn btn-outline-primary rounded  btn-block mt-2"><i
                                                                                            className="fa fa-twitter"></i></button>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <button
                                                                                        className="btn btn-outline-primary irounded btn-block mt-2 pl-0 pr-0"><small>
                                                                                            Crear otro botón de
                                                                                            pago</small></button>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <button
                                                                                        className="btn btn-primary irounded  btn-block mt-2"><small>
                                                                                            Ir a todos mis
                                                                                            cobros</small></button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>   
                                                                    }
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-3 col-md-3 col-sm-12 col-pad">
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

export default (withRouter(Cobros));