import React, { useContext } from "react";
import { Button, Image, Box, Text, Container } from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CityContext } from "../../Context/CityContext";

const BlankCart = () => {
  const { city } = useContext(CityContext);
  // console.log(applyCity)
  const navigate = useNavigate();
  // const { location } = useParams()
  return (
    <Container className="cnt" alignItems="center">
      <Box boxSize="sm">
        <Image className="blankCartimg" src="./imagess/no-cart.webp" alt="Dan Abramov" />
      </Box>
      <Text>No items in cart</Text>
      <p>
        Add a few items to your cart and come back here for an express checkout
        process!
      </p>
      <Button bg="red.500">
        <Link to={`/${city}/Furniture`}>Browser Cataloge</Link>
      </Button>
    </Container>
  );
};

export default BlankCart;
