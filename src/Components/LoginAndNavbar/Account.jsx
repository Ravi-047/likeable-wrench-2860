import { Grid, GridItem, Stack, Box, Image, Container, Button, Text, VStack, StackDivider, HStack } from '@chakra-ui/react'
import React from 'react'
import { ChatIcon, LinkIcon, CheckCircleIcon, EmailIcon } from '@chakra-ui/icons'
const Account = () => {
    return (
        <div>
            <Grid

                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1}  >

                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box h='40px' bg='yellow.200'>
                            Live Order
                        </Box>
                        <Box h='40px' bg='tomato'>
                            Undelivered Order
                        </Box>
                        <Box h='40px' bg='pink.100'>
                            <EmailIcon />
                            Refund Status
                        </Box>
                        <Box h='40px' bg='pink.100'>
                            <CheckCircleIcon />
                            Easy Payment
                        </Box>
                        <Box h='40px' bg='pink.100'>
                            <LinkIcon />
                            Refferals
                        </Box>
                        <Box h='40px' bg='pink.100'>
                            <ChatIcon />
                            Request
                        </Box>
                        <Box >
                            <Image src='./imagess/LHS-Banner-new.gif' alt='wishlistimg' />
                        </Box>
                    </VStack>
                </GridItem>
                <GridItem colSpan={2}   >
                    <Box >
                        <Image src='./imagess/liveorder.png' alt='wishlistimg' />
                    </Box>
                </GridItem>
                <GridItem colSpan={2}   >
                    <Container maxW='2xl' centerContent>

                        <Box>
                            <Text fontSize='3xl'> Welcome   Ragini Kaushal,</Text>
                            <Text fontSize='sm'>You are at the right place
                                to start your hassle free lifestyle.</Text>
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
                </GridItem>
                <GridItem colSpan={4}   >
                    <HStack spacing='24px'>
                        <Box h='40px' bg='yellow.200'>
                            <Button>LEDGER</Button>
                        </Box>
                        <Box h='40px' bg='tomato'>
                            <Button> PAYMENT</Button>
                        </Box>
                        <Box h='40px' bg='pink.100'>
                            <Button> RENTOMONEY</Button>
                        </Box>

                    </HStack>
                </GridItem>
            </Grid>
        </div>
    )
}

export default Account
