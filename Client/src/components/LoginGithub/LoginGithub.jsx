import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {getInfoGithub} from "../../redux/actions"
import { useDispatch } from "react-redux"

const LoginGithub = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const codigoGithub= location.pathname.split('/')[2]
    console.log(location.pathname.split('/')[2])
    const navigate=useNavigate();
    
    useEffect(()=>{
        dispatch(getInfoGithub(codigoGithub))
        navigate("/");
    })
    return (
        <div>
            hola
        </div>
    )
}

export default LoginGithub