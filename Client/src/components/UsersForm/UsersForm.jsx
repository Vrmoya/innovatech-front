import React from 'react'
import style from "./UsersForm.module.css";
import {useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';




const UsersForm = () => {

    //estados locales del form


    const [userData, setUserData] = useState({
        username: 'Hola',
        email: 'hola@correo.com',
        oldPassword: '',
        newPassword: ''
      });


//Manejo de errores


//Handler que maneja el cambio en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value
        });
      };
    
//Handler que despacha el cambio de una propiedad, ya sea email, contraseña o nameUser      
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Datos actualizados:', userData);
      };






  return (
    <div className={style.containerform}>UsersForm

        <form 
        className={style.form}
        onSubmit={handleSubmit}
        >



<div className={style.option}>
   
<input 
onChange={handleChange}
placeholder='User Name'
>
    
</input>
<button>Change username</button>
</div>

<div className={style.option}>
    
<input
onChange={handleChange}
placeholder='E-mail'></input>
<button>Change e-mail</button>
</div>

<div className={style.option}>
    
<input
onChange={handleChange}
placeholder='NewPassword'></input>
<button>Change Password</button>
</div>

        </form>



    </div>
  )
}

export default UsersForm