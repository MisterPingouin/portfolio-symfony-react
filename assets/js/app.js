import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import '../styles/app.css';

const App = () => (
  <>
    <Header />
    {/* Autres composants de votre application */}
    <Footer />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
