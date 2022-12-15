import React from 'react'
import { Container, FormControl, FormLabel, Input, Text, Button } from '@chakra-ui/react'
const SettingPage = () => {
    return (
        <Container centerContent>
            <Text fontSize='3xl' color="red.500">My Settings</Text>
            <FormControl isRequired>
                <FormLabel>What's your name?
                </FormLabel>
                <Input placeholder='' />
                <FormLabel>Email address

                </FormLabel>
                <Input placeholder='' />
                <FormLabel>Mobile Number

                </FormLabel>
                <Input placeholder='' />
                <Button
                    size='md'
                    height='48px'
                    width='200px'
                    border='2px'
                    bg='red.500'
                    color='white'
                >
                    Change Password
                </Button>
            </FormControl>
        </Container>
    )
}

export default SettingPage
