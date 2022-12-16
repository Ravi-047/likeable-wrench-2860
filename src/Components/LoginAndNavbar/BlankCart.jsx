import React from 'react'
import { Button, Image, Box, Text, Container } from '@chakra-ui/react'

const BlankCart = () => {
    return (
        <Container alignItems="center">
            <Box boxSize='sm'>
                <Image src='./imagess/no-cart.webp' alt='Dan Abramov' />
            </Box>
            <Text>No items in cart</Text>
            <p>Add a few items to your cart and come back here for an
                express checkout process!</p>

            <Button bg="red.500" >Browse catalogue</Button>
        </Container>
    )
}

export default BlankCart
