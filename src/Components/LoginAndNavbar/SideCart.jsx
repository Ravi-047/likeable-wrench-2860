import {
  // Drawer,
  // DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  // Button,
  // Textarea,
  // FormLabel,
  // Box,
  // Select,
  // InputRightAddon,
  // Input,
  // InputLeftAddon,
  // InputGroup,
  // Stack,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { useNavigate } from "react-router-dom";

function DrawerExample({ item, onModalClose }) {
  const { onOpen } = useDisclosure();
  // const firstField = React.useRef();
  const { applyCity } = useContext(CityContext);
  const navigate = useNavigate();
  return (
    <>
      <div
        className="cityLogo"
        lefticon={<AddIcon />}
        colorscheme="teal"
        onClick={() => {
          onOpen();
          applyCity(item.name);
          onModalClose();
          navigate(`/${item.name}`);
        }}
      >
        <Image src={process.env.PUBLIC_URL + item.url} />
        <span className="spanName"> {item.name} </span>
      </div>
      {/* <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>
                        Create a new account
                    </DrawerHeader>


          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Name</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input
                    type="url"
                    id="url"
                    placeholder="Please enter domain"
                  />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>


                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer> */}
    </>
  );
}

export default DrawerExample;
