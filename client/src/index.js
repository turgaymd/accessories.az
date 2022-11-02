import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<Provider store={store}>
<BrowserRouter>
    <App/>
     </BrowserRouter>
</Provider>
    );

