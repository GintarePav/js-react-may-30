import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderWithNav from './components/HeaderWithNav/HeaderWithNav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderWithNav />
    <Main />
    <Footer />
  </React.StrictMode>
);

