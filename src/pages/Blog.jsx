import React from 'react'
import BlogCard from '../components/cards/blogCard'
import { Pagination } from '../components/Pagination'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotrun'


const Blog = () => {
  return (
    <div>
      <Jumbotron title="Welcome to Our Blog" description="Stay informed with the latest trends, tips, and insights from the world of real estate."/>
      <BlogCard/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default Blog;