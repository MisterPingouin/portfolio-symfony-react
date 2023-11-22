import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer';
import '../../styles/home.scss';
import ProjectArticle from './ProjectArticle';

const Home = () => {
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

export default Home;
