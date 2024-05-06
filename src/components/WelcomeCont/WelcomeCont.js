import React from 'react'
import "./WelcomeCont.scss";
import { Link } from 'react-router-dom';

function WelcomeCont() {
  return (
    <div className='welcome'>
        <div className='container-1'>
        <div className='welcome__content' style={{background:"url('/images/bg-welcome.png')"}}>
                <div className='welcome__block'>
                    <div className='welcome__pretitle'>Платформа все еще в разработке</div>
                    <div className='welcome__title'><h1>Добро пожаловать в сообщество <span>GasyrFoundation</span></h1></div>
                    <div className='welcome__subtitle'>Платформа по подготовке в зарубежные ВУЗы от Gasyr Foundation School</div>
                    <div className='welcome-buttons'>
                        <div className='welcome-button'>
                            <Link to="/sign-in/">
                                <div className='welcome-button-red'>
                                    <span>Войти на платформу</span>
                                    <img src="/images/right-arrow.svg" alt="img"/>
                                </div>
                            </Link>
                            
                        </div>
                        <div className='welcome-button'>
                            <div className='welcome-button-white'>
                                <span>Впервые у нас?</span>
                                <Link to="/sign-up/">
                                    <div className='welcome-button-registr'>
                                        Регистрация
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WelcomeCont