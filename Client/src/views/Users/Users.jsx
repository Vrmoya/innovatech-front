import React, {useState} from 'react'
import style from "./Users.module.css";
import UsersForm from '../../components/UsersForm/UsersForm';
import SideNavPanelUser from '../../components/SideNavPanelUser/SideNavPanelUser';
import OrdersUser from '../../components/OrdersUser/OrdersUser';
import {  useSelector } from 'react-redux';
import Settings from '../../components/Settings/Settings';


const Users = () => {
  const user = useSelector(state => state.user)
  console.log("Datos del usuario:",  user);
  
  //Estado para controlar la selección realizada
  const [selectedOption, setSelectedOption] = useState('profile');

  // Handler para cambiar la vista
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };


  // Renderizar el componente correspondiente según la opción seleccionada
  const renderComponent = () => {
    switch (selectedOption) {
      case 'profile':
        return <UsersForm />;
      case 'orders':
        return <OrdersUser />;
        case 'settings':
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <div className={style.containerView}>
     
      <SideNavPanelUser onOptionChange={handleOptionChange}></SideNavPanelUser>
      
      <div className={style.view}>
      
      {renderComponent()}
      
      </div>
  
    </div>
  )
}

export default Users