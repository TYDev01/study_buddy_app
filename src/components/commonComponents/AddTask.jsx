import { Box, Text } from "@chakra-ui/react"
import styles from '../../generalstyle.module.css'
import { ModalsHandler } from "./ModalsHandler"
import { BsPlusCircleDotted } from "react-icons/bs";


export const AddTask = () => {
  return (
    <>
        <Box bg="#3751E4"  className={styles.dashAddTask}>
            <ModalsHandler button={<Text className={styles.addTaskFlex}> Add new Task <BsPlusCircleDotted  className={styles.leftIconPad}/></Text>}/>
        </Box>
    </>
  )
}


