import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Autocomplete } from "chakra-ui-simple-autocomplete";
import {
  Image,
  VStack,
  InputGroup,
  InputRightElement,
  MenuItem,
  MenuList,
  Button,
  MenuButton,
  Menu,
  Box,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
// import ReactSearchBox from "react-search-box";
import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { HStack, Text } from "@chakra-ui/react";
import "../NavbarCss/Navbar.css";
import Otp from "./Otp";
import Location from "./Location";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
const Navbar = () => {
  const { city } = useContext(CityContext);
  const [cartItem, setCartItem] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  const options = [
    { value: "bed", label: "Bed" },
    { value: "furniture", label: "Furniture" },
    { value: "electronics", label: "Electronics" },
    { value: "television", label: "Television" },
    { value: "frame", label: "Frame" },
    { value: "appliances", label: "Appliances" },
    { value: "Fitness", label: "Fitness" },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/cart")
      .then((res) => setCartItem(res.data))
      .catch((err) => console.log(err));
  }, [cartItem]);

  const changeHandler = (e, options) => {
    let val = e.target.value;
    setSearchText(val);
    let answer = options.filter((el) => {
      return el.value.toLowerCase().includes(val.toLowerCase());
    });
    console.log(answer, val);
    if (val !== "" && answer.length > 0) {
      setResult(answer);
    } else {
      setResult([]);
    }
  };
  const searchBarNavigation = (value) => {
    setResult([]);

    navigate(`/${city}/${value}`);
  };
  return (
    <Box className="navcss">
      <HStack spacing={{ base: "5px", md: "8px", lg: "20px" }}>
        <Box className="logoBox">
          <Link to={`/${city}`}>
            <Image
              className="logo"
              borderRadius="full"
              boxSize={{ base: "40px", md: "60px", lg: "100px" }}
              // src='./imagess/first_Rent.png'
              src={process.env.PUBLIC_URL + "/imagess/first_Rent.png"}
              alt="Dan Abramov"
            />
          </Link>
        </Box>
        <Box className="__logo_none__">
          <Text
            fontSize="30px"
            fontWeight="extrabold"
            fontStyle="italic"
            color="tomato"
            fontFamily="sans-serif"
          >
            <Link to={`/${city}`}> firstRent</Link>
          </Text>
        </Box>
        <Box className="__location__none__">
          <Location />
        </Box>
        <Box>
          <VStack className="inputBox">
            <InputGroup>
              {/* <Input value={searchText} className='searchBox' placeholder='Search for Products' onChange={(e) => changeHandler(e)} />
                            <InputRightElement children={<SearchIcon color='black.500' />} /> */}
              <Autocomplete
                className="searchBox"
                options={options}
                result={[]}
                placeholder="Search for Product"
                onChange={(e) => changeHandler(e, options)}
                pl="10px"
                outline="none"
              />
              <InputRightElement children={<SearchIcon color="black.500" />} />
            </InputGroup>
          </VStack>
          <div className="overFlowDiv">
            {result.map((ele) => {
              return (
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => searchBarNavigation(ele.value)}
                >
                  {ele.label}
                </p>
              );
            })}
          </div>
        </Box>

        <Box>
          {cartItem.length === 0 ? (
            <Link to="/blank">
              <Flex gap="10px" alignItems="center">
                {" "}
                <FaShoppingCart />{" "}
                <Text fontSize="md" className="__cart_Text_none">
                  {" "}
                  Cart
                </Text>{" "}
              </Flex>
            </Link>
          ) : (
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Flex>
                  {" "}
                  <FaShoppingCart /> <Text className="__cart_Text_none" > Cart</Text>{" "}
                </Flex>
              </MenuButton>
              <MenuList h="120px" overflowY="auto">
                {/* <MenuItem minH="70px" width="200px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src="hello2"
                    // {cartItem[cartItem.length - 1].image}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <span style={{ textOverflow: "ellipsis" }}>
                    {/* "hello1" */}
                    {/* {cartItem[cartItem.length - 1].title} */}
                  {/* </span> */}
                {/* </MenuItem>  */}
                {cartItem.map((item)=>(
                   <MenuItem minH="70px" width="200px" >
                   <Image
                     boxSize="2rem"
                     borderRadius="full"
                     src={item.image}
                     alt="Fluffybuns the destroyer"
                     mr="12px"
                   />
                   <span style={{ textOverflow: "ellipsis" }}>
                     {item.title}
                     {/* {cartItem[cartItem.length - 1].title} */}
                   </span>
                 </MenuItem>

                ))}
                {/* <MenuItem minH="70px" width="200px">
                  <Image
                    boxSize="2rem"
                    borderRadius="full"
                    src=""
                    // {cartItem[cartItem.length - 2].image}
                    alt="Simon the pensive"
                    mr="12px"
                  />
                  <span style={{ textOverflow: "ellipsis" }}>
                    {/* "helo3" */}
                    {/* {cartItem[cartItem.length - 2].title} */}
                  {/* </span> */}
                {/* </MenuItem>  */}
                <MenuItem>
                <Link to="/cart">
                  <Button bg={"orangered"} w="80%" m="auto">Go to Cart</Button>
                </Link>
                </MenuItem>
              </MenuList>
             
            </Menu>
          )}
        </Box>

        <Box>
          <Otp />
        </Box>
      </HStack>
    </Box>
  );
};

export default Navbar;
