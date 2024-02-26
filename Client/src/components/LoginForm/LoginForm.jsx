import React, { useState } from 'react';
import style from './LoginForm.module.css';
import mail2 from '../../assets/mail2.svg'
import password2 from '../../assets/password2.svg'
import user2 from '../../assets/user2.svg'
import google from '../../assets/google.svg'
import github from '../../assets/github.svg'
import loginValidator from './validation';
import { signUpAction, LoginAction } from '../../redux/actions'; // Asegúrate de importar signUpAction desde el archivo correcto

// import { Link } from 'react-router-dom'; 

// import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux'; // Importar useDispatch



const LoginForm = () => {

  const [errors, setErrors]=useState ({});

  const currentForm = useSelector(state => state.currentForm);
console.log("Current form in LoginForm:", currentForm);

const dispatch = useDispatch(); // Obtener la función dispatch
  
  //capturo los datos del form en un estado local
  const [userData, setUserData]=useState ({
    email: "",
    name: "",
    password: "",
  });
  const [focusedField, setFocusedField] = useState(null); // Estado para el campo enfocado


  // const handleChange =(e)=>{
  //   setErrors (loginValidator({...userData, [e.target.name]: e.target.value}))
  //   setUserData({...userData, [e.target.name]: e.target.value})
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Actualizar el estado de userData
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  
    // Calcular los nuevos errores utilizando el valor actualizado de userData
    setErrors(loginValidator({ ...userData, [name]: value }));
    console.log (userData)
  };

 // Actualizar el campo enfocado cuando se enfoca o se desenfoca un campo
 const handleFocus = (fieldName) => {
  setFocusedField(fieldName);
};

const handleBlur = () => {
  setFocusedField(null);
};



  

  //Submit

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   //validar formulario antes de hacer Submit
  //   const formErrors = loginValidator(userData);
  //   if (Object.keys(formErrors).length === 0) {

  //     // Eliminar la propiedad 'name' si el formulario es de login
  //   const formData = { ...userData };
  //   if (currentForm === 'login') {
  //     delete formData.name;
  //   }
  //     // Si no hay errores, enviar el formulario
  //     console.log(formData);

  //     //Acá se envían los datos del user
  //     // dispatch(postUser(userData));
  //     if (currentForm === 'login') {
  //       dispatch(loginAction(formData)); // Dispatch de la acción de inicio de sesión
  //     } else {
  //       dispatch(signUpAction(formData)); // Dispatch de la acción de registro
  //     }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Desestructurar los campos necesarios de userData
    const { name, email, password } = userData;
  
    // Validar el formulario antes de enviarlo
    let formErrors = loginValidator(userData);

    if (currentForm === 'login') {
      // Omitir la validación del campo "name" en el formulario de inicio de sesión
      formErrors = loginValidator(userData, true);
  } else {
      formErrors = loginValidator(userData, false); // Aplicar todas las validaciones en el formulario de registro
  }
    if (Object.keys(formErrors).length === 0) {
      // Enviar los datos al backend mediante la acción correspondiente
      if (currentForm === 'login') {
        dispatch(LoginAction({ email, password }));
      } else {
        dispatch(signUpAction({ name, email, password }));
      }
     
      alert("User success created!");

      //luego de hacer submit limpio los inputs del form
      setUserData({
        name: "",
        email: "",
        password: "",

      })
      const [focusedField, setFocusedField] = useState(null); // Estado para el campo enfocado

  
  } else {
    console.log("Formulario no enviado debido a errores:", formErrors);
    alert("Corrige los errores antes de enviar el formulario.");

  }}

  return (
    <div className={style.containerLoginForm}>

      <h1 className={style.title}>{currentForm === 'login' ? 'Login' : 'Sign Up'}</h1>
      <hr className={style.hr}/>
      

      <form className= {style.form}
      onSubmit= {(e)=> handleSubmit(e)}>

{currentForm === 'signup' && (
    
        <div className={style.group}>
          <div className={style.option}>
      <img src={user2} alt="" className={style.svg}/>
        
        <input className={style.input}
        type="text" 
        value= {userData.name}
        name= "name"
        onChange={(e)=>handleChange(e)}
        placeholder='User Name'
        onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
        /></div>
        {focusedField === 'name' && errors.u1 && (
            <p className={style.error}>{errors.u1}</p>
          )}
          {focusedField === 'name' && errors.u2 && (
            <p className={style.error}>{errors.u2}</p>
          )}
    
        </div> 
        )}



    <div className={style.group}>
    <div className={style.option}>
        <img src={mail2} alt="" className={style.svg}/>

        <input 
        className={style.input}
        type="text" 
        value={userData.email}
        placeholder='E-Mail'
        name= "email"
        onChange={(e)=>handleChange(e)}
        onFocus={() => handleFocus('email')}
              onBlur={handleBlur}/>
        </div>
        {focusedField === 'email' && errors.e1 && (
            <p className={style.error}>{errors.e1}</p>
          )}
          {focusedField === 'email' && errors.e2 && (
            <p className={style.error}>{errors.e2}</p>
          )}
          {focusedField === 'email' && errors.e3 && (
            <p className={style.error}>{errors.e3}</p>
          )}

</div>

<div className={style.group}>
<div className={style.option}>
        <img src={password2} alt="" className={style.svg}/>

        <input 
        className={style.input}
        type="password" 
        value={userData.password}
        placeholder='Password'
        name= "password"
        onChange={(e)=>handleChange(e)}
        onFocus={() => handleFocus('password')}
              onBlur={handleBlur}/>
        </div>
        {focusedField === 'password' && errors.p1 && (
            <p className={style.error}>{errors.p1}</p>
          )}
          {focusedField === 'password' && errors.p2 && (
            <p className={style.error}>{errors.p2}</p>
          )}
        </div>
       

      </form>

<div className={style.forgotpassword}>Lost Password? <span>Click Here</span></div>
<div className={style.containerButton}>

<button className={style.social}
onClick={() => window.location.href = 'http://localhost:3001/auth/google'}>
<img src={google} alt="" className={style.svg}/>
</button>




<button className={style.button}
  onClick={(e) => handleSubmit(e)}>{currentForm === 'login' ? 'Login' : 'Sign Up'}</button>

<button className={style.social}
onClick={() => window.location.href = 'http://localhost:3001/auth/github'}>
<img src={github} alt="" className={style.svg}/>
</button>
  {/* <button className={style.button}
  onClick={() => window.location.href = 'http://localhost:3001/auth/github'}>Github</button>
  <button className={style.button}
  onClick={() => window.location.href = 'http://localhost:3001/auth/google'}>Google</button> */}

</div>
        
        </div>
  )
}

export default LoginForm