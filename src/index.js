import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import global_es from './translation/es/global.json'
import global_en from './translation/en/global.json'
import './custom.scss';
import ThemingProvider from './shared/theming/theming-selector/theming.provider';




i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,


    },
    en: {
      global: global_en,


    },

  },
})


ReactDOM.render(
  <React.StrictMode>
    <ThemingProvider>
      < I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
