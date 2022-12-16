import { Button, Input } from "@chakra-ui/react"
import {
    useDisclosure,

} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import React from "react"

import CityModal from "./CityModal";
function Location() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button style={{ border: "0px solid", backgroundColor: "white", fontSize: "15px" }} className="locationBorder" onClick={onOpen} rightIcon={<ChevronDownIcon />}>Bengaluru</Button>
            <CityModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}
export default Location
// <Menu>
//     <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//         Bengaluru
//     </MenuButton>
//     <MenuList>
//         <Stack direction='column'>
//             <Box
//                 display='flex'
//                 alignItems='center'
//                 justifyContent='center'
//                 width='100%'
//                 py={1}
//                 bgPosition='center'
//                 bgRepeat='no-repeat'
//                 mb={2}
//             >
//             </Box>
//             <Wrap spacing={4}>
//                 <InputGroup>
//                     <InputLeftElement
//                         pointerEvents='none'
//                         color='gray.300'
//                         fontSize='1.2em'
//                     />
//                     <Input placeholder='Search for Products' />
//                     <InputRightElement children={<SearchIcon color='black.500' />} />
//                 </InputGroup>
//                 <WrapItem>
//                     <Button colorScheme='gray' width="150px" height="150px">  <img src="./imagess/first_Rent.png" alt="" /></Button>

//                 </WrapItem>
//                 <WrapItem>
//                     <Button colorScheme='gray' width="150px" height="150px">  <img src="./imagess/first_Rent.png" alt="" /></Button>

//                 </WrapItem>
//                 <WrapItem>
//                     <Button colorScheme='gray' width="150px" height="150px">  <img src="./imagess/first_Rent.png" alt="" /></Button>

//                 </WrapItem>
//                 <WrapItem>
//                     <Button colorScheme='gray' width="150px" height="150px">  <img src="./imagess/first_Rent.png" alt="" /></Button>

//                 </WrapItem>
//                 <WrapItem>
//                     <Button colorScheme='gray' width="150px" height="150px">  <img src="./imagess/first_Rent.png" alt="" /></Button>

//                 </WrapItem>
//                 <WrapItem>
//                     <Button colorScheme='gray' width="150px" height="150px">  <img src="./imagess/first_Rent.png" alt="" /></Button>

//                 </WrapItem>
//                 <WrapItem>
//                     <Button colorScheme='gray' width="150px" height="150px">  <img src="./imagess/first_Rent.png" alt="" /></Button>

//                 </WrapItem>
//                 <WrapItem>
//                     <Button colorScheme='gray' width="150px" height="150px">  <img src="./imagess/first_Rent.png" alt="" /></Button>

//                 </WrapItem>
//             </Wrap>
//         </Stack>

//     </MenuList>
// </Menu>