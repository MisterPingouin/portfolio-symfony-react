import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderPres from './HeaderPres';
import '../../styles/presentation.scss';

const PresentationProject = () => {
  const { id } = useParams();
  const [presentation, setPresentation] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/presentation/project/${id}`)
      .then(response => response.json())
      .then(data => setPresentation(data))
      .catch(error => console.error('Error fetching presentation', error));
  }, [id]);

  if (!presentation) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderPres />
      <section className="font-titlefont h-full">
      <article className="current static">
        <div className="image-wrap">
          <img className="rounded shadow-sm" src={`/build/images/${presentation.link}`} alt={presentation.fonction} />
        </div>
        <div className="mresponsive w-full md:h-full p-3 flex flex-col md:justify-center items-start relative">
          <div className="flex flex-col justify-center items-start md:h-full md:max-w-[50%] content-wrapper md:pl-[3rem] md:pt-6">
            <h1 className="md:pl-3 md:pb-2 mb-2 font-bold md:text-left w-full text-2xl md:text-6xl text-accentcolor">{presentation.fonction}</h1>
            <p className="md:pl-3 mt-4 pt-4 w-full font-contentfont font-semibold text-gray-700 text-left">{presentation.description}</p>
            {presentation.website && (
              <div className="unique-btn-container self-center mt-3 md:mt-[5em] font-contentfont font-medium text-accentcolor text-sm md:text-md">
                <a href={presentation.website} target="_blank" rel="noopener noreferrer">
                  <button className="learn-more cta-btn">
                    <div className="circle">
                      <span className="icon arrow"></span>
                    </div>
                    <span className="button-text">Go to the website</span>
                  </button>
                </a>
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
    </>
  );
};

export default PresentationProject;