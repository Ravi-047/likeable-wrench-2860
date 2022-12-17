import React from 'react';
import { Link, useParams } from "react-router-dom";
import { Input, Image, Stack, InputGroup, InputLeftElement, InputRightElement, MenuItem, MenuList, WrapItem, Wrap, ButtonGroup, Button, MenuButton, Menu, Box } from '@chakra-ui/react'
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { useContext } from 'react';
import { CityContext } from '../../Context/CityContext';
import { HStack, Text } from '@chakra-ui/react'
import style from "../NavbarCss/Navbar.css"
import Otp from './Otp'
import Location from "./Location"

const Navbar = () => {
    const { city } = useContext(CityContext);
    const cartItem = [];
    return (
        <div className='navcss'>
            <HStack spacing='20px'>
                <Box className='logoBox' >
                    <Link to={`/${city}`}  >
                        <Image
                            className='logo'
                            borderRadius='full'
                            boxSize='100px'
                            src='./imagess/first_Rent.png'
                            alt='Dan Abramov'

                        /></Link>

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
                    {
                        cartItem.length === 0 ? <Link to="/blank">
                            <strong>Cart</strong>
                        </Link>
                            :
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
                    }
                </Box>

                <Box >
                    <Otp />
                </Box>
            </HStack>
        </div>
    )
}

export default Navbar
