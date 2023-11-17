import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import '../styles/app.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Header />
    <ProjectList />
    <Footer />
  </React.StrictMode>
);
