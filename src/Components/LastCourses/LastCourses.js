import React from 'react'
import { CourseBox } from '../CourseBox/CourseBox'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import './LastCourses.css'

export const LastCourses = () => {
    return (
        <div class="courses">
            <div class="container">
                <SectionHeader
                    title={'جدیدترین دوره ها'}
                    decs={'سکوی پرتاپ شما به سمت موفقیت'}
                    btnTitle={'تمامی دوره ها'}
                    btnHref = {'/courses'}
                />
                <div class="courses-content">
                    <div class="container">
                        <div class="row">
                            <CourseBox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
