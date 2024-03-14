// import React from 'react'
// import style from './ChangePassword.module.css';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import swal from 'sweetalert';
// import validator from './validation';

// const ChangePassword = () => {

//   const { token } = useParams();

//   const [errors, setErrors]=useState({})

//   const [input, setInput] = useState(
//     {
//       password: '',
//       confirmPassword: '' 
//     }
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setInput({
//       ...input,
//       [name]: value
//     });
//     console.log(input); 
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: validator({ [name]: value })[name] 
//     }));
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (Object.keys(errors).some((key) => errors[key])) {
  
//       swal('Error', 'Please fix the errors before submitting the form', 'error');
//       return;
//     }

//     if (input.password !== input.confirmPassword) {
//       swal("The passwords do not match", "", "error");
//       return;
//     }
      
    
//     try {
//       const response = await axios.post(`https://innovatech-back-production.up.railway.app/reset-password/${token}`, { password: input.password });
//       console.log(response.data);
//       swal("Check your e-mail box", "", "success");
//     } catch (error) {
//       console.error('Error:', error);
//       swal("Send Failed", "", "error");
//     }
//   };


//   return (
//     <div
//       className={style.container}>
//       <div className={style.info}>
//         <h3 className={style.h3}>Change Password</h3>
        
//       </div>

      

//       <form onSubmit={handleSubmit}
//         className={style.form}>
//           <hr />
//           <div className={style.option}>
//             <h3 className={style.text}>Enter your new password</h3>
//         <input
//           type="password"
//           name="password"
//           value={input.password}
//           className={style.input}
//           onChange={handleChange} />
//           {errors.password && <p className={style.error}>{errors.password}</p>}
//           </div>

//           <div className={style.option}>
//           <h3 className={style.text}>Confirm your new password</h3>
//         <input
//           type="password"
//           name="confirmPassword"
//           value={input.confirmPassword}
          
//           className={style.input}
//           onChange={handleChange} />
//           {errors.confirmPassword && <p className={style.error}>{errors.confirmPassword}</p>}
//           </div>


// <div className={style.contButton}>
//         <button className={style.button}
//         type="submit">Change Password</button></div>
//       </form>
//     </div>
//   )
// }

// export default ChangePassword

import React, { useState } from 'react';
import style from './ChangePassword.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import validator from './validation';

const ChangePassword = () => {
  const { token } = useParams();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    password: '',
    confirmPassword: ''
  });

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

    const fieldErrors = {};
    for (const key in input) {
      fieldErrors[key] = validator({ [key]: input[key] })[key];
    }

    setErrors(fieldErrors);

    if (Object.values(fieldErrors).some((error) => error)) {
      swal('Error', 'Please fix the errors before submitting the form', 'error');
      return;
    }

    if (input.password !== input.confirmPassword) {
      swal("The passwords do not match", "", "error");
      return;
    }

    try {
      const response = await axios.post(`https://innovatech-back-production.up.railway.app/reset-password/${token}`, { password: input.password });
      console.log(response.data);
      swal("Check your e-mail box", "", "success");
      window.location.href = 'https://innovatechok.vercel.app/login';
    } catch (error) {
      console.error('Error:', error);
      swal("Send Failed", "", "error");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h3 className={style.h3}>Change Password</h3>
      </div>
      <form onSubmit={handleSubmit} className={style.form}>
        <hr />
        <div className={style.option}>
          <h3 className={style.text}>Enter your new password*</h3>
          <input
            type="password"
            name="password"
            value={input.password}
            className={style.input}
            onChange={handleChange} />
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div>
        <div className={style.option}>
          <h3 className={style.text}>Confirm your new password*</h3>
          <input
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            className={style.input}
            onChange={handleChange} />
          {errors.confirmPassword && <p className={style.error}>{errors.confirmPassword}</p>}
        </div>
        <div className={style.contButton}>
          <button className={style.button} type="submit">Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;