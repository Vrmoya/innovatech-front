import React, {useState} from 'react';
import axios from 'axios';
import style from './ResetPassword.module.css';

// import swal from 'sweetalert';





const ResetPassword = () => {

    
    const [input, setInput]=useState(
        {
            email: '',
        }
    );

    

  const handleChange=(e)=>{
    const {name, value}=e.target;

    setInput({
        ...input,
        [name]:value
    });
    console.log(input); 
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const email=input.email
        try {
          const response = await axios.post('http://localhost:80/forgot-password', { email });
          console.log(response.data);
          alert('Revisa tu casilla de correo');
        } catch (error) {
          console.error('Error:', error);
          alert('Envío fallido');
        }
      };

  return (
    <div className={style.containerForm}>

        <h3>Soy un form</h3>
        
        <form onSubmit={handleSubmit}
        className={style.form}>
            <input 
            type="text"
            name= "email"
            value={input.email}
            className={style.input} 
            onChange={handleChange}/>

            {/* <input 
            type="text"
            name= "code"
            value={input.code}

            className={style.input} 
            onChange={handleChange}/> */}
            <button type="submit">Reset Password</button>
            </form>
            
            </div>
  )}

export default ResetPassword

