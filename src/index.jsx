// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/index.css"

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
