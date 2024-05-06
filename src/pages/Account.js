import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import SideBar from '../components/SideBar/SideBar';
import Personal from '../components/Personal/Personal';
import Schedule from '../components/Schedule/Schedule';
import Header2 from '../components/Header2/Header2';

function Account() {
  const location = useLocation();
  return (
    <div className='gen'>
        <SideBar/>
        <Header2/>
        <div className='main-content'>
            <Routes>
                <Route path='/' element={<Personal/>}></Route>
                <Route path='schedule' element={<Schedule/>}></Route>
            </Routes>
        </div>
    </div>
  )
}

export default Account