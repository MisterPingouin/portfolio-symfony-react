import React, { useState, useEffect } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Assurez-vous que l'URL correspond à l'URL de votre API locale
        fetch('http://localhost:8000/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects', error));
    }, []);

    return (
        <div>
            <h2>Projets</h2>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>{project.image}</p>
                        <p>{project.website}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
