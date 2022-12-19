import React from 'react'
import { LastCourses } from '../../Components/LastCourses/LastCourses'
import { Header } from '../../Components/Header/Header'
import { Landing } from '../../Components/Landing/Landing'
import { AboutUs } from '../../Components/AboutUs/AboutUs'
import { PopularCourses } from '../../Components/PopularCourses/PopularCourses'
import { PresellCourses } from '../../Components/PresellCourses/PresellCourses'
import { LastArticles } from '../../Components/LastArticles/LastArticles'
import { Footer } from '../../Components/Footer/Footer'

const Index = () => {
  return (
    <>
      <Header />
      <Landing />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </>
  )
}

export default Index
