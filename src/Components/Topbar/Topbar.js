import React from 'react'
import './Topbar.css'

export const Topbar = () => {
  return (
    <div class="top-bar">
        <div class="container-fluid">
          <div class="top-bar__content">
            <div class="top-bar__right">
              <ul class="top-bar__menu">
                <li class="top-bar__item">
                  <a href="#" class="top-bar__link">محیط زیست</a>
                </li>
                <li class="top-bar__item">
                  <a href="#" class="top-bar__link">جمعیت</a>
                </li>
                <li class="top-bar__item">
                  <a href="#" class="top-bar__link">بهداشت</a>
                </li>
                <li class="top-bar__item">
                  <a href="#" class="top-bar__link">ارتباطات</a>
                </li>
                <li class="top-bar__item">
                  <a href="#" class="top-bar__link">گردشگری</a>
                </li>
                <li class="top-bar__item">
                  <a href="#" class="top-bar__link">مسکن</a>
                </li>
                <li class="top-bar__item">
                  <a href="#" class="top-bar__link">20,000 تومان</a>
                </li>
              </ul>
            </div>
            <div class="top-bar__left">
              <div class="top-bar__email">
                <a href="#" class="top-bar__email-text top-bar__link">
                  info@naghshclick.com
                </a>
                <i class="fas fa-envelope top-bar__email-icon"></i>
              </div>
              <div class="top-bar__phone">
                <a href="#" class="top-bar__phone-text top-bar__link">
                  09921558293
                </a>
                <i class="fas fa-phone top-bar__phone-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}
