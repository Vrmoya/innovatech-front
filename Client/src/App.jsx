import PATHROUTES from "./helpers/PathRoutes";
import { Routes, Route } from 'react-router-dom';
import {About, Create, Detail, Error, Home, Products} from './views'
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path={PATHROUTES.ABOUT} element={<About />}/>
        <Route path={PATHROUTES.CREATE} element={<Create />}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
        <Route path={PATHROUTES.ERROR} element={<Error />}/>
        <Route path={PATHROUTES.HOME} element={<Home />}/>
        <Route path={PATHROUTES.PRODUCTS} element={<Products />}/>
      </Routes>
    </div>
  )
}

export default App
