import React from 'react'
import Menu from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/About Us';
import Listings from './pages/Listings';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Resgister';
import HelmetWrapper from './components/reasurable/HelmetAsync';


const App = () => {
  return (
   <HelmetWrapper>
     <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/aboutUs'element={<AboutUs/>}/>
      <Route path='/listings' element={<Listings/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
   </HelmetWrapper>
  )
}

export default App;