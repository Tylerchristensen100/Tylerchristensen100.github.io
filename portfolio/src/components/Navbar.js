import { ArrowRightIcon } from "@heroicons/react/solid";

import Switcher from './Switcher';

function Navbar() {

    return (
        <header className="bg-gray-800 md:sticky top-0 dark:bg-dark">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex flex-wrap flex-1 items-center">
          <a href="#about" className="title-font font-medium text-black dark:text-white text-xl mb-4 md:mb-0">
              Tyler Christensen
            </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 dark:border-white	flex flex-wrap items-center text-base">
            <a href="#projects" className="mr-5 hover:text-white dark:text-white">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-white dark:text-white">
              Skills
            </a>
          </nav>
        </div>
          <div className="flex flex-wrap flex-1 items-center">
            <Switcher className="mx-auto p-4 items-center text-base  dark:text-white " />
          </div>
        
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 dark:text-white">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      


      
      </div>
    </header>
    );
};








export default Navbar;