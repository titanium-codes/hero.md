import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { composeWithDevTools } from 'redux-devtools-extension';
import './globaleStyle.css';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const middlewaresWithDevTools = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, middlewaresWithDevTools);

sagaMiddleware.run(rootSaga);

if (module.hot) {
  module.hot.accept();
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: '#ffbe00',
      main: '#ffbe00',
      dark: '#ffbe00',
      contrastText: '#fff'
    }
  },
  overrides: {
    MuiMenuItem: {
      selected: {}
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
