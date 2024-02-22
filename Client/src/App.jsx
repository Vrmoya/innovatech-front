import PATHROUTES from "./helpers/PathRoutes";
import { Routes, Route } from 'react-router-dom';
import {About, Dashboard, Detail, Error, Home, Landing, LoginView} from './views'
import NavBar from "./components/NavBar/NavBar";


function App() {

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
    </div>
  )
}

export default App
