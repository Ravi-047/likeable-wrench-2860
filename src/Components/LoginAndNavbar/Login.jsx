import { Button, ButtonGroup, Box, PopoverFooter, PopoverBody, PopoverCloseButton, PopoverArrow, PopoverHeader, PopoverContent, PopoverTrigger, Popover, Image, Input, Text } from "@chakra-ui/react"
import React from "react"
import Otp from "./Otp"
function Login() {
    const initialFocusRef = React.useRef()
    return (
        <Popover
            initialFocusRef={initialFocusRef}
            placement='bottom'
            closeOnBlur={false}
        >
            <PopoverTrigger>
                <Button>LOGIN/SIGNUP</Button>
            </PopoverTrigger>
            <PopoverContent color='white' bg='orange.400' borderColor='blue.800'>
                <PopoverCloseButton />
                <PopoverBody>
                    <Image src="./imagess/first_Rent.png" />
                    <Text>Enter your number to
                        Signup or Login</Text>
                    <Input placeholder="Enter Your Number" />
                </PopoverBody>
                <PopoverFooter
                    border='0'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    pb={4}
                >
                    <Box fontSize='sm'>0/10</Box>
                    <ButtonGroup size='sm'>
                        <Button colorScheme='green'>Continue  </Button>
                    </ButtonGroup>
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}
export default Login