import React from 'react';
import {render} from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheet/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



render(<App/>, document.querySelector('#root'));
serviceWorker.unregister();
