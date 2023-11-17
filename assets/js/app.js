import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectArticle from './components/ProjectArticle';
import '../styles/app.css';

const ParentComponent = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(3);

  useEffect(() => {
      fetch('http://localhost:8000/api/projects')
          .then(response => response.json())
          .then(data => setProjects(data))
          .catch(error => console.error('Error fetching projects', error));
  }, []);

  const handleSelectedProject = (id) => {
    setSelectedProjectId(id);
  };

  return (
    <>
      <Header />
      <div className="responsive mt-4 relative mx-auto flex flex-col items-center justify-between h-screen md:h-[90vh] p-4 md:p-16 font-titlefont">        {projects.map((project) => (
          <ProjectArticle
            key={project.id}
            project={project}
            isSelected={selectedProjectId === project.id}
            onSelected={handleSelectedProject}
          />
        ))}
      </div>
      <Footer projects={projects} selectedProjectId={selectedProjectId} onSelected={handleSelectedProject} />
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
