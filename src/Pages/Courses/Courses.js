import React from 'react'
import { Breadcrump } from '../../Components/Breadcrump/Breadcrump'
import { CourseBox } from '../../Components/CourseBox/CourseBox'
import { Footer } from '../../Components/Footer/Footer'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Pagination } from '../../Components/Pagination/Pagination'
import { Topbar } from '../../Components/Topbar/Topbar'
import './Courses.css'

const Courses = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrump
                links={[
                    { id: 1, title: 'خانه ', to: '' },
                    { id: 2, title: 'تمام دوره ها', to: 'courses' },
                ]} />

            <section className='courses'>
                <div className='container'>
                    <div className='coursesContent'>
                        <div className='container'>
                            <div className='row'>
                                    <CourseBox />
                                    <CourseBox />
                                    <CourseBox />
                                    <CourseBox />
                                    <CourseBox />
                                    <CourseBox />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Pagination />
            <Footer />
        </>
    )
}

export default Courses
