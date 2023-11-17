import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import '../styles/app.css';

const ParentComponent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000/api/projects')
          .then(response => response.json())
          .then(data => setProjects(data))
          .catch(error => console.error('Error fetching projects', error));
  }, []);

  return (
    <>
      <Header />
      <ProjectList projects={projects} />
      <Footer projects={projects} />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
