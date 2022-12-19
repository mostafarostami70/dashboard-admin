import React from 'react'
import './AboutUsBox.css'

export const AboutUsBox = ({title , desc , ico}) => {
    return (
            <div class="col-6">
                <div class="about-us__box">
                    <div class="about-us__box-right">
                        {/* <i class="far fa-copyright about-us__icon"></i> */}
                        <i class={ico}></i>
                    </div>
                    <div class="about-us__box-left">
                        <span class="about-us__box-title">{title}</span>
                        <span class="about-us__box-text">{desc}</span>
                    </div>
                </div>
            </div>
    )
}
