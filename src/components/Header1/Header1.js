import React from 'react';
import './Header1.scss';
import { Link } from 'react-router-dom';


function Header1({white, red}) {
  return (
    <div className='header1' style={white ? { background: "#FFFFFF" } : red ? { background: "rgba(186, 32, 37, 1)" } : {}}>
        <div className='container-1'>
            <div className='header1__content'>
                <div className='header1__logo'>
                    <Link to='/welcome/'>{white ? <img src="/images/logo-1.png" alt="logo"/> : red ? <img src="/images/logo2.png" alt="logo"/> : {}}</Link>
                </div>
                <div className='header1__info'>
                    <a href='/' className='header1__tel'>
                        <img src="/images/phone-fill.svg" alt='icon'/>
                        <span style={white ? { color: "rgb(79, 79, 79)" } : red ? { color: "rgba(255, 255, 255, 1)" } : {}}>8 777 123 12 12</span>
                    </a>
                    <div className='header1__social'>
                        {white 
                        ? <>
                            <a href='/'><img src="/images/inst1.svg" alt="icon"/></a>
                            <a href='/'><img src="/images/tg1.svg" alt="icon"/></a>
                            <a href='/'><img src="/images/whatsapp1.svg" alt="icon"/></a>
                            </>
                        : red 
                        ? <>
                        <a href='/'><img src="/images/inst2.svg" alt="icon"/></a>
                        <a href='/'><img src="/images/tg2.svg" alt="icon"/></a>
                        <a href='/'><img src="/images/whats2.svg" alt="icon"/></a>
                        </>
                        : {}
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header1