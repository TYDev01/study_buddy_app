import { Text, InputLeftElement, Input, InputGroup } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import styles from '../../generalstyle.module.css'
import { WiDayFog } from "react-icons/wi";
import { IoNotificationsOutline, IoPersonOutline } from "react-icons/io5";
import { useState } from "react";


export const DashHeader = () => {
        function addZero(i){
        if(i < 10){
            i = "0" + i
        }
        return i;
    }

    let curDate = new Date();
    let curHours = addZero(curDate.getHours())
    let greetin;
    if(curHours <= 11){
        greetin = "Good Morning"
    }else if(curHours =>12 && curHours <= 17){
        greetin = "Good Afternoon"
    }else{
        greetin = "Good Evening"
    }

    const [newClock, setNewClock] = useState()
    setInterval(()=>{
        setNewClock(addZero(curDate.getHours()) + ":" + addZero(curDate.getMinutes()) + ":" + addZero(curDate.getSeconds()))
    },1000)
  return (
    <div className={styles.dashHeader}>
        <div>
            <Text className={styles.greet}>{newClock}<br />{greetin} <WiDayFog className={styles.leftIconPad2} /></Text>
            <Text as="b" fontSize="xl">Ekelebe Stunner.</Text>
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
