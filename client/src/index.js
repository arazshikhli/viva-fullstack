import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'; 
import  './i18n';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Provider store={store}>
    <Suspense fallback={<div>loading...</div>}>
    <App />
    </Suspense>

</Provider>
</BrowserRouter>
   
);

