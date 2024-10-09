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
import { ScrollToTop } from './components/reasurable/ScrollToTop';
import { ModalProvider } from "./components/context/ModalContext"
import ModalWrapper from "./components/context/ModalContextWrapper"
import Dashboard from './components/Dash/dashBoard';
import {ToastContainer } from "react-toastify";
import BlogDetail from './components/cards/BlogDetail';
import PropertyDetail from './components/cards/PropertyDetail';


const App = () => {
  return (
   <ModalProvider>
    <HelmetWrapper>
     <BrowserRouter>
     <ModalWrapper/>
      <Menu/>
      <ScrollToTop/>
      <ToastContainer/>
      <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/aboutUs'element={<AboutUs/>}/>
      <Route path='/listings' element={<Listings/>}/>
      <Route path="/property/:id" element={<PropertyDetail />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogDetail/>} />
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
   </HelmetWrapper>
   </ModalProvider>
  )
}

export default App;