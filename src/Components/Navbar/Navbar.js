import React from 'react'
import './Navbar.css'
export const Navbar = () => {
  return (
    <div class="main-header">
        <div class="container-fluid">
          <div class="main-header__content">
            <div class="main-header__right">
              <img src="/images/logo/Logo.png" class="main-header__logo" alt="لوگوی نقش کلیک" />

              <ul class="main-header__menu">
                <li class="main-header__item">
                  <a href="#" class="main-header__link">صفحه اصلی</a>
                </li>

                <li class="main-header__item">
                  <a href="#" class="main-header__link">پکیج های عمومی
                    <i class="fas fa-angle-down main-header__link-icon"></i>
                    <ul class="main-header__dropdown">
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">اجتماعی</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">فرهنگی</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">اقتصادی</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">ورزشی</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">سیاسی</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li class="main-header__item">
                  <a href="#" class="main-header__link">مطالعات جغرافیایی
                    <i class="fas fa-angle-down main-header__link-icon"></i>
                    <ul class="main-header__dropdown">
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">آموزش کالی لینوکس</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">آموزش پایتون سیاه</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">آموزش جاوا اسکریپت سیاه</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">آموزش شبکه</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li class="main-header__item">
                  <a href="#" class="main-header__link">مطالعات فرهنگی
                    <i class="fas fa-angle-down main-header__link-icon"></i>
                    <ul class="main-header__dropdown">
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">توسعه وب</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">جاوا اسکریپت</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">فرانت اند</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li class="main-header__item">
                  <a href="#" class="main-header__link">نظرسنجی و آمار
                    <i class="fas fa-angle-down main-header__link-icon"></i>
                    <ul class="main-header__dropdown">
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">دوره متخصص پایتون</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">دوره هوش مصنوعی با پایتون</a>
                      </li>
                      <li class="main-header__dropdown-item">
                        <a href="#" class="main-header__dropdown-link">دوره متخصص جنگو</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li class="main-header__item">
                  <a href="#" class="main-header__link">فناوری اطلاعات مکانی</a>
                </li>
              </ul>
            </div>

            <div class="main-header__left">
              <a href="#" class="main-header__search-btn">
                <i class="fas fa-search main-header__search-icon"></i>
              </a>
              <a href="#" class="main-header__cart-btn">
                <i class="fas fa-shopping-cart main-header__cart-icon"></i>
              </a>
              <a href="#" class="main-header__profile">
                <span class="main-header__profile-text">مصطفی رستمی</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
