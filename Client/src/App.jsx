import PATHROUTES from "./helpers/PathRoutes";
import { Routes, Route } from 'react-router-dom';
import {About, Dashboard, Detail, Error, Home, Landing, LoginView} from './views'
import NavBar from './components/NavBar/NavBar.jsx'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { injectCartData } from './redux/actions.js'
import Footer from "./components/Footer/Footer";


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const productsInCart = window.localStorage.getItem('cart')
    if(productsInCart){
      if(productsInCart){
        dispatch(injectCartData(JSON.parse(productsInCart)))
      }
    }
  },[])

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
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
