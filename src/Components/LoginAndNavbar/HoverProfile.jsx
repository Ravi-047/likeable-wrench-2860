import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const HoverProfile = () => {
  const navigate = useNavigate();
  const { toggleAuth } = useContext(AuthContext);
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button className="profilebtn">Ragini Kaushal</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent width="250px" paddingBottom="10px">
            <PopoverArrow />
            <PopoverHeader>Welcome Ragini !!</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <Stack>
                <Button
                  onClick={() => {
                    return navigate("/account");
                  }}
                >
                  My Account
                </Button>
                <Button
                  onClick={() => {
                    return navigate("/wishlist");
                  }}
                >
                  My WishList
                </Button>
                <Button
                  onClick={() => {
                    return navigate("/Setting");
                  }}
                >
                  Settings
                </Button>
                <Button
                  onClick={() => {
                    toggleAuth();
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
};

export default HoverProfile;
