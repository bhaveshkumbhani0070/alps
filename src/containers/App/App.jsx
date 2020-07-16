import React, { Component, Fragment } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import Router from './Router';
import store from './strore';

const ThemeComponent = ({ children, themeName }) => {
    const theme = createMuiTheme({
      palette: {
        type: themeName === 'theme-dark' ? 'dark' : 'light',
      },
    });
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  };
  
  ThemeComponent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    themeName: PropTypes.string.isRequired,
  };
  
  const ConnectedThemeComponent = connect(state => ({ themeName: state.theme.className }))(ThemeComponent);

class App extends Component{
    constructor() {
        super();
        this.state = {
          loading: true,
          loaded: false,
        };
      }
    
      componentDidMount() {
        window.addEventListener('load', () => {
          this.setState({ loading: false });
          setTimeout(() => this.setState({ loaded: true }), 50);
        });
        // firebase.initializeApp(firebaseConfig);
      }
    
      onRedirectCallbackAuth0 = (appState) => {
        window.history.replaceState(
          {},
          document.title,
          appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname,
        );
      }
    render(){
        return(
            <Provider store={store}>
                <BrowserRouter basename="/">
                    <I18nextProvider i18n={i18n}>
                    {/* <ScrollToTop> */}
                        <Fragment>
                        {/* {!loaded
                            && (
                                <Loading loading={loading} />
                            )
                            } */}
                        <ConnectedThemeComponent>
                            <div>
                                <Router />
                            </div>
                        </ConnectedThemeComponent>
                        </Fragment>
                    {/* </ScrollToTop> */}
                    </I18nextProvider>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App;