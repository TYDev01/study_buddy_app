import { Text, Container, FormControl, FormLabel, Heading, Flex, Box, HStack, Input, Spacer } from "@chakra-ui/react"
import {useForm} from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Login = () => {
    const schema = yup.object().shape({
        userName: yup.string().required().min(4),
        password: yup.string().min(8).max(20).required(),
    })

     const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema) });
    const locale = []
    const onSubmit = (data)=>{
        console.log(data)
        
        locale.push(JSON.parse(locale))
        console.log(locale)

    }
  return (
    <Container maxW="container.xl">
        <section>
            <Text fontSize="lg" pt="6">Welcome to</Text>
            <Heading size="lg" py="4">Buddy</Heading>
        </section>

        <Flex >
            <Box maxW="600">
                <Text as="b" fontSize="md">Signup</Text>
                <form action="" mt="6" onSubmit={handleSubmit(onSubmit)}>
                    <FormControl mb="6">
                        <FormLabel color="gray.400">Username</FormLabel>
                        <Input type="text" placeholder="Your username" required bg="gray.100" {...register("userName")} />
                    </FormControl>

                    <HStack spacing="4" my="6">
                        <FormControl isRequired>
                            <FormLabel color="gray.400" fontSize="sm">Password:</FormLabel>
                            <Input type="password" placeholder="Your password" required bg="gray.100" {...register("password")} />
                        </FormControl>
                    </HStack>
                    <Text textAlign="center">Already have an account? <a>login</a></Text>
                    <Input type="submit" bg="#3751e4" color="white" fontSize="md" value="GET STARTED" mt="6" />
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

export default Login