import React from 'react'
import style from './LoginForm.module.css';
import mail2 from '../../assets/mail2.svg'
import password2 from '../../assets/password2.svg'
import user2 from '../../assets/user2.svg'


const LoginForm = () => {
  return (
    <div className={style.containerLoginForm}>

      <h1 className={style.title}>"Sign Up"</h1>

      <form className= {style.form}>
        <div className={style.option}>
      <img src={user2} alt="" className={style.svg}/>
        <input type="text" 
        placeholder='User'/>
        </div>
    
    <div className={style.option}>
        <img src={mail2} alt="" className={style.svg}/>

        <input type="text" 
        placeholder='E-Mail'/>

</div>

<div className={style.option}>
        <img src={password2} alt="" className={style.svg}/>

        <input type="text" 
        placeholder='Password'/>
        </div>
       

      </form>

<div className={style.containerButton}>
  <button className={style.button}>Login</button>
  <button className={style.button}>Sign Up</button>

</div>
        
        </div>
  )
}

export default LoginForm