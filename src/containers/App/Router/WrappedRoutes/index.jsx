import React from 'react';
import {  Route,Redirect } from 'react-router-dom';
import Layout from '../../components/Layout';
import Dashboard from '../../components/Dashboard';
import Transacciones from '../../components/Transacciones';
import Suscripciones from '../../components/Suscripciones';
import Reembolsos from '../../components/Reembolsos';
import Cobros from '../../components/Cobros';
import Factura from '../../components/Factura';
import Liquidacion from '../../components/Liquidacion';
import Documentacion from '../../components/Documentacion';
import Estado from '../../components/Estado';
import Phpsdk from '../../components/Phpsdk';
export default ()=>(
    <>
        <Layout />
            <PrivateRoute exact Route path="/" component={Dashboard} />
            <PrivateRoute exact Route path="/transacciones" component={Transacciones} />
            <PrivateRoute exact Route path="/suscripciones" component={Suscripciones} />
            <PrivateRoute exact Route path="/reembolsos" component={Reembolsos} />
            <PrivateRoute exact Route path="/cobros" component={Cobros} />
            <PrivateRoute exact Route path="/factura" component={Factura} />
            <PrivateRoute exact Route path="/liquidacion" component={Liquidacion} />
            <PrivateRoute exact Route path="/documentacion" component={Documentacion} />
            <PrivateRoute exact Route path="/estado" component={Estado} />
            <PrivateRoute exact Route path="/phpsdk" component={Phpsdk} />
            
            
                      
            <div className="sidenav-overlay"></div>
            <div className="drag-target"></div>

            <footer className="footer footer-static bg-white">
                <p className="clearfix blue-grey lighten-2 mb-0"><span className="float-md-left d-block d-md-inline-block mt-25">
                    <img src="app-assets/images/logo/logo.svg" className="img-fluid" alt="" width="40%" />
                    </span><span className="float-md-right d-none d-md-block"><i className="feather icon-twitter text-primary"></i> <i
                            className="feather icon-facebook text-primary"></i> <i
                            className="feather icon-instagram text-primary"></i></span>

                </p>
            </footer>
    </>
)


function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('token') ? (<div>
                           <Component {...props} />
                    </div>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
  }