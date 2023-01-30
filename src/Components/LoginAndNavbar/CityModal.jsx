import React, { useState } from "react";
import City from "./City";
import { Input } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
export default function CityModal({ isOpen, onClose }) {
  const cityData = [
    { id: 1, name: "Bangalore", url: "/imagess/Banglore.png" },
    { id: 2, name: "Mumbai", url: "/imagess/Mumbai.png" },
    { id: 3, name: "Pune", url: "/imagess/Pune.png" },
    { id: 4, name: "Delhi", url: "/imagess/Delhi.png" },
    { id: 5, name: "Noida", url: "/imagess/Noida.png" },
    { id: 6, name: "Gurgaon", url: "/imagess/Gurgaon.png" },
    { id: 7, name: "Hyedrabad", url: "/imagess/Hyderabad.png" },
    { id: 8, name: "Ahemdabaad", url: "/imagess/Ahemdabad.png" },
    { id: 9, name: "Mysore", url: "/imagess/Mysore.png" },
    { id: 10, name: "Jaipur", url: "/imagess/Jaipur.png" },
    { id: 11, name: "Faridabaad", url: "/imagess/Faridabad.png" },
    { id: 12, name: "Ghaziabaad", url: "/imagess/Ghaziabad.png" },
    { id: 13, name: "Ghandhinagar", url: "/imagess/Gandhinagar.png" },
    { id: 14, name: "Chandigarh", url: "/imagess/Chandigarh.png" },
    { id: 15, name: "Kolkata", url: "/imagess/Kolkata.png" },
    { id: 16, name: "Chennai", url: "/imagess/Chennai.png" },
  ];
  const [showData, setShowData] = useState(cityData);
  const [text, setText] = useState("");
  const filterLocation = (val) => {
    setText(val);
    console.log(val);
    let result = cityData.filter((ele) => {
      return ele.name.toLowerCase().includes(val.toLowerCase());
    });
    console.log(result.length);
    if (val !== "" && result.length > 0) {
      setShowData(result);
    } else {
      setShowData(cityData);
    }
  };
  return (
    <Modal
      id="mymodal"
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent maxW="100rem" maxH="25rem">
        <ModalHeader>
          <Input
            w="98%"
            m="auto"
            mt="10px"
            value={text}
            onChange={(e) => filterLocation(e.target.value)}
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <City cityData={showData} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
