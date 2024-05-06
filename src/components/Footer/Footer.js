import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
        <div className='container-1'>
            <div className='footer__content'>
                <div className='footer__logo'>
                    <img src='/images/Group24387.png' alt="logo"/>
                </div>
                <div className='footer__go'>
                    <span>Перейти на главный сайт</span>
                    <img src='/images/Arrow30.svg' alt="icon"/>
                </div>
                <div className='footer__politic'>
                    <a href='/'>Политика конфиденциальности</a>
                </div>
                <div className='footer__politic'>
                    <span>© Все права защищены</span>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Footer