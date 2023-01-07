import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './reset.css';
import App from './App';
import configureStore from './store';
import csrfFetch, { restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session';
import * as articleActions from './store/articles';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.articleActions = articleActions;
}

const renderApplication = () => {
  function Modal() {
    return (
      // <ModalProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      // </ModalProvider>
    );
  }

  ReactDOM.render(
    <React.StrictMode>
      <Modal />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem('X-CSRF-Token') === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
}
