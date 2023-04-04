import { Button, Text } from "@chakra-ui/react"
import styles from '../../generalstyle.module.css'
import { TbArrowUpCircle } from "react-icons/tb";

const UpgradePackage = () => {
  return (
    <div className={styles.upgradeWhite}>
        <Text as="b" fontSize='lg'>Upgrade to<br></br>Premium Package!</Text>
        <br />
        <br />
        <Text color="gray.500">Get more features with our premium package. You can add more friends to your tasks</Text>
        <br />
        <br />
        <Button bg="#6f84ff" className={styles.fontSize}>Upgrade Now <TbArrowUpCircle className={styles.leftIconPad} /></Button>
    </div>
  )
}

export default UpgradePackage