import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tailwinds.css'
import './styles/App.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);
