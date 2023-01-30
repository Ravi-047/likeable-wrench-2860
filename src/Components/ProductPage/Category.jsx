import { useContext, useEffect, useState } from "react";
import { Box, SimpleGrid, Image, Heading } from "@chakra-ui/react";
// "start": "react-scripts start",
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { useParams } from "react-router"
import { BsArrowRightCircle } from "react-icons/bs";
import { CityContext } from "../../Context/CityContext";
import Subnavbar from "./Subnavbar";
import "./category.css";

function Category() {
  const { city } = useContext(CityContext);
  const [catData, setCatData] = useState([]);
  const { param } = useParams();
  const [loading, setLoading] = useState(false);

  //    const electronics=[
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/appliances-bg/smartphones_new.jpg",
  //        "name":"Smartphones"
  //     },
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/appliances-bg/smart-devices-v1_new.jpg",
  //        "name":"Smart Devices"
  //     },
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/appliances-bg/laptops_new_2.jpg",
  //        "name":"Laptops"
  //     },
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/appliances-bg/tablets_new.jpg",
  //        "name":"Tablets"
  //     },
  //     {
  //       "image":"https://www.rentomojo.com/public/images/category/electronics-category-filter/gaming-consoles/gamingConsole.png",
  //        "name":"Gaming Console"
  //     }

  //   ]
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://rentapi-d55v.onrender.com/category_${param}`)
      .then((res) => {
        setCatData(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [param]);

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
      <Box mb={["70px"]}>
        {/* <Box h="60px" bg="silver"></Box> */}
        <Subnavbar />

        <Heading
          textAlign="center"
          size={{ base: "sm", md: "lg", lg: "xl" }}
          mt={{ base: "40px", md: "60px", lg: "80px" }}
        >
          Browse by {param} type
        </Heading>

        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 4 }}
          gap={{ base: 5, md: 15, lg: "3%" }}
          w="85%"
          m="auto"
        >
          {catData.map((ele, index) => (
            <Box
              key={index}
              mt={{ base: "15px", md: "30px", lg: "50px" }}
              className="cathover"
            >
              <Link to={`/${city}/${param}/${ele.name}`}>
                <Image src={ele.image} />
                <Box
                  zIndex="1"
                  position="relative"
                  bg="#fff"
                  border="1px solid #e6e6e6"
                  w="70%"
                  p={{ base: "1%", md: "3%", lg: "4%" }}
                  fontSize={{ base: "xs", md: "sm", lg: "md" }}
                  m="auto"
                  mt={{ base: "-10px", md: "-15px", lg: "-25px" }}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  {ele.name}
                </Box>
              </Link>
            </Box>
          ))}
          <Box
            // mt={["50px"]}
            display="flex"
            m="auto"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
            color="#1DBDC0"
            alignitem="center"
            fontSize={{ base: "sm", md: "lg", lg: "xl" }}
          >
            <BsArrowRightCircle size="55px" w="30%" ml="50px" />
            View All in {param}
          </Box>
        </SimpleGrid>
      </Box>
    );
  }
}
export { Category };
