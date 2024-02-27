import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {getInfoGoogle} from "../../redux/actions"
import { useDispatch } from "react-redux"

const LoginGoogle = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    console.log("loginGoogle", location);
    const codigoGoogle = location.pathname.split('/')[2]
    console.log(location.pathname.split('/')[2])
    const navigate=useNavigate();
    
    useEffect(()=>{
        dispatch(getInfoGoogle(codigoGoogle))
        navigate("/");
    })
    return (
        <></>
    )
}

export default LoginGoogle;