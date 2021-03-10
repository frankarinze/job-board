import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png'
import {Button} from '../components/buttons/Button'

const Topbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  return (
    <>
      <nav role='navigation' className="fixed w-full top-0 z-40" >
        <div className='flex justify-between items-center h-16 bg-white text-black  relative shadow-sm  px-4' >
        {/* font-mono */}
          <div className="flex justify-left ">
            <Link to='/' className='px-8'>
              <img className="h-5" src={logo} alt="logo"></img>
            </Link>
            <div className='pr-8 md:block  hidden' >
              <Link to='/' className='p-2 no-underline'> Jobs </Link>
              <Link to='/' className='p-2 no-underline'> Job Review </Link>
              <Link to='/' className='p-2 no-underline'> Salary Review </Link>

            </div>
          </div>
          <Button
          label="Post Jobs"
          />
          <div className='hamburger px-4 cursor-pointer md:hidden' onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" height="25.588" width="28.881" viewBox="0 0 48.881 33.588">
              <g transform="translate(-3 -7.5)">
                <path d="M4.5,18H50.381" transform="translate(0 6.294)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                <path d="M4.5,9H50.381" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
                <path d="M4.5,27H50.381" transform="translate(0 12.588)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
              </g>
            </svg>
          </div>

        </div>

        <div
          className={
            isOpen
              ? 'mobile-menu-tray grid grid-rows-12 text-left px-6 items-left bg-blue-500'
              : 'hidden'
          }
          onClick={toggleNav}
        >
          <Link to='/' className='p-3 no-underline hover:menu-item'> Jobs </Link>
          <Link to='/' className='p-3 no-underline'> Job Review </Link>
          <Link to='/' className='p-3 no-underline'> Salary Review </Link>




        </div>
      </nav>

    </>
  );
};

export default Topbar;