// RecoveryPass.jsx

import React, { useState } from 'react';
import style from "../Recovery/Recover.module.css"

const RecoveryPass = ({ onRecoverPassword }) => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función proporcionada por el componente padre para manejar la recuperación de contraseña
    onRecoverPassword(email);
  };

  return (
    <div className={style.container}>
      
      <h2 className={style.title} >Forgot Your Password?</h2>
      <hr className={style.hr} />
      <p className={style.forgottpassword}>Please enter your email address to recover your password.</p>
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          required
          className={style.input}
          placeholder='Ingrese Email'
        />
        <button type="submit" className={style.button}>Recover Password</button>
      </form>
    </div>
  );
};

export default RecoveryPass;
