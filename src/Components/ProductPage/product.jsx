import {
  Box,
  SimpleGrid,
  Image,
  Button,
  Text,
  Flex,
  Divider,
  Slider,
  Checkbox,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useToast,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { CityContext } from "../../Context/CityContext";
import Subnavbar from "./Subnavbar";
import "./category.css";
import { useDispatch } from "react-redux";
import { addCarts } from "../../Redux/cart/action.cart";

function Product() {
  const { city } = useContext(CityContext);
  const { param } = useParams();
  const { para } = useParams();
  const [proddata, setProddata] = useState([]);
  const [catData, setCatData] = useState([]);
  // const [toggle,setToggle]=useState(true)
  const [sliderValue, setSliderValue] = useState(6);
  const [checkboxvalue, setCheckboxvalue] = useState(para);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const checkboxhandler = (e, index) => {
    console.log(index);
    setCheckboxvalue(e.target.value);
    // console.log(e.target.value);
  };

  const Carthandler = (prod) => {
    dispatch(addCarts(prod));

    toast({
      position: "top",
      title: "Item successfully Added to Cart",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  useEffect(() => {
    setLoading(true);
    (() => {
      axios
        .get(`https://rentapi-d55v.onrender.com/category_${param}`)
        .then((res) => {
          setCatData(res.data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    })();
    (() => {
      axios
        .get(
          `https://rentapi-d55v.onrender.com/furniture?category=${checkboxvalue}`
        )
        .then((res) => {
          setProddata(res.data);
          setLoading(false);
        });
    })();
  }, [checkboxvalue, param]);

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
        <Flex pr="8%" pl="8%" gap="3%">
          <Box w="30%" h="200px">
            <Flex mt="1rem" mb="1rem" justifyContent="space-between">
              <Flex>
                <CiFilter size="30px" />
                <Text size="lg">Filters</Text>
              </Flex>
              <Button border="1px solid #e6e6e6" bg="none">
                Reset
              </Button>
            </Flex>

            <Box border="1px solid #e6e6e6" p="8%">
              <Text>CHOOSE RENTAL TENURE</Text>
              <Slider
                aria-label="slider-ex-6"
                min={3}
                max={12}
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
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>

            <Box border="1px solid #e6e6e6" p="8%" mt="2rem">
              <Text fontSize="lg" mb="1rem">
                PRODUCT TYPE
              </Text>
              {catData.map((ele, index) => (
                <Flex mt="1rem" key={index}>
                  {/* <Input type="radio"/> */}
                  <Checkbox
                    textTransform="capitalize"
                    onChange={(e) => checkboxhandler(e, index)}
                    value={ele.name}
                  >
                    {ele.name}
                  </Checkbox>
                </Flex>
              ))}
            </Box>

            <Box p="8%" border="1px solid #e6e6e6" mt="2rem">
              <Text fontSize="lg">AVAILABILITY</Text>

              <Checkbox mt="1rem" defaultChecked value="Out of Stock">
                Out of Stock
              </Checkbox>
            </Box>
          </Box>
          <Box w="100%" mb="250px">
            <Box p="0.8%" w="16%" mt="1rem" mb="1rem" bg="#FAFAFA">
              <Flex justifyContent="space-between">
                <Text fontSize="lg" textTransform="capitalize">
                  {para}
                </Text>
                <Link to={`/${city}/${param}`}>
                  <AiOutlineClose size="25px" />
                </Link>
              </Flex>
            </Box>
            <SimpleGrid columns={[2, 2, 3]} columnGap="5%" rowGap="1%">
              {proddata.map((prod, index) => (
                <Box
                  bg="white"
                  border="1px solid #e6e6e6"
                  className="hoverproductbox"
                  key={index}
                >
                  <Link to={`/${city}/${param}/${para}/${prod.id}`}>
                    <Box h="270px">
                      <Image
                        src={prod.image}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      ></Image>
                    </Box>
                    <Box p="5%">
                      <Text fontSize="lg" textOverflow="ellipsis">
                        {prod.title}
                      </Text>
                      <Divider
                        mt="3%"
                        mb="3%"
                        orientation="horizontal"
                        bg="red"
                      />
                      <Flex justifyContent="space-between">
                        <Text fontSize="lg">₹{prod.rental}/mo</Text>
                        <Text>{prod.days} days</Text>
                      </Flex>
                    </Box>
                  </Link>
                  <Box className="hoverCartbutton" m="15px">
                    <Button
                      w="100%"
                      borderRadius="15px"
                      onClick={() => Carthandler(prod)}
                      bg="none"
                      border="1px solid skyblue"
                      color="skyblue"
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    );
  }
}
export default Product;
