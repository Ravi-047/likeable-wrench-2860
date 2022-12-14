import { useEffect,useState } from "react"
import {Box,SimpleGrid,Image,Heading,Text, Flex} from "@chakra-ui/react"
// "start": "react-scripts start",
import { Link } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router"
import { BsArrowRightCircle } from "react-icons/bs";


function Category(){
   const [catData,setCatData]=useState([])
   const {para}=useParams()


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
    useEffect(()=>{
        axios.get(`http://localhost:8080/category_${para}`)
        .then((res)=>setCatData(res.data))
        .catch((e)=>console.log(e))
    },[{para}])
    // useEffect(()=>{
    //    setCatData(`${para}`)
    // },[])

   

return(
    <Box>
        <Box h="60px" bg="silver"></Box>
        <Flex  bg="#FAFAFA" border="1px solid #e6e6e6" justifyContent="space-between" h="55px" alignItems="center" pl="8%" pr="8%">
            <Flex display={{base:"none",md:"none",lg:"flex"}} fontSize="lg" color="#717171">
                <Link to="/">Home {">"}</Link>
                <Link to="/">{para}</Link>
            </Flex>
            <Flex  >
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171"><Link to="/product">Packages</Link></Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/furniture" >Furniture</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/appliances">Appliances</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/electronics">Electronics</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/fitness">Fitness</Link>
                </Text>
            
            </Flex>
        </Flex>
        <Heading textAlign="center" mt="80px">Browse by {para} type</Heading>
        
        <SimpleGrid columns={[2,2,4]} gap={[10,15,"3%"]} w="85%" m="auto">
         
       {catData.map((ele)=>(
        <Box mt={["50px"]}  >
            <Link to={`/para/${ele.name}`}>
            <Image  src={ele.image}/>
            <Box zIndex="1" position="relative"  bg="#fff" border="1px solid #e6e6e6" w="70%" p="4%" fontSize="md" m="auto" mt="-25px" textAlign="center">{ele.name}</Box>
            </Link>
        </Box>
            
       ))}
       <Box  mt={["50px"]}  textAlign="center" color="#1DBDC0" justifyItems="center" fontSize="xl">View All in {para} <BsArrowRightCircle m="auto" w="20%"/></Box>
       </SimpleGrid>
      
    </Box>
)

}
export {Category}