import React, { useState } from 'react';
import axios from 'axios';
import style from './ResetPassword.module.css';

import swal from 'sweetalert';





const ResetPassword = () => {


  const [input, setInput] = useState(
    {
      email: '',
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
    const email = input.email
    try {
      const response = await axios.post('https://innovatech-back-production.up.railway.app/forgot-password', { email });
      console.log(response.data);
      swal("E-mail sent successfully", "click ok to continue", "success");
    } catch (error) {
      console.error('Error:', error);
      swal("Error sending e-mail", "Please check fields data and try again later", "error");
    }
  };

  return (
    <div className={style.containerForm}>

      <div className={style.txt}>Reset Password</div>
      <hr />
      <div className={style.info}>Please enter a registered email to receive a password reset email.</div>
      <form onSubmit={handleSubmit}
        className={style.form}>
        <input
          type="text"
          name="email"
          value={input.email}
          className={style.input}
          onChange={handleChange} />
        <button className={style.button}
          type="submit">Send Email</button>
      </form>

    </div>
  )
}

export default ResetPassword

