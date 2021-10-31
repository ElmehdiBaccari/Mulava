import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MulavaContextProvider } from './context/mulava-context';
import App from './App';

import 'fomantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <MulavaContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MulavaContextProvider>,
  document.getElementById('root')
);
