import { Text, Box, Progress } from "@chakra-ui/react"
import styles from '../../generalstyle.module.css'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsArrowRight, BsPlusCircleDotted } from "react-icons/bs";
const DashboardContents = () => {
  return (
    <div className={styles.DashCont}>
        <Text as="b" fontSize="3xl">January, 13</Text>
        <Text fontSize="xs">Keep up the good work</Text>
        <Box maxW="280" height="180" bg="#6f84ff" p="5" borderRadius="15" color="#ffffff">
            <Text fontSize="2xl" as="b">Study Friday</Text>
            <Text fontSize="xs" mb="12">Today, January, 13</Text>
            <Text>Task Done: 6/10</Text>
            <Progress colorScheme="blue" mt="5px" value={60} className={styles.progressBar} />
        </Box>
        <Box maxW="480" height="180" bg="#ffffff" p="5" borderRadius="15" color="#000" className={styles.currentTask}>
            <div className={styles.tasksTitle}>
                <div>
                    <Text fontSize="xs">Task Title</Text>
                    <Text fontSize="lg" as="b" mb="12">Content Writing</Text>
                </div>
                <div>
                    <BiDotsHorizontalRounded className={styles.titleIcons}/>
                </div>
            </div>
            <div className={styles.tasksTitle}>
                <div>
                    <Text fontSize="xs">Duration</Text>
                    <Text as="b">10:00am-12:00pm</Text>
                </div>
                <div>
                    <Text as="b" color="#6f84ff"><span color="green">&#9733;</span> 5 points</Text>
                </div>
            </div>
            <div className={styles.tasksTitle}>
                <div>
                    <Text fontSize="xs">Task Buddy</Text>
                    <Text fontSize="lg">Amaka Ude</Text>
                </div>
                <div>
                    <BsArrowRight />
                </div>
            </div>
        </Box>
        <Box  bg="#6f84ff">
            <Text>Add new Task <BsPlusCircleDotted /></Text>
        </Box>
    </div>
  )
}

export default DashboardContents