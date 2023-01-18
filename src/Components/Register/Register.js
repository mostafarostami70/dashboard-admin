import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Topbar } from "../../Components/Topbar/Topbar";
import { Button } from "../Form/Button";
import { Input } from "../Form/Input";
import { UseForm } from '../Hooks/UseForm'
import { requiredValidator, minValidator, maxValidator, emailValidator } from "../Validators/Rules";

import "./Register.css";


const Register = () => {

  const [formState, onInputHandler] = UseForm({
    name: {
      value: '',
      isValid: false
    },
    username: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    }
  }, false)



  const registerNewUser = (event) => {
    event.preventDefault()

    const newUserInfo =
    {
      "name": formState.inputs.name.value,
      "username": formState.inputs.username.value,
      "email": formState.inputs.email.value,
      "password": formState.inputs.password.value,
      "confirmPassword": formState.inputs.password,
      "phone": "09374107806",
      "role" : "ADMIN"
    }

    console.log(newUserInfo)

    fetch("http://localhost:4000/v1/auth/register",
    {
      method: "POST",
      headers : {
      "Content-Type" : "application/json"
      },
      body : JSON.stringify(newUserInfo),
    }).then(res => res.json()).then(result => console.log(result)).catch(e => console.log(e))
  }




  return (
    <>
      <Topbar />
      <Navbar />

      <section class="login-register">
        <div class="login register-form">
          <span class="login__title">ساخت حساب کاربری</span>
          <span class="login__subtitle">خوشحالیم قراره به جمع ما بپیوندی</span>
          <div class="login__new-member">
            <span class="login__new-member-text">قبلا ثبت‌نام کرده‌اید؟ </span>
            <Link class="login__new-member-link" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" class="login-form">
            <div class="login-form__username">
              <Input
                element="input"
                id="name"
                className="login-form__username-input"
                type="text"
                placeholder="نام و نام خانوادگی"
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
            <div class="login-form__username">
              <Input
                element="input"
                id="username"
                className="login-form__username-input"
                type="text"
                placeholder="نام کاربری"
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
                id="email"
                className="login-form__password-input"
                type="text"
                placeholder="آدرس ایمیل"
                validations=
                {[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(30),
                  emailValidator()
                ]}
                onInputHandler={onInputHandler}
              />

              <i class="login-form__password-icon fa fa-envelope"></i>
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

            <Button
              className={`login-form__btn ${formState.isFormValid ? 'login-form-btn-success' : 'login-form-btn-error '}`}
              type="submit" onClick={registerNewUser} disabled={!formState.isFormValid}>
              <i class="login-form__btn-icon fa fa-user-plus"></i>
              <span class="login-form__btn-text">عضویت</span>
            </Button>
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

export default Register

