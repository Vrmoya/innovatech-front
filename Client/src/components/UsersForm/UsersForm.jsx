import React, { useEffect, useRef, useState } from 'react'
import style from "./UsersForm.module.css";

import { useSelector } from 'react-redux';


const UsersForm = () => {
  const [editMode, setEditMode] = useState({
    username: false,
    email: false,
    newPassword: false
  });

  const formatDate = (dateTimeString) => {
    if (!dateTimeString) return ""; // Manejar el caso cuando no hay fecha
    const [date, time] = dateTimeString.split('T');
    return `${date.split('-').join('/')} ${time.slice(0, 8)}`;
  };

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
      
      
      <div className={style.contImage}>
           {user && user.image && <img className={style.image} src={user.image} alt="User Image" />}
           </div>
        
      



      <form
        className={style.form}
        onSubmit={handleSubmit}
        ref={formRef}
      >



        <div className={style.option}>
          <div className={style.containerspan}>
            <div className={style.info}>
              <h3 className={style.h3}>Name:</h3>
              <h3 className={style.h3}>{user?.name}</h3>
              
            </div>
            
          </div>
          </div>

          <hr />


        <div className={style.option}>

          <div className={style.containerspan}>
            <div className={style.info}>
              <h3 className={style.h3}>E-mail:</h3>
              <h3 className={style.h3}>{user?.email}</h3>
            <div/>
           


            
            </div>
           
           
          
              {/* <div className={style.containerbutton}>
                <button onClick={() => handleEditClick('email')}>Edit</button></div> */}
           

          </div>

        </div>

        <hr />
         <div className={style.option}>

        <div className={style.containerspan}>
            <div className={style.info}>
              <h3 className={style.h3}>Register timestamp:</h3>
              <h3 className={style.h3}>{formatDate(user?.createdAt)}</h3>
              
              
            </div>
          
        </div>

        </div>

      </form>



    </div>
  )
}

export default UsersForm