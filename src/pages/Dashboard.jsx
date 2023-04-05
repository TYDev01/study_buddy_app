import {DashHeader} from '../components/commonComponents/DashHeader'
import {DashboardContents} from '../components/commonComponents/DashboardContents'
import {SideBar} from '../components/commonComponents/SideBar'
import styles from './styleDashboard.module.css'

export const Dashboard = () => {
  return (
    <div className={styles.myDisplay}>
        <div >
            <SideBar />
        </div>
        <div className={styles.rightSide}>
            <DashHeader />
            <DashboardContents />
        </div>
    </div>
  )
}
