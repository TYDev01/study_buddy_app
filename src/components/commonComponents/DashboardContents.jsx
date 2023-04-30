import { Text, Box, Progress, FormControl, FormLabel, Input, HStack, Textarea, Button } from "@chakra-ui/react"
import styles from '../../generalstyle.module.css'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsArrowRight, BsX } from "react-icons/bs";
import { ModalsHandler } from "./ModalsHandler";
import { AddTask } from "./AddTask";


export const DashboardContents = () => {
    function addZero(i){
        if(i < 10){
            i = "0" + i
        }
    }
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const date = new Date()
    const monthName = date.toLocaleString('default', {month: 'long',});
    const currentDate = date.getDate();
    const currentYeat = date.getFullYear();
    const day = days[date.getDay()];

    
  return (
    <div className={styles.DashCont}>
        <Text as="b" fontSize="3xl">{day} {currentDate} {monthName} </Text>
        <Text fontSize="xs">Keep up the good work</Text>
        <div className={styles.contentFlex}>
            <Box className={styles.taskProgress} maxW="380" height="180" bg="#3751E4" p="5" borderRadius="15" color="#ffffff">
                <Text fontSize="2xl" as="b">Study Friday</Text>
                <Text fontSize="xs" mb="12">{currentDate}, {monthName}, {currentYeat}</Text>
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
            <ModalsHandler 
            content={
                <div className={styles.modalStyle}>
            <Box  className={styles.createTaskFlex} mb="33px">
                <div>
                    <Text as="b" fontSize="3xl">Create Task</Text>
                </div>
                <div>
                    <ModalsHandler content={<Text as="b" fontSize="2xl" color="gray.400" className={styles.closeModal}><BsX /></Text>} />
                </div>
            </Box>
            <form>
                <FormControl isRequired mb="12px">
                    <FormLabel color="gray.400" fontSize="xs">First name</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>                                          
                <FormControl isRequired mb="12px">
                    <FormLabel color="gray.400" fontSize="xs">Date</FormLabel>
                    <Input placeholder="Select Date" size="md" type="date"  />
                </FormControl>
                <HStack mb="12px">
                    <FormControl isRequired>
                        <FormLabel color="gray.400" fontSize="xs">Start Time</FormLabel>
                        <Input placeholder="Time" size="md" type="time"  />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel color="gray.400" fontSize="xs">End Time</FormLabel>
                        <Input placeholder="Time" size="md" type="time"  />
                    </FormControl>
                </HStack>
                <FormControl mt="12px">
                    <FormLabel color="gray.400" fontSize="xs">Description</FormLabel>
                    <Textarea placeholder='Here is a sample placeholder' />                                 
                </FormControl>
                <Input type="submit" bg='#6f84ff' color="#fff" mt="8" maxW="100%" value="Match me" />
            </form>
        </div>
            }
            button={<AddTask />} 
            />
            
        </div>

       
    </div>
  )
}

