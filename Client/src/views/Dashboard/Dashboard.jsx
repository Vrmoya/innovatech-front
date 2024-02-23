import style from './Dashboard.module.css'
import NavDashboard from '../../components/NavDashboard/NavDashboard'
import FormDashboard from '../../components/FormDashboard/FormDashboard'
import SideNavDashboard from '../../components/SideNavDashboard/SideNavDashboard'

const Dashboard = () => {
    return (
        <div className={style.container}>
            <div className={style.sideNavContent}>
                <SideNavDashboard />
            </div>
            <div>
                <div className={style.navContent}>
                    <NavDashboard />
                </div>
                <div className={style.mainContent}>
                    <FormDashboard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;