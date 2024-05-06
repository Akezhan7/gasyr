import React from 'react';
import './SignUpCont.scss';
import { Link } from 'react-router-dom';

function SignUpCont() {
  return (
    <div className='sign-in'>
    <div className='sign-in__wrap'>
        <div className='container-1'>
            <div className='sign-in__content'>
                <div className='sign-in__man'>
                    <img src='/images/Group24583.png' alt='man'/>
                </div>
                <div className='sign-in-form'>
                    <form action='#' className='sign-in-form__form'>
                        <div className='sign-in-form__title'>Давайте знакомиться!</div>
                        <div className='sign-in-form__inputs'>
                            <input name='name' type='text' placeholder='Имя и Фамилия'/>
                            <input name='tel' type='text' placeholder='+7 (___) ___-__-__ '/>
                            <input name='pass' type='password' placeholder='Пароль'/>
                            <input name='pass' type='password' placeholder='Повторите пароль'/>
                        </div>
                        <Link to="/account/"><button>Стать частью Gasyr</button></Link>
                        <div className='sign-in-form__social'>
                            <div className='sign-in-form__socialtitle'>Зарегистрироваться через соц. сети</div>
                            <div className='sign-in-form__icons'>
                                <img src='/images/google-social.svg' alt='icon'/>
                                <img src='/images/apple-social.svg' alt='icon'/>
                                <img src='/images/vk-social.svg' alt='icon'/>
                            </div>
                        </div>
                        <div className='sign-in-form__problem'><a href='/'>Проблемы со входом?</a></div>
                    </form>
                </div>
            </div> 
    </div>
</div>
</div>
  )
}

export default SignUpCont