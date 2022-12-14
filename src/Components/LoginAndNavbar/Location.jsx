import { Button, Input } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Text,

} from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import React from "react"
import City from "./City";
function Location() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cityData = [
        { id: 1, name: "Delhi", url: "" },
        { id: 2, name: "Mumbai", url: "" },
        { id: 3, name: "NCR", url: "" },
        { id: 4, name: "Kolkata", url: "" },
        { id: 5, name: "Bangalore", url: "" },
        { id: 6, name: "Indore", url: "" },
        { id: 7, name: "Chennai", url: "" },
        { id: 8, name: "Prayagraj", url: "" }
    ]
    return (
        <>
            <Button onClick={onOpen} rightIcon={<ChevronDownIcon />}>Bengaluru</Button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Input />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <City cityData={cityData} />
                    </ModalBody>
                </ModalContent>
            </Modal>
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