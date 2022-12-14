import React from 'react'
import { Input, Image, Stack, InputGroup, InputLeftElement, InputRightElement, MenuItem, MenuList, WrapItem, Wrap, ButtonGroup, Button, MenuButton, Menu, Box } from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { HStack, Text } from '@chakra-ui/react'
import style from "../NavbarCss/Navbar.css"
import Login from './Login'
import Otp from './Otp'
import Location from "./Location"
const Navbar = () => {
    return (
        <div className='navcss'>
            <HStack spacing='20px'>
                <Box className='logoBox' >
                    <Image
                        className='logo'
                        borderRadius='full'
                        boxSize='100px'
                        src='./imagess/first_Rent.png'
                        alt='Dan Abramov'
                    />
                </Box>
                <Box >
                    <Text fontSize='30px' fontWeight="extrabold" fontStyle="italic" color='tomato' fontFamily="sans-serif">
                        firstRent
                    </Text>
                </Box>
                <Box >
                    <Location />
                </Box>
                <Box   >
                    <Stack className='inputBox'>
                        <InputGroup>
                            <Input className='searchBox' placeholder='Search for Products' />
                            <InputRightElement children={<SearchIcon color='black.500' />} />
                        </InputGroup>
                    </Stack>
                </Box>
                <Box >
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Cart
                        </MenuButton>
                        <MenuList>
                            <MenuItem minH='100px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://placekitten.com/100/100'
                                    alt='Fluffybuns the destroyer'
                                    mr='12px'
                                />
                                <span>Cricket Mania Pacakage</span>
                            </MenuItem>
                            <MenuItem minH='100px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://placekitten.com/120/120'
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span>Simon the pensive</span>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box >

                    <Otp />

                </Box>
            </HStack>
        </div>
    )
}

export default Navbar
