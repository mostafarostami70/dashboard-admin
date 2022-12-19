import React from 'react'
import { SectionHeader } from '../SectionHeader/SectionHeader'
import { AboutUsBox } from '../AboutUsBox/AboutUsBox'
import './AboutUs.css'

export const AboutUs = () => {
    return (
        <>
            <div className='about-us'>
                <div className="container">
                    <SectionHeader
                        title = {'ما چه کمکی بهتون می کنیم؟'}
                        decs  = {'از اونجایی که نقش کلیک یک آکادمی خصوصی هست'}
                    />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <AboutUsBox 
                        title ={'دوره های اختصاصی'}
                        desc = {'پشتیبانی و کیفیت بالا'}
                        ico = {'far fa-copyright about-us__icon'}
                    />
                    <AboutUsBox 
                        title ={' پکیج های موضوعی'}
                        desc = {'جدول، نقشه ، نمودار ، متن'}
                        ico = {'fas fa-leaf about-us__icon'}
                    />
                </div>
            </div>
        </>
    )
}
