import React from 'react'
import { Container, Box, Image, Text, Button } from '@chakra-ui/react'
const BlankWishList = () => {
    return (
        <Container maxW='2xl' bg='' centerContent padding="50px">
            <Box boxSize='sm'>
                <Image src='./imagess/wishlist.png' alt='wishlistimg' />
            </Box>
            <Box>
                <Text fontSize='4xl'> Your wishlist is empty!</Text>
                <Text fontSize='sm'>Explore more and shortlist some items.</Text>
            </Box>
            <Box>
                <Button
                    size='md'
                    height='48px'
                    width='200px'
                    border='2px'
                    bg='red.500'
                    color='white'
                >
                    Button
                </Button>
            </Box>

        </Container>
    )
}

export default BlankWishList
