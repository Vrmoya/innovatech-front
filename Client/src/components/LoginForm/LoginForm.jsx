import React, { useState } from 'react';
import style from './LoginForm.module.css';
import mail2 from '../../assets/mail3.svg'
import password2 from '../../assets/password3.svg'
import user2 from '../../assets/user3.svg'
import google from '../../assets/google2.svg'
import github from '../../assets/github2.svg'
import loginValidator from './validation';
import { signUpAction, LoginAction, changeForm } from '../../redux/actions';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  const [errors, setErrors] = useState({});
  const user = useSelector(state => state.user)
  const navigate = useNavigate()
  console.log(user);
  if (user && user.isAdmin === true) navigate('/dashboard')
  else if (user) navigate('/')
  const currentForm = useSelector(state => state.currentForm);
  const dispatch = useDispatch(); // Obtener la función dispatch

  //capturo los datos del form en un estado local
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [focusedField, setFocusedField] = useState(null); // Estado para el campo enfocado

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado de userData
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));

    // Calcular los nuevos errores utilizando el valor actualizado de userData
    setErrors(loginValidator({ ...userData, [name]: value }));
    // console.log(userData)
  };

  // Actualizar el campo enfocado cuando se enfoca o se desenfoca un campo
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

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
        swal("User created success", "click ok to continue", "success")
        dispatch(changeForm('login'))
      }


      //luego de hacer submit limpio los inputs del form
      setUserData({
        name: "",
        email: "",
        password: "",

      })



    } else {
      console.log("Formulario no enviado debido a errores:", formErrors);
      alert("Corrige los errores antes de enviar el formulario.");

    }
  }

  const handleGoogleSignIn = () => {
    // Despachar una acción de inicio de sesión
    // Redireccionar
    window.location.href = 'http://localhost:80/auth/google';
  };

  const handleGitHubSignIn = () => {
    // Despachar una acción de inicio de sesión
    // Redireccionar
    // const popup = window.open('http://localhost:80/auth/github',"targetWindow")
    window.location.href = 'http://localhost:80/auth/github';
  };

  // console.log(userData);

  return (
    <div className={style.containerLoginForm}>
      <div>
        <h1 className={style.title}>{currentForm === 'login' ? 'Login' : 'Sign Up'}</h1>
        <hr className={style.hr} />
      </div>

      <form className={style.form}
        onSubmit={(e) => handleSubmit(e)}>

        {currentForm === 'signup' && (

          <div className={style.group}>
            <div className={style.option}>
              <img src={user2} alt="" className={style.svg} />

              <input className={style.input}
                type="text"
                value={userData.name}
                name="name"
                onChange={(e) => handleChange(e)}
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
            <img src={mail2} alt="" className={style.svg} />

            <input
              className={style.input}
              type="text"
              value={userData.email}
              placeholder='E-Mail'
              name="email"
              onChange={(e) => handleChange(e)}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur} />
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
            <img src={password2} alt="" className={style.svg} />

            <input
              className={style.input}
              type="password"
              value={userData.password}
              placeholder='Password'
              name="password"
              onChange={(e) => handleChange(e)}
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur} />
          </div>
          {focusedField === 'password' && errors.p1 && (
            <p className={style.error}>{errors.p1}</p>
          )}
          {focusedField === 'password' && errors.p2 && (
            <p className={style.error}>{errors.p2}</p>
          )}
        </div>


      </form>

      <div className={style.containerButton}>
        <div className={style.forgotpassword}>Lost Password? <Link to="/resetpassword"><span className={style.clickHere}>Click Here</span></Link></div>
        <div className={style.divLog}>
          <button className={style.social}
            onClick={handleGoogleSignIn}>
            <img src={google} alt="" className={style.svgAuth} />
          </button>

          <button className={style.button}
            onClick={(e) => handleSubmit(e)}>{currentForm === 'login' ? 'Login' : 'Sign Up'}</button>

          <button className={style.social}
            onClick={handleGitHubSignIn}>
            <img src={github} alt="" className={style.svgAuth} />
          </button>
        </div>
      </div>

    </div>
  )
}

export default LoginForm
