import PATHROUTES from "./helpers/PathRoutes";
import { Routes, Route } from 'react-router-dom';
import {About, Dashboard, Detail, Error, Home, Landing, LoginView} from './views'
import NavBar from './components/NavBar/NavBar.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { injectCartData, injectUser } from './redux/actions.js'
import LoginGoogle from "./components/LoginGoogle/LoginGoogle.jsx";
import LoginGitHub from "./components/LoginGitHub/LoginGithub.jsx";

function App() {
  const dispatch = useDispatch()

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

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={PATHROUTES.ABOUT} element={<About />}/>
        <Route path={PATHROUTES.DASHBOARD} element={<Dashboard />}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
        <Route path={PATHROUTES.ERROR} element={<Error />}/>
        <Route path={PATHROUTES.HOME} element={<Home />}/>
        <Route path={PATHROUTES.LANDING} element={<Landing />}/>
        <Route path={PATHROUTES.LOGIN} element = {<LoginView/>}/>
        <Route path={PATHROUTES.GITHUB} element = {<LoginGitHub/>}/>
        <Route path={PATHROUTES.GOOGLE} element = {<LoginGoogle/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
