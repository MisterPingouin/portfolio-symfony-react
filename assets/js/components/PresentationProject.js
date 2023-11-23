import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderPres from './HeaderPres';
import ScrollDownIndicator from './ScrollDownIndicator';
import '../../styles/presentation.scss';

const PresentationProject = () => {
  const { id } = useParams();
  const [presentations, setPresentations] = useState([]);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/api/presentation/project/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setPresentations(data);
        } else {
          console.error('No data received');
        }
      })
      .catch(error => {
        console.error('Error fetching presentation', error);
        setImageError(true);
      });

    const checkPosition = () => {
      presentations.forEach((_, index) => {
        const element = document.getElementById(`article-${index}`);
        if (element) {
          const positionFromBottom = element.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;

          if (positionFromBottom - windowHeight <= 0) {
            element.classList.add('current');
          } else {
            element.classList.remove('current');
          }
        }
      });
    };

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    checkPosition();

    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, [id, presentations.length]); // Changed dependency to presentations.length to avoid excessive calls

  if (imageError) {
    return <div>Error loading presentation data.</div>;
  }

  if (!presentations.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderPres />
      <section className="font-titlefont h-full">
        {presentations.map((presentation, index) => (
          <article id={`article-${index}`} key={index} className={index === 0 ? 'current static' : ''}>
          <div className="image-wrap">
            <img 
              className="rounded shadow-sm" 
              src={presentation.link} 
              alt={presentation.fonction}
              onError={() => setImageError(true)}
            />
          </div>
          <div className="mresponsive w-full md:h-full p-3 flex flex-col md:justify-center items-start relative">
            <div className="flex flex-col justify-center items-start md:h-full md:max-w-[50%] content-wrapper md:pl-[3rem] md:pt-6">
              <h1 className="md:pl-3 md:pb-2 mb-2 font-bold md:text-left w-full text-2xl md:text-6xl text-accentcolor">{presentation.fonction}</h1>
              <p className="md:pl-3 mt-4 pt-4 w-full font-contentfont font-semibold text-gray-700 text-left">{presentation.description}</p>
              {index === presentations.length - 1 && presentation.website && (
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
                          {index === 0 && <ScrollDownIndicator />}

            </div>
          </div>
        </article>
        ))}
      </section>
    </>
  );
};

export default PresentationProject;
