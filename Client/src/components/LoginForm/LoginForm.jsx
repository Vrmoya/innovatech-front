import React, { useState } from 'react';
import style from './LoginForm.module.css';
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

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;


    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));


    setErrors(loginValidator({ ...userData, [name]: value }));

  };


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

      formErrors = loginValidator(userData, true);
    } else {
      formErrors = loginValidator(userData, false);
    }
    if (Object.keys(formErrors).length === 0) {
      try {
        if (currentForm === 'login') {
          dispatch(LoginAction({ email, password }));
        } else {
          dispatch(signUpAction({ name, email, password }));
        }
        setUserData({
          name: '',
          email: '',
          password: '',
        });
        if (currentForm === 'signup') {

          dispatch(changeForm('login'));
        } else {
          if (user && user.isAdmin === true) {
            navigate('/dashboard');
          } else if (user) {
            navigate('/');
          }
        }
      } catch (error) {
        console.error('Error:', error);
        swal("Error", "An error occurred", "error");
      }
    } else {
      swal("Please complete all fields", "", "error");
    }
  };

  const handleGoogleSignIn = () => {
    // Despachar una acción de inicio de sesión
    // Redireccionar
    // window.location.href = 'http://localhost:80/auth/google';
    window.location.href = 'https://innovatech-back-production.up.railway.app/auth/google';
  };

  const handleGitHubSignIn = () => {
    // Despachar una acción de inicio de sesión
    // Redireccionar
    // const popup = window.open('http://localhost:80/auth/github',"targetWindow")
    // window.location.href = 'http://localhost:80/auth/github';
    window.location.href = 'https://innovatech-back-production.up.railway.app/auth/github';
  };

  const handleChangeForm = (formType) => {
    console.log("Changing form to:", formType);
    dispatch(changeForm(formType));
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        {currentForm === 'signup' && (
          <>
            <div>
              <label>User name </label>
            </div>
            <div className={style.inputForm}>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
              </svg>
              <input type="text"
                className={style.input}
                placeholder="Enter your User Name"
                value={userData.name}
                name="name"
                onChange={(e) => handleChange(e)}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
              />
            </div>
          </>

        )}
        <div>
          <label>Email </label></div>
        <div className={style.inputForm}>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
          </svg>
          <input type="text"
            className={style.input}
            placeholder="Enter your Email"
            value={userData.email}
            name="email"
            onChange={(e) => handleChange(e)}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label>Password </label></div>
        <div className={style.inputForm}>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
          </svg>

          <input type="password"
            className={style.input}
            placeholder="Enter your Password"
            value={userData.password}
            name="password"
            onChange={(e) => handleChange(e)}
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
          />
        </div>
        {currentForm === 'login' && (
          <Link className={style.span} to={'/resetpassword'}>
            Forgot password?
            {/* <span className={style.span}>Forgot password?</span> */}
          </Link>
        )}
        {currentForm === 'login' && (
          <button className={style.button_submit}>Sign In</button>
        )}
        {currentForm === 'signup' && (
          <button className={style.button_submit}>Sign Up</button>
        )}
        {currentForm === 'login' && (
          <p className={style.p}>Don't have an account?
            <Link to={'/login'}>
              <button className={style.span}
                onClick={() => handleChangeForm('signup')}>Sign Up</button>
            </Link>
          </p>
        )}

        {currentForm === 'signup' && (
          <p className={style.p}>Do you already have an account?
            <Link to={'/login'}>
              <button className={style.span}
                onClick={() => handleChangeForm('login')}>Login</button>
            </Link>
          </p>
        )}

        <p className={style.p}>Or With</p>

        <div className={style.flex_row}>
          <button className={style.btn} onClick={handleGoogleSignIn}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
            </svg>
            Google

          </button>
          
          <button className={style.btn} onClick={handleGitHubSignIn}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
            </svg>
            GitHub
          </button></div></form>
    </div>





    // <div className={style.containerLoginForm}>
    //   <div>
    //     <h1 className={style.title}>{currentForm === 'login' ? 'Login' : 'Sign Up'}</h1>
    //     <hr className={style.hr} />
    //   </div>

    //   <form className={style.form}
    //     onSubmit={(e) => handleSubmit(e)}>

    //     {currentForm === 'signup' && (

    //       <div className={style.group}>
    //         <div className={style.option}>
    //           <img src={user2} alt="" className={style.svg} />

    //           <input className={style.input}
    //             type="text"
    //             value={userData.name}
    //             name="name"
    //             onChange={(e) => handleChange(e)}
    //             placeholder='User Name'
    //             onFocus={() => handleFocus('name')}
    //             onBlur={handleBlur}
    //           /></div>
    //         {focusedField === 'name' && errors.u1 && (
    //           <p className={style.error}>{errors.u1}</p>
    //         )}
    //         {focusedField === 'name' && errors.u2 && (
    //           <p className={style.error}>{errors.u2}</p>
    //         )}

    //       </div>
    //     )}



    //     <div className={style.group}>
    //       <div className={style.option}>
    //         <img src={mail2} alt="" className={style.svg} />

    //         <input
    //           className={style.input}
    //           type="text"
    //           value={userData.email}
    //           placeholder='E-Mail'
    //           name="email"
    //           onChange={(e) => handleChange(e)}
    //           onFocus={() => handleFocus('email')}
    //           onBlur={handleBlur} />
    //       </div>
    //       {focusedField === 'email' && errors.e1 && (
    //         <p className={style.error}>{errors.e1}</p>
    //       )}
    //       {focusedField === 'email' && errors.e2 && (
    //         <p className={style.error}>{errors.e2}</p>
    //       )}
    //       {focusedField === 'email' && errors.e3 && (
    //         <p className={style.error}>{errors.e3}</p>
    //       )}

    //     </div>

    //     <div className={style.group}>
    //       <div className={style.option}>
    //         <img src={password2} alt="" className={style.svg} />

    //         <input
    //           className={style.input}
    //           type="password"
    //           value={userData.password}
    //           placeholder='Password'
    //           name="password"
    //           onChange={(e) => handleChange(e)}
    //           onFocus={() => handleFocus('password')}
    //           onBlur={handleBlur} />
    //       </div>
    //       {focusedField === 'password' && errors.p1 && (
    //         <p className={style.error}>{errors.p1}</p>
    //       )}
    //       {focusedField === 'password' && errors.p2 && (
    //         <p className={style.error}>{errors.p2}</p>
    //       )}
    //     </div>


    //   </form>

    //   <div className={style.containerButton}>
    //     <div className={style.forgotpassword}>Lost Password? <Link to="/resetpassword"><span className={style.clickHere}>Click Here</span></Link></div>
    //     <div className={style.divLog}>
    //       <button className={style.social}
    //         onClick={handleGoogleSignIn}>
    //         <img src={google} alt="" className={style.svgAuth} />
    //       </button>

    //       <button className={style.button}
    //         onClick={(e) => handleSubmit(e)}>{currentForm === 'login' ? 'Login' : 'Sign Up'}</button>

    //       <button className={style.social}
    //         onClick={handleGitHubSignIn}>
    //         <img src={github} alt="" className={style.svgAuth} />
    //       </button>
    //     </div>
    //   </div>

    // </div>
  )
}

export default LoginForm
