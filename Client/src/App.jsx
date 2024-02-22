import PATHROUTES from "./helpers/PathRoutes";
import { Routes, Route } from 'react-router-dom';
import {About, Dashboard, Detail, Error, Home, Landing} from './views'
import NavBar from "./components/NavBar/NavBar";
import Footer from '../src/components/Footer/Footer'

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
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
