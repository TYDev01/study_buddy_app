import { Text, Container, FormControl, FormLabel, Heading, Flex, Box, HStack, Input, Spacer } from "@chakra-ui/react"

import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Signup = () => {

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        userName: yup.string().required().min(4),
        email: yup.string().email().required(),
        password: yup.string().min(8).max(20).required(),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null]),
    })
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema) });
    const locale = []

    const onSubmit = (data)=>{
        localStorage.getItem("data")
        
        console.log(data)
        locale.push(data)
        console.log(locale)
        localStorage.setItem("data", JSON.stringify(locale))

    }
  return (
    <Container maxW="container.xl">
        <section>
            <Text fontSize="lg" pt="6">Welcome to.</Text>
            <Heading size="lg" py="4">Buddy</Heading>
        </section>

        <Flex >
            <Box mr="8" maxW="500">
                <Text as="b" fontSize="md">Signup</Text>
                <form action="" mt="6" onSubmit={handleSubmit(onSubmit)}>
                    <HStack spacing="4" my="6">
                        <FormControl isRequired>
                            <FormLabel color="gray.400" fontSize="sm">First name:</FormLabel>
                            <Input type="text" placeholder="Your first name" required bg="gray.100" {...register("firstName")}/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel color="gray.400" fontSize="sm">Last name:</FormLabel>
                            <Input type="text" placeholder="Your last name" required bg="gray.100" {...register("lastName")} />
                        </FormControl>
                    </HStack>
                    <FormControl mb="6">
                        <FormLabel color="gray.400">Username</FormLabel>
                        <Input type="text" placeholder="Your username" required bg="gray.100" {...register("userName")} />
                    </FormControl>
                    <FormControl>
                        <FormLabel color="gray.400">Email</FormLabel>
                        <Input type="email" placeholder="example@mail.com"required bg="gray.100" {...register("email")} />
                    </FormControl>

                    <HStack spacing="4" my="6">
                        <FormControl isRequired>
                            <FormLabel color="gray.400" fontSize="sm">Password:</FormLabel>
                            <Input type="password" placeholder="Your password" required bg="gray.100" {...register("password")} />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel color="gray.400" fontSize="sm">Re-type Password:</FormLabel>
                            <Input type="password" placeholder="Your password" required bg="gray.100" {...register("confirmpassword")}/>
                        </FormControl>
                    </HStack>
                    <Text textAlign="center">Already have an account? <a>login</a></Text>
                    <Input type="submit" bg="#3751e4" color="white" fontSize="md" value="GET STARTED" mt="6" />
                    <Input type="file" />
                </form>
            </Box>

            <Spacer />


            <Box maxW="600" background="teal.500" p="5" ml="5">
                <h3>About Study Buddy</h3>
                <p>
                    We understand how important it is to commit to a goal. This is the
                    reason we are so invested in helping you reach your study goals. If
                    finding a study buddy and efficiently maximizing your study time
                    sounds good to you, then this is the place for you
                </p>
                <p>Goals</p>
                <div>
                    <ul>
                        <li>Effective study in set time</li>
                        <li>Pass every test with ease</li>
                        <li>Meet buddies that keep you accountable</li>
                    </ul>
                </div>
            </Box>
        </Flex>
    </Container>
  )
}

export default Signup