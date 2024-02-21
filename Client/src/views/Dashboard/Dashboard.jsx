import style from './Dashboard.module.css'
import NavDashboard from '../../components/NavDashboard/NavDashboard'
import FormDashboard from '../../components/FormDashboard/FormDashboard'
import SideNavDashboard from '../../components/SideNavDashboard/SideNavDashboard'

const Dashboard = () => {
    return (
        <div className={style.container}>
            <div className={style.sideContent}>
                <SideNavDashboard />
            </div>
            <div className={style.mainContainer}>
                <div className={style.navContent}>
                    <NavDashboard />
                </div>
                <div className={style.formContent}>
                    <FormDashboard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;