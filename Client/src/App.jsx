import PATHROUTES from "./helpers/PathRoutes";
import { Routes, Route, useLocation } from 'react-router-dom';
import {Users, About, Dashboard, Detail, Error, Home, Landing, LoginView, ResetPassword, ChangePassword} from './views'
import NavBar from "./components/NavBar/NavBar";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { injectCartData, injectUser } from './redux/actions.js'
import LoginGoogle from "./components/LoginGoogle/LoginGoogle.jsx";
import LoginGitHub from "./components/LoginGitHub/LoginGithub.jsx";


function App() {
  const dispatch = useDispatch()
  const location = useLocation(); // Obtener la ubicación actual
  const [hideNavbar, setHideNavbar] = useState(false); // Estado para ocultar la barra de navegación
  const user = useSelector(state => state.user)

  useEffect(() => {
    const user = window.localStorage.getItem('user')
    if(user) dispatch(injectUser(JSON.parse(user)))
  },[])

  useEffect(() => {
    const productsInCart = window.localStorage.getItem('cart')
    if(productsInCart){
      if(productsInCart){
        dispatch(injectCartData(JSON.parse(productsInCart)))
      }
    }
  },[dispatch])

  useEffect(() => {
    // Actualizar el estado para ocultar la barra de navegación si estás en la vista de usuarios
    setHideNavbar(location.pathname === PATHROUTES.USERS);
  }, [location]);

  return (
    <div>
      {/* Renderiza la barra de navegación solo si hideNavbar es false */}
      {!hideNavbar && <NavBar />}


      <Routes>
        <Route path={PATHROUTES.ABOUT} element={<About />}/>
        {user && user.isAdmin && <Route path={PATHROUTES.DASHBOARD} element={<Dashboard />}/>}
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
        <Route path={PATHROUTES.ERROR} element={<Error />}/>
        <Route path={PATHROUTES.HOME} element={<Home />}/>
        <Route path={PATHROUTES.LANDING} element={<Landing />}/>
        <Route path={PATHROUTES.LOGIN} element = {<LoginView/>}/>
        <Route path={PATHROUTES.GITHUB} element = {<LoginGitHub/>}/>
        <Route path={PATHROUTES.GOOGLE} element = {<LoginGoogle/>}/>
        <Route path={PATHROUTES.USERS} element={<Users />}/>
        <Route path={PATHROUTES.RESETPASSWORD} element={<ResetPassword />}/>
        <Route path={PATHROUTES.CHANGEPASSWORD} element={<ChangePassword />}/>
 
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
