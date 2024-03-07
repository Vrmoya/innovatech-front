import React, { useEffect, useRef, useState } from 'react'
import style from "./UsersForm.module.css";

import { useSelector } from 'react-redux';


const UsersForm = () => {
  const [editMode, setEditMode] = useState({
    username: false,
    email: false,
    newPassword: false
  });

  // Referencia al contenedor del formulario
  const formRef = useRef();

  // Función para cambiar al modo de edición cuando se hace clic en un span
  const handleEditClick = (field) => {
    setEditMode({
      ...editMode,
      [field]: true
    });
  };
  // Función para manejar la cancelación de la edición
  const handleCancelClick = () => {
    setEditMode(false);
  };


  // Función para manejar el clic fuera del formulario
  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setEditMode({
        username: false,
        email: false,
        newPassword: false
      });
    }
  };

  // Efecto para agregar el manejador de clic al documento cuando se está en modo de edición
  useEffect(() => {
    if (Object.values(editMode).some(mode => mode)) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [editMode]);

  const user = useSelector(state => state.user)
  console.log("Datos del usuario:", user);


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
    <div className={style.containerform}>



      <form
        className={style.form}
        onSubmit={handleSubmit}
        ref={formRef}
      >



        <div className={style.option}>
          <div className={style.containerspan}>
            <div className={style.info}>
              <h2 className={style.h2}>{user?.name}</h2>
              <div className={style.data}>{editMode.username && (
                <>
                <input
                className={style.input}
                name="username"
                value={userData.username}
                onChange={handleChange}
                placeholder='new username'/>
                </>
              )}</div>
              
            </div>
            <div className={style.containerbutton}>
            <button onClick={() => handleEditClick('username')}>Edit</button>


            </div>
            
            
              
            
          </div>

        </div>


        <div className={style.option}>

          <div className={style.containerspan}><span >{user?.email}</span>
            {editMode.email ? (
              <input
                className={style.input}
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder='new email'>

              </input>
            ) : (
              <div className={style.containerbutton}>
                <button onClick={() => handleEditClick('email')}>Edit</button></div>
            )}

          </div>

        </div>

        <div className={style.option}>

          <div className={style.containerspan}>
            <span className={style.span}>Password</span>
            {editMode.password ? (
              <input
                className={style.input}
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder='new password'>

              </input>
            ) : (<div className={style.containerbutton}>
              <button onClick={() => handleEditClick('password')}>Edit</button></div>
            )}
          </div>

        </div>

      </form>



    </div>
  )
}

export default UsersForm