import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './router/main';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './context/languageContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <MainRouter/>
      </LanguageProvider>
    </I18nextProvider>    
  </React.StrictMode>
);