import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Divider,
  Button,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  UnorderedList,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Subnavbar from "./Subnavbar";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { CityContext } from "../../Context/CityContext";
import { useDispatch } from "react-redux";
import { addCarts } from "../../Redux/cart/action.cart";

function Checkout() {
  const toast = useToast();
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [sliderValue, setSliderValue] = useState(6);
  const [toggle, setToggle] = useState(true);
  const { city } = useContext(CityContext);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const Carthandler = () => {
    toast({
      title: "Added to Cart",
      description: "Item added to cart successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setToggle(false);
    dispatch(addCarts(item));
  };

  const labelStyles = {
    mt: "3",
    ml: "-2.5",
    fontSize: "lg",
  };

  useEffect(() => {
    (() => {
      setLoading(true);
      axios
        .get(`https://rentapi-d55v.onrender.com/furniture/${id}`)
        .then((res) => {
          setItem(res.data);
          setLoading(false);
        });
    })();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "25px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Loading...
        </h1>
      </div>
    );
  } else {
    return (
      <Box>
        <Subnavbar />
        <Flex>
          <Box w="80%">
            <Box h="800px">
              <Image
                w="100%"
                objectFit="cover"
                h="100%"
                src={item.image}
              ></Image>
            </Box>
            <Flex>
              <Button w="50%" p="3%" fontSize="xl">
                Why rent from us?
              </Button>
              <Button w="50%" bg="white" p="3%" fontSize="xl">
                Product Details
              </Button>
            </Flex>
            <Box p="7%" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;">
              <Text fontSize="3xl" fontWeight="bold">
                Product Details
              </Text>
              <Flex mt="1.5rem" gap="5%">
                <Image src={item.image} w="40%"></Image>
                <Box>
                  <Text fontSize="2xl" fontWeight="bold">
                    {item.title}
                  </Text>
                  <Text mt="2rem">{item.description}</Text>
                  <Flex mt="1.5rem" gap="5%">
                    <Box w="46%">
                      <Text fontSize="lg" fontWeight="bold">
                        Dimensions
                      </Text>
                      <UnorderedList>
                        <ListItem>{item.dimensions}</ListItem>
                      </UnorderedList>
                      <Text fontSize="lg" fontWeight="bold" mt="1.5rem">
                        Material & Color
                      </Text>
                      <Text>{item.color}</Text>
                    </Box>
                    <Box w="46%">
                      <Text fontSize="lg" fontWeight="bold">
                        Features & Specs
                      </Text>
                      {/* {item.features_specs.map((ele)=>(
                       <UnorderedList>
                         <ListItem mt="1rem">list              
                         </ListItem>
                        </UnorderedList>                       
                        ))} */}
                      {/* </UnorderedList> */}
                    </Box>
                  </Flex>
                  <Divider mt="2rem"></Divider>
                  <Flex mt="1.5rem" gap="8%">
                    <Flex w="45%">
                      <Text fontSize="lg" fontWeight="bold">
                        Monthly Rental:
                      </Text>
                      <Text>&nbsp;₹{item.rental}</Text>
                    </Flex>
                    <Flex w="45%">
                      <Text fontSize="lg" fontWeight="bold">
                        Deposit:&nbsp;
                      </Text>
                      <Text>₹{item.deposit}</Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box w="25%" p="2%">
            <Box>
              <Heading as="h6" size="md">
                {item.title}
              </Heading>
              <Box bg="skyblue" mt="1rem">
                <Text>How long do you want to rent this for? (Months)</Text>
              </Box>
              <Slider
                aria-label="slider-ex-6"
                min={3}
                max={12}
                mt="1.5rem"
                onChange={(val) => setSliderValue(val)}
              >
                <SliderMark value={3} {...labelStyles}>
                  3+
                </SliderMark>
                <SliderMark value={6} {...labelStyles}>
                  6+
                </SliderMark>
                <SliderMark value={9} {...labelStyles}>
                  9+
                </SliderMark>
                <SliderMark value={12} {...labelStyles}>
                  12+
                </SliderMark>
                {/* <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}
                    </SliderMark> */}
                <SliderTrack h="10px">
                  <SliderFilledTrack bg="#FF5B5D" />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Box mt="3rem">
                <Flex>
                  <Box
                    w="50%"
                    p="5%"
                    pt="8%"
                    pb="8%"
                    border="1px solid #e6e6e6"
                  >
                    <Text fontSize="2xl">₹{item.rental}/mo</Text>
                    <Text fontSize="sm">Monthly Rent</Text>
                  </Box>
                  <Box
                    w="50%"
                    p="5%"
                    pt="8%"
                    pb="8%"
                    border="1px solid #e6e6e6"
                  >
                    <Text fontSize="2xl">₹{item.deposit}</Text>
                    <Text fontSize="sm">Refundable Deposit</Text>
                  </Box>
                </Flex>
                <Flex border="1px solid #e6e6e6" p="8%">
                  <Flex>
                    <AiTwotoneCheckCircle />
                    <Text fontSize="sm">7 Days free trial</Text>
                  </Flex>
                  <Flex>
                    <AiTwotoneCheckCircle />
                    <Text fontSize="sm">Free relocation</Text>
                  </Flex>
                  <Flex>
                    <AiTwotoneCheckCircle />
                    <Text fontSize="sm"> Free upgrades</Text>
                  </Flex>

                  <Text fontSize="sm" color="skyblue">
                    View All
                  </Text>
                </Flex>
              </Box>
              <Button
                border="1px solid #1dbdc0"
                w="100%"
                mt="1.5rem"
                p="8%"
                bg="none"
                fontSize="lg"
                color="#1dbdc0"
              >
                Compare All Tenures
              </Button>
              {toggle ? (
                <Button
                  bg="#DC3226"
                  mt="2rem"
                  onClick={Carthandler}
                  w="100%"
                  fontSize="xl"
                  color="white"
                  p="10%"
                  gap="10px"
                >
                  <GrCart />
                  Book Your Plan
                </Button>
              ) : (
                <Flex gap="5%">
                  <Button
                    bg="none"
                    border="1px solid #DC3226"
                    mt="2rem"
                    fontSize="lg"
                    color="#DC3226"
                    p="8%"
                    w="45%"
                  >
                    <Link to={`/${city}/Furniture`}>Browse More</Link>
                  </Button>
                  <Button
                    bg="#DC3226"
                    mt="2rem"
                    fontSize="md"
                    color="white"
                    p="8%"
                    gap="5px"
                    w="45%"
                  >
                    <Link to="/cart">
                      <Flex>
                        <GrCart />
                        View Cart
                      </Flex>
                    </Link>
                  </Button>
                </Flex>
              )}
              {/* <Button bg="#DC3226" mt="2rem" onClick={Carthandler} w="100%" fontSize="xl" color="white" p="10%" gap="10px"><GrCart  />
              Book Your Plan
            </Button> */}
            </Box>
            <Box></Box>
          </Box>
        </Flex>
      </Box>
    );
  }
}
export default Checkout;
