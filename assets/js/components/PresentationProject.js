import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeaderPres from './HeaderPres';
import '../../styles/presentation.scss';

const PresentationProject = () => {
  const { id } = useParams();
  const [presentation, setPresentation] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/api/presentation/project/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          setPresentation(data);
        } else {
          console.error('No data received');
        }
      })
      .catch(error => {
        console.error('Error fetching presentation', error);
        setImageError(true); // En cas d'erreur de chargement des données
      });
    // Effet de défilement
    const checkPosition = () => {
      const articles = document.querySelectorAll('article');
      const windowHeight = window.innerHeight;

      articles.forEach((article) => {
        const positionFromBottom = article.getBoundingClientRect().bottom;

        if (positionFromBottom - windowHeight <= 0) {
          article.classList.add('current');
        } else {
          article.classList.remove('current');
        }
      });
    };

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    // Exécuter une fois au montage du composant
    checkPosition();

    // Nettoyage (éviter les fuites de mémoire)
    return () => {
      window.removeEventListener('scroll', checkPosition);
      window.removeEventListener('resize', checkPosition);
    };
  }, [id]);

  if (imageError) {
    return <div>Error loading presentation data.</div>;
  }

  if (!presentation) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HeaderPres />
      <section className="font-titlefont h-full">
        {presentation.map((item, index) => (
          <article key={index} className="current static">
            <div className="image-wrap">
              <img 
                className="rounded shadow-sm" 
                src={`${item.link}`} 
                alt={item.fonction} 
                onError={() => setImageError(true)}
              />
            </div>
            <div className="mresponsive w-full md:h-full p-3 flex flex-col md:justify-center items-start relative">
              <div className="flex flex-col justify-center items-start md:h-full md:max-w-[50%] content-wrapper md:pl-[3rem] md:pt-6">
                <h1 className="md:pl-3 md:pb-2 mb-2 font-bold md:text-left w-full text-2xl md:text-6xl text-accentcolor">{item.fonction}</h1>
                <p className="md:pl-3 mt-4 pt-4 w-full font-contentfont font-semibold text-gray-700 text-left">{item.description}</p>
                {item.website && (
                  <div className="unique-btn-container self-center mt-3 md:mt-[5em] font-contentfont font-medium text-accentcolor text-sm md:text-md">
                    <a href={item.website} target="_blank" rel="noopener noreferrer">
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
        ))}
      </section>
    </>
  );
};

export default PresentationProject;
