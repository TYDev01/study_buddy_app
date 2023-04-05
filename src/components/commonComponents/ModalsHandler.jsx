import { Box, Text } from "@chakra-ui/react"
import { useState } from "react"

export const ModalsHandler = (props) => {
  const [modal, setModal]= useState(false)
  const toggleModal = ()=>{
    setModal(!modal)
  }
  return (
    <>
      <button onClick={toggleModal}>{props.button}</button>
      {modal && (
        props.content
      )}
      
    </>
  )
}
