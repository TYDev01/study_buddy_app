import DashHeader from '../components/commonComponents/DashHeader'
import SideBar from '../components/commonComponents/SideBar'
import styles from './styleDashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.myDisplay}>
        <div >
            <SideBar />
        </div>
        <div className={styles.rightSide}>
            <DashHeader />
        </div>
    </div>
  )
}

export default Dashboard