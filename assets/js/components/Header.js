import React from 'react';

const Header = () => (
  <header>
    <nav className="w-full h-16 font-titlefont z-50 relative mobile-border">
  <div className="flex items-center justify-between p-4">
    <a href="{{ path('app_home') }}" className="flex items-center mr-6">
      <span className="self-start text-2xl pl-4 font-semibold whitespace-nowrap text-black">AP</span>
    </a>
    <div className="md:mr-9 mt-4">
				<ul className="text-gray-400 font-medium flex flex-wrap">
					<li className="ml-2 pl-3 mb-4 pr-3">
						<a href="mailto:anthony.axeldisplay@gmail.com" className="hover:underline hover:text-gray-500">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
						</a>
					</li>
					<li className="mb-4 pr-3">
						<a href="https://www.linkedin.com/in/anthony-pham-2a64ba103/" target="_blank" rel="noopener noreferrer"  className="hover:underline hover:text-gray-500">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-5 h-5" viewBox="0 0 16 16">
                     <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
						</a>
					</li>
<li className="mb-4 pr-3">
							<a href="https://github.com/MisterPingouin" target="_blank" rel="noopener noreferrer"  className="hover:underline hover:text-gray-500">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
  <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.5 1 1.5 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.2-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.3 2.8.2 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0"></path>								</svg>
							</a>
						</li>
				</ul>
			</div>
      </div>
</nav>

  </header>
);

export default Header;
