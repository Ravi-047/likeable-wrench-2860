// import { useParams } from "react-router"
import {
  Box,
  SimpleGrid,
  Image,
  Button,
  Heading,
  Text,
  Flex,
  Divider,
  Icon,
  Slider,
  Input,
  Checkbox,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { useParam } from "react-router"
import { useContext, useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { CityContext } from "../../Context/CityContext";

function Product() {
  const { city } = useContext(CityContext);
  const { param } = useParams();
  const { para } = useParams();
  const [proddata, setProddata] = useState([]);
  const [catData, setCatData] = useState([]);
  const [sliderValue, setSliderValue] = useState(6);
  const [checkboxvalue, setCheckboxvalue] = useState(para);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const getCat = () => {
    axios
      .get(`http://localhost:8080/category_${param}`)
      .then((res) => setCatData(res.data))
      .catch((e) => console.log(e));
  };
  const getProd = () => {
    axios
      .get(`http://localhost:8080/furniture?category=${checkboxvalue}`)
      .then((res) => setProddata(res.data));
  };

  const checkboxhandler = (e) => {
    setCheckboxvalue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getCat();
    getProd();
  }, [checkboxvalue]);

  return (
    <Box>
      <Flex
        bg="#FAFAFA"
        border="1px solid #e6e6e6"
        justifyContent="space-between"
        h="55px"
        alignItems="center"
        pl="8%"
        pr="8%"
      >
        <Flex
          display={{ base: "none", md: "none", lg: "flex" }}
          fontSize="lg"
          color="#717171"
        >
          <Link to="/">Home {">"}</Link>
          <Link to="/">
            {param}
            {">"}
          </Link>
          <Link to="/">{para}</Link>
        </Flex>
        <Flex>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to="/product">Packages</Link>
          </Text>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to="/furniture">Furniture</Link>
          </Text>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to="/appliances">Appliances</Link>
          </Text>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to="/electronics">Electronics</Link>
          </Text>
          <Text
            mr={["10px", "20px", "40px"]}
            fontSize={["sm", "md", "lg"]}
            color="#717171"
          >
            <Link to="/fitness">Fitness</Link>
          </Text>
        </Flex>
      </Flex>

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
            {catData.map((ele) => (
              <Flex mt="1rem">
                <Checkbox onChange={checkboxhandler} value={ele.name}>
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
        <Box w="100%">
          <Box p="0.8%" w="12%" mt="1rem" mb="1rem" bg="#FAFAFA">
            <Flex>
              <Text fontSize="lg" mr="0.5rem">
                {para}
              </Text>
              <Link to={`/${param}`}>
                <AiOutlineClose size="25px" />
              </Link>
            </Flex>
          </Box>
          <SimpleGrid columns={[2, 2, 3]} columnGap="5%" rowGap="1%">
            {proddata.map((prod) => (
              <Link to={`/${city}/${param}/${para}/${prod.id}`} target="_blank">
                <Box bg="white" border="1px solid #e6e6e6">
                  <Image src={prod.image} h="270px" w="100%"></Image>
                  <Box p="5%">
                    <Text fontSize="lg">{prod.title}</Text>
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
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}
export default Product;
