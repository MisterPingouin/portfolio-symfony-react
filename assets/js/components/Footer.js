import React, { useState } from 'react';
import '../../styles/footer.scss';

const Footer = ({ projects = [] }) => { 
  const [selectedProjectId, setSelectedProjectId] = useState(3);

  const handleClick = (id) => {
    setSelectedProjectId(id);
  };


  if (!projects.length) {
    return <div>No projects to display</div>;
  }

  return (
    <aside className="aside absolute shadow-inset">
      <nav role="tablist">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={`thumbnail__btn rounded ${selectedProjectId === project.id ? 'selected' : ''}`}
            id={`btn-${project.id}`}
            role="tab"
            aria-selected={selectedProjectId === project.id ? 'true' : 'false'}
            tabIndex={index === 0 ? 0 : -1}
            aria-controls={`tabpanel-${project.id}`}
            style={{ backgroundImage: `url(${project.image})` }}            onClick={() => handleClick(project.id)}
          >
            <span className="sr-only">{project.title}</span>
            <span className="thumbnail__title text-sm md:text-md">{project.title}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Footer;