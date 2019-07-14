import React from 'react';
import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheet/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
