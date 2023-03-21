import React from 'react'
import { BrowserRouter,Route, Routes,Navigate } from 'react-router-dom'
import Add from './Addpage/Add'
import Home from './Homepage/Home'
import Login from './Loginpages/Login'


const Routerings = () => {
  return (
    <div><BrowserRouter>
        <Routes>
            {/* <Route path='/Login' element={<Login />}></Route> */}
            <Route path='/' element={<Login />}></Route>
            <Route path='*' element={<Navigate to={"/"}></Navigate>}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Add' element={<Add/>}></Route>
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default Routerings
