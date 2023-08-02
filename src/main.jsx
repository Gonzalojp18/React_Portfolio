import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import './index.css';

// Utiliza ReactDOM.render para renderizar el componente en el DOM
const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootComponent = ReactDOM.createRoot(root);
rootComponent.render(rootElement);
