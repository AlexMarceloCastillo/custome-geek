import React from 'react';
import ReactDOM from 'react-dom';

//Bootstrap
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import getFirestoreApp from './firebase/config';

getFirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
