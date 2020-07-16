import React from 'react';
import {  Route, Switch} from 'react-router-dom';
import MainWrapper from '../MainWrapper';
import Login from '../../Account/Login';
import WrappedRoutes from './WrappedRoutes'
const Router = () => (
    <MainWrapper>
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={WrappedRoutes} />
        </Switch>
      </main>
    </MainWrapper>
  );
  
  
  export default Router;