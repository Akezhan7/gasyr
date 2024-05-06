import React, { useContext, useState } from 'react';
import './Header2.scss';
import { MyContext } from '../../MyContext';

function Header2() {
  const { sdBar, setSdBar } = useContext(MyContext);
  const [ headerOpen, setHeaderOpen ] = useState (false);

  const toggleSdBar = () => {
    setSdBar(!sdBar);
  };

  const toggleHeader = () => {
    setHeaderOpen(!headerOpen);
  };

  return (
    <div className='header-2'>
        <div className='header-2__content'>
            <div className='sb-menu' onClick={toggleSdBar}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
              </svg>
            </div>
            <div className='header-2__hello'>
                <span className='header-2__name'>Привет, Александр! {sdBar}</span>
                <span className='header-2__see'>Мы рады видеть тебя в Gasyr</span>
            </div>
            <div className='header-2__info'>
                <div className='header-2__img'>
                    <img src='/images/Avatar.png' alt='avatar'/>
                </div>
                <div className='header-2__text'>
                    <span className='header-2__textname'>Александр О.</span>
                    <span className='header-2__textstatus'>Студент</span>
                </div>
            </div>
            <div className={headerOpen ? 'header-2__info header-2-info-op header-2-open' : 'header-2__info header-2-info-op'}>
                <div className='header-2__img'>
                    <img src='/images/Avatar.png' alt='avatar'/>
                </div>
                <div className='header-2__text'>
                    <span className='header-2__textname'>Александр О.</span>
                    <span className='header-2__textstatus'>Студент</span>
                </div>
            </div>
            <div className='header-2__show' onClick={toggleHeader}>
                <img src='/images/arrow-down.svg' alt='arrow'/>
            </div>
        </div>
    </div>
  )
}

export default Header2