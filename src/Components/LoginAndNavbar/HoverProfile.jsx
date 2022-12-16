import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import BlankWishList from "./BlankWishList"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Portal, Stack
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
const HoverProfile = () => {
    const navigate = useNavigate();
    const { toggleAuth } = useContext(AuthContext);
    return (
        <div>
            <Popover>
                <PopoverTrigger>
                    <Button>Ragini</Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>User Profile</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Stack>
                                <Button onClick={() => {
                                    return navigate("/account");
                                }} >My Account</Button>
                                <Button
                                    onClick={() => {
                                        return navigate("/wishlist")
                                    }}
                                >My WishList</Button>
                                <Button
                                    onClick={() => {
                                        return navigate("/Setting")
                                    }}
                                >Settings</Button>
                                <Button onClick={() => {
                                    toggleAuth()
                                    navigate("/");
                                }}>Logout</Button>
                            </Stack>
                        </PopoverBody>
                        <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                </Portal>
            </Popover>
        </div>
    )
}

export default HoverProfile


