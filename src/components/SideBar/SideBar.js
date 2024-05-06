import React, { useContext } from 'react';
import './SideBar.scss';
import { MyContext } from '../../MyContext';

function SideBar() {
   const { sdBar, setSdBar } = useContext(MyContext);
   
  return (
    <div className={sdBar ? 'sidebar-open sidebar' : 'sidebar'}>
       <div className='sidebar__content'>
         
          <div className='sidebar__logo'>
              <img src="/images/logo-1.png" alt="logo"/>
          </div>
          <div className='sidebar-menu'>
             <a href='/' className='sidebar-menu__item'>
                <img src="/images/Расписание.svg" alt='icon'/>
                <span>Расписание</span>
             </a>
             <a href='/' className='sidebar-menu__item'>
                <img src="/images/Dnevnik.svg" alt='icon'/>
                <span>Дневник</span>
             </a>
             <a href='/' className='sidebar-menu__item'>
                <img src="/images/Novosti.svg" alt='icon'/>
                <span>Новости</span>
             </a>
             <a href='/' className='sidebar-menu__item'>
                <img src="/images/Zadanit.svg" alt='icon'/>
                <span>Задания</span>
             </a>
             <a href='/' className='sidebar-menu__item'>
                <img src="/images/Messanger.svg" alt='icon'/>
                <span>Мессенджер</span>
             </a>
             <a href='/' className='sidebar-menu__item'>
                <img src="/images/Dostizh.svg" alt='icon'/>
                <span>Достижения</span>
             </a>
             <a href='/' className='sidebar-menu__item'>
                <img src="/images/online-lesson.svg" alt='icon'/>
                <span>Онлайн-уроки</span>
             </a>
             <a href='/' className='sidebar-menu__item'>
                <img src="/images/courses.svg" alt='icon'/>
                <span>Курсы</span>
             </a>
          </div>
          <div className='sidebar__supp'>
            <img src="/images/support-team.svg" alt='icon'/>
            <span>Служба поддержки</span>
          </div>
      </div>
    </div>
  )
}

export default SideBar