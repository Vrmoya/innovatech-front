import React from 'react'
import style from './ChangePassword.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ChangePassword = () => {

  const { token } = useParams();

  const [input, setInput] = useState(
    {
      password: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({
      ...input,
      [name]: value
    });
    console.log(input);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = input.password
    try {
      const response = await axios.post(`http://localhost:80/reset-password/${token}`, { password });
      console.log(response.data);
      alert('Contraseña cambiada');
    } catch (error) {
      console.error('Error:', error);
      alert('Envío fallido');
    }
  };


  return (
    <div
      className={style.container}>
      <div className={style.info}>
        <h3 className={style.h3}>Change Password</h3>
        
      </div>

      

      <form onSubmit={handleSubmit}
        className={style.form}>
          <hr />
          <div className={style.option}>
            <h3 className={style.text}>Enter your new password</h3>
        <input
          type="text"
          name="password"
          value={input.password}
          className={style.input}
          onChange={handleChange} />
          </div>

          <div className={style.option}>
          <h3 className={style.text}>Confirm your new password</h3>
        <input
          type="text"
          name="password"
          
          className={style.input}
          onChange={handleChange} />
          </div>


<div className={style.contButton}>
        <button className={style.button}
        type="submit">Change Password</button></div>
      </form>
    </div>
  )
}

export default ChangePassword