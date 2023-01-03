import React from "react";
import { Link } from 'react-router-dom'
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Topbar } from "../../Components/Topbar/Topbar";
import { Button } from "../Form/Button";
import { Input } from "../Form/Input";
import { UseForm } from '../Hooks/UseForm'


import { requiredValidator, minValidator, maxValidator, emailValidator } from "../Validators/Rules";

import "./Login.css";


const Login = () => {

  const [formState, onInputHandler] = UseForm({
    username: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    }
  }, false)

  console.log(formState)

  const loginUser = (event) => {
    event.preventDefault()
    console.log('login')

  }
  return (
    <>
      <Topbar />
      <Navbar />

      <section class="login-register">
        <div class="login">
          <span class="login__title">ورود به حساب کاربری</span>
          <span class="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div class="login__new-member">
            <span class="login__new-member-text">کاربر جدید هستید؟</span>
            <Link class="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" class="login-form">
            <div class="login-form__username">

              <Input
                element="input"
                id="username"
                className="login-form__username-input"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                validations=
                {[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20)

                ]}
                onInputHandler={onInputHandler}
              />

              <i class="login-form__username-icon fa fa-user"></i>
            </div>
            <div class="login-form__password">
              <Input
                element="input"
                id="password"
                className="login-form__password-input"
                type="text"
                placeholder="رمز عبور"
                validations=
                {[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20)
                ]}
                onInputHandler={onInputHandler}

              />
              <i class="login-form__password-icon fa fa-lock-open"></i>
            </div>
            {/* <button class="login-form__btn" type="submit">
              <i class="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span class="login-form__btn-text">ورود</span>
            </button> */}

            <Button className="login-form__btn" type="submit" onClick={loginUser} disabled={false}>
              <i class="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span class="login-form__btn-text">ورود</span>
            </Button>

            <div class="login-form__password-setting">
              <label class="login-form__password-remember">
                <input class="login-form__password-checkbox" type="checkbox" />
                <span class="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label class="login-form__password-forget">
                <a class="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div class="login__des">
            <span class="login__des-title">سلام کاربر محترم:</span>
            <ul class="login__des-list">
              <li class="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li class="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li class="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Login

