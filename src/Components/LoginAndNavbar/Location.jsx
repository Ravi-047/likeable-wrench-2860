import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import CityModal from "./CityModal";

function Location() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { city } = useContext(CityContext);
  return (
    <>
      <Button
        style={{
          border: "0px solid",
          backgroundColor: "white",
          fontSize: "15px",
        }}
        className="locationBorder"
        onClick={onOpen}
        rightIcon={<ChevronDownIcon />}
      >
        {city}
      </Button>
      <CityModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
export default Location;
