import React from 'react'
import './CourseDetailBox.css'

export const CourseDetailBox = ({title , subTitle , icon}) => {
    return (
        <div class="col-4">
            <div class="course-boxes__box">
                <div class="course-boxes__box-right">
                    <i className={`course-boxes__box-right-icon fas ${icon}`}></i>
                </div>
                <div class="course-boxes__box-left">
                    <span class="course-boxes__box-left-title">
                        {title} :
                    </span>
                    <span class="course-boxes__box-left--subtitle">
                       {subTitle}
                    </span>
                </div>
            </div>
        </div>
    )
}
