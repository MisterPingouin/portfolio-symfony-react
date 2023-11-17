import React from 'react';
import '../../styles/home.scss'; 

const ProjectArticle = ({ project, isSelected, onSelected }) => {
  const handleSelected = () => {
    onSelected(project.id);
  };

  const media = project.video ? (
    <video className="image rounded max-w-[45%] h-auto shadow-sm" autoPlay muted>
    <source src={project.video} type="video/mp4" />    </video>
  ) : (
    <img className="image rounded max-w-full h-auto shadow-sm" src={`/build/images/${project.image}`} alt={`Picture of ${project.title}`} />
  );

  return (
    <article className={`article flex flex-col items-center justify-between w-full ${isSelected ? '' : 'hidden'}`} role="tabpanel" aria-labelledby={`btn-${project.id}`}>
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <figcaption className="ml-3 pl-3 md:mb-4 sm:mb-0 sm:mr-4">
          <h1 className="title font-bold text-accentcolor">{project.title}</h1>
          <p className="description font-contentfont font-semibold text-gray-700 text-sm md:text-lg mt-3">
            {project.description}
          </p>
          <button className="learn-more cta-btn mt-3 md:mt-6" onClick={handleSelected}>
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text text-sm md:text-md">Learn more</span>
          </button>
        </figcaption>
        <figure className="flex justify-center mt-2 md:mt-0 lg:ml-5 lg:pl-5">
          {media}
        </figure>
      </div>
    </article>
  );
};

export default ProjectArticle;
