import React, { useState } from 'react';
import axios from 'axios';
import style from './ResetPassword.module.css';
import validator from './validation';

import swal from 'sweetalert';





const ResetPassword = () => {


  const [input, setInput] = useState(
    {
      email: '',
    }
  );

  const [errors, setErrors] = useState({});



  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setInput({
      ...input,
      [name]: value
    });
  
    
    console.log(input); 
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validator({ [name]: value })[name] 
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


if (Object.keys(errors).some((key) => errors[key])) {
  
  swal('Error', 'Please fix the errors before submitting the form', 'error');
  return;
}

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
    <div className={style.container}>
      <div className={style.txt}>Reset Password</div>
      <div className={style.info}>Please enter a registered email to receive a password reset email.</div>
      <form onSubmit={handleSubmit}
        className={style.form}>
        <input
          type="text"
          name="email"
          value={input.email}
          className={style.input}
          onChange={handleChange} />
          {errors.email && <p className={style.error}>{errors.email}</p>}
        <button className={style.button}
          type="submit">Send Email</button>
      </form>

    </div>
  )
}

export default ResetPassword

