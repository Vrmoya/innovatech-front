import React from 'react'
import style from "./LoginView.module.css";
import LoginForm from '../../components/LoginForm/LoginForm'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const LoginView = () => {

  const location = useNavigate()

  const back = () => {
    location(-1)
  }

  return (
    <div className={style.containerView}>
      <Link className={style.link} to={'/'} onClick={back}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
        Back
      </Link>
      <LoginForm />
    </div>
  )
}

export default LoginView