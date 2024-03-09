import React from 'react'
import style from './ChangePassword.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ChangePassword = () => {

    const { token } = useParams();

    const [input, setInput]=useState(
        {
            password: '',
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
            const password=input.password
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
    <h3>Change Password</h3>
        
        <form onSubmit={handleSubmit}
        className={style.form}>
            <input 
            type="text"
            name= "password"
            value={input.password}
            className={style.input} 
            onChange={handleChange}/>

            
            <button type="submit">Change Password</button>
            </form>
    </div>
  )
}

export default ChangePassword