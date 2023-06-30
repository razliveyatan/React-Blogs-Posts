import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './router/main';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <MainRouter/>
    </I18nextProvider>    
  </React.StrictMode>
);