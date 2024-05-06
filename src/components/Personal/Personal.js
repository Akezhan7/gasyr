import React from 'react';
import './Personal.scss';

function Personal() {
  return (
    <div className='personal'>
        <div className='personal__content'>
            <div className='personal-banner' style={{background: 'url("/images/bg-personal1.png")'}}>
                <div className='personal-banner__title'>Добро пожаловать в <br/> Gasyr Foundation School!</div>
                <div className='personal-banner__subtitle'>Посмотри видео, и ознакомься с платформой <br/> нашей онлайн-школы подробнее</div>
                <div className='personal-banner__button'>Посмотреть видео</div>
            </div>
            <div className='personal-info'>
              <div className='personal-info-item'>
                  <div className='personal-info-item__teacher'>
                      <img src='/images/Ellipse26.png' alt="teacher"/>
                      <div className='personal-info-item__name'>
                          <div>Учитель Адиль Амантай добавил задание</div>
                          <span>Математика SAT</span>
                      </div>
                  </div>
                  <div className='personal-info-item__text'>Формирование антикоррупционной культуры в зарубежных странах</div>
                  <div className='personal-info-item__time'>Срок заканчивается 12.09.2024 г. в 18:00</div>
              </div>
              <div className='personal-info-item'>
                  <div className='personal-info-item__text2'>Хотите узнать результат <br/> своих тестирований?</div>
                 <div className='personal-banner__button'>Перейти в дневник</div>
              </div>
            </div>
            <div className='personal-lessons'>
              <div className='personal-lessons__top'>
                  <div className='personal-lessons__today'>Уроки сегодня</div>
                  <div className='personal-lessons__calendar'>
                      <img src='/images/calendar-line1.svg' alt='icon'/>
                      <span>10 марта</span>
                  </div>
              </div>
              <div className='personal-lessons__list'>
                  <div className='personal-lessons__item'>
                      <div className='personal-lessons__name'>Английский язык </div>
                      <div className='personal-lessons__info'>
                          <div className='personal-lessons__text'>15:00 - 16:00</div>
                          <div className='personal-lessons__teacher'>
                              <img src='/images/Ellipse25.png' alt='teacher'/>
                              <span>Ернур Амашев</span>
                          </div>
                      </div>
                      <div className='personal-lessons__do'>
                        <a href='/' className='personal-lessons__dopurple'>Присоединиться к уроку</a>
                      </div>
                  </div>
                  <div className='personal-lessons__item'>
                      <div className='personal-lessons__name'>Ораторское мастерство </div>
                      <div className='personal-lessons__info'>
                          <div className='personal-lessons__text'>15:00 - 16:00</div>
                          <div className='personal-lessons__teacher'>
                              <img src='/images/Ellipse25.png' alt='teacher'/>
                              <span>Ернур Амашев</span>
                          </div>
                      </div>
                      <div className='personal-lessons__do'>
                        <a href='/' className='personal-lessons__dogreen'>Урок запланирован</a>
                      </div>
                  </div>
                  <div className='personal-lessons__item'>
                      <div className='personal-lessons__name'>IELTS</div>
                      <div className='personal-lessons__info'>
                          <div className='personal-lessons__text'>16:00 - 16:30</div>
                          <div className='personal-lessons__teacher'>
                              <img src='/images/Ellipse25.png' alt='teacher'/>
                              <span>Ернур Амашев</span>
                          </div>
                      </div>
                      <div className='personal-lessons__do'>
                        <a href='/' className='personal-lessons__dosilver'>Посмотреть данные по уроку</a>
                      </div>
                  </div>
                  <div className='personal-lessons__item'>
                      <div className='personal-lessons__name'>SAT</div>
                      <div className='personal-lessons__info'>
                          <div className='personal-lessons__text'>16:30 - 16:45</div>
                          <div className='personal-lessons__teacher'>
                              <img src='/images/Ellipse25.png' alt='teacher'/>
                              <span>Ернур Амашев</span>
                          </div>
                      </div>
                      <div className='personal-lessons__do'>
                        <a href='/' className='personal-lessons__dosilver'>Посмотреть данные по уроку</a>
                      </div>
                  </div>
              </div>
            </div>
            <div className='personal-info'>
            <div className='personal-info-item personal-info-item2'>
                  <div className='personal-info-item__text2 personal-info-item__text3'>Нуждаетесь в <br/> психологической помощи?</div>
                 <div className='personal-banner__button'>Записаться к психологу</div>
              </div>
              <div className='personal-info-item personal-info-item2'>
                  <div className='personal-info-item__text2 personal-info-item__text3'>Не знаете кем хотите <br/> стать в будущем?</div>
                 <div className='personal-banner__button' style={{maxWidth:'290px'}}>Записаться к проф. ориентологу</div>
              </div>
            </div>
            <div className='personal-dost'>
                <div className='personal-dost__top'>
                    <div className='personal-dost__title'>Последнее полученное достижение</div>
                    <div className='personal-dost__icons'>
                        <img src='/images/diamond.svg' alt='icon'/>
                        <img src='/images/gold.svg' alt='icon'/>
                        <img src='/images/iron.svg' alt='icon'/>
                    </div>
                </div>
                <div className='personal-dost__info'>
                    <div className='personal-dost__text'>
                        <div className='personal-dost__give'>Получи больше 5 баллов на пробном тестировании IELTS</div>
                        <div className='personal-dost__hard'>
                          <span>Сложность</span>
                             <img src='/images/Group24450.svg' alt='icon'/>
                        </div>
                    </div>
                    <div className='personal-dost__iron'>
                     <img src='/images/iron1.svg' alt='icon'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Personal