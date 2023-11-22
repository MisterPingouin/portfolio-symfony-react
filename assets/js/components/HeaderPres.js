import React from 'react';

const HeaderPres = () => (
  <header>
   <nav className="mobile-border md:w-16 md:h-screen w-full h-16 font-titlefont z-50 md:fixed relative flex md:flex-col flex-row items-center justify-between md:p-4">
      <a href="/" className="md:flex md:items-center md:my-6 mr-6 my-0">
        <span className="self-start text-2xl ml-1 pl-6 font-semibold whitespace-nowrap text-black">AP</span>
      </a>
      <div className="md:my-9 mr-9 mt-4 my-0">
        <ul className="text-gray-400 font-medium flex md:flex-col flex-row">
          <li className="md:mb-6 md:ml-5 md:pl-4 md:pr-3 mb-4">
            <a href="mailto:anthony.axeldisplay@gmail.com" className="hover:underline hover:text-gray-500">
              <EmailIcon className="w-5 h-5" />
            </a>
          </li>
          <li className="md:mb-6 md:ml-5 md:pl-4 md:pr-3 ml-3 mb-4">
            <a href="https://www.linkedin.com/in/anthony-pham-2a64ba103/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gray-500">
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </li>
          <li className="md:mb-6 md:ml-5 md:pl-4 md:pr-3 ml-3">
            <a href="https://github.com/MisterPingouin" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-gray-500">
              <GithubIcon className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </nav>

  </header>
);

export default HeaderPres;
