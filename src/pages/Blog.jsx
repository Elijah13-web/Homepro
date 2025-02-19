import React from 'react'
import BlogCard from '../components/cards/blogCard'
import { Pagination } from '../components/Pagination'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotrun'


const Blog = () => {
  return (
    <div className='mx-auto container'>
      <div className='md:pt-32 pt-10 '>
      <Jumbotron title="Welcome to Our Blog" description="Stay informed with the latest trends, tips, and insights from the world of real estate."/>
      </div>
      <BlogCard/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default Blog;