import React from 'react'
import Menu from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/About Us';
import Listings from './pages/Listings';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


const App = () => {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/aboutUs'element={<AboutUs/>}/>
      <Route path='/listings' element={<Listings/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact'element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;