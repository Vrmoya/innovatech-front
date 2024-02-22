import React from 'react'
import style from './LoginForm.module.css';


const LoginForm = () => {
  return (
    <div className={style.containerLoginForm}>

      <h1 className={style.title}>"Sign Up"</h1>

      <form className= {style.form}>

        <input type="text" />
        <input type="text" />


      </form>

<div className={style.containerButton}>
  <button className={style.button}>Login</button>
  <button className={style.button}>Sign Up</button>

</div>
        
        </div>
  )
}

export default LoginForm