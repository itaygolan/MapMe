import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import Search from './pages/Search'

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/search" component={Search} />
        </div>
    </BrowserRouter>
 ), document.getElementById('root'));

registerServiceWorker();
