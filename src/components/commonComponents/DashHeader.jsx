import { Text, InputLeftElement, Input, InputGroup } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import styles from '../../generalstyle.module.css'
import { WiDayFog } from "react-icons/wi";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";


export const DashHeader = () => {
    let curDate = new Date();
    let curHours = curDate.getHours()

    let greetin;
    if(curHours <= 12){
        greetin = "Good Morning"
    }else if(curHours >12 && curHours <= 17){
        greetin = "Good Afternoon"
    }else{
        greetin = "Good Evening"
    }
  return (
    <div className={styles.dashHeader}>
        <div>
            <Text className={styles.greet}>{greetin} <WiDayFog className={styles.leftIconPad2} /></Text>
            <Text as="b" fontSize="xl">Ekelebe Stunner!</Text>
        </div>
        <div className={styles.dashHead2}>
            <InputGroup className={styles.dashInput}>
                <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' />}
                />
                <Input type='search' placeholder='Phone number' />
            </InputGroup>
            <div className={styles.dashInputIcon1}>
                <IoNotificationsOutline />
            </div>
            <div className={styles.dashInputIcon2}>
                <IoPersonOutline />
            </div>
        </div>
    </div>
  )
}
