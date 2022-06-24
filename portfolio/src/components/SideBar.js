import React, {useState, useEffect} from 'react';
import { stack as Menu } from 'react-burger-menu';
import Switcher from './Switcher';



function SideBar() {
    const [isOpen, setOpen] = useState(false);


    const handleIsOpen = () => {
        setOpen(!isOpen)
      }
    
      const closeSideBar = () => {
        setOpen(false)
      }

      // const [darkTheme,setDarkTheme] = useState(false);
      // useEffect(() => {
      //   if (document.querySelector('html').classList.contains('dark')) {
      //     setDarkTheme(true);
      //   } else {
      //     setDarkTheme(false);
      //   }
      // }, []);


    return (
        <>
            <Menu right width={240} isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} customBurgerIcon={<img src="./img/burger.svg"  alt="Hamburger Menu button" />}>
                <div className="pb-100">
                    <Switcher />
                </div>
                
            <a className="menu-item title-font font-medium text-white text-xl md:mb-0 pt-8" href="#about">
                Tyler Christensen
            </a>
            <a className="menu-item mr-5 text-white" href="#projects" onClick={closeSideBar}>
                Past Work
            </a>
            <a className="menu-item mr-5 text-white" href="#skills" onClick={closeSideBar}>
                Skills
            </a>
            <a className="menu-item mr-5 text-white" href="#contact" onClick={closeSideBar}>
                Hire Me
            </a>
            
            </Menu>
        </>
      );
};

export default SideBar;