import { Container, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { HiHome, HiOutlineNewspaper } from "react-icons/hi2";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5"
import {UpgradePackage} from "./UpgradePackage";
import styles from '../../generalstyle.module.css'
// import { UpgradePackage } from '../commonComponents/UpgradePackage'

export const SideBar = () => {
  return (
    <div className={styles.blueBackground}>
       <Link> <HiHome className={styles.fontSpace}/> Home</Link>
       <Link><HiOutlineNewspaper className={styles.fontSpace} /> Library</Link>
       <Link> <IoMailOutline className={styles.fontSpace} /> Message</Link>
       <Link> <IoPersonOutline className={styles.fontSpace} /> Account</Link>
       <UpgradePackage />
       {/* <UpgradePackage /> */}
    </div>
    
  )
}
