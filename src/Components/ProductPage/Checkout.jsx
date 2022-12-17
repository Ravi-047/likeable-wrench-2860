
import {Box,SimpleGrid,Image,Heading,Text, Flex,Divider, Button, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb} from "@chakra-ui/react"
import { Link,useParams } from "react-router-dom"
import axios from "axios"
// import { useParam } from "react-router"
import { useEffect,useState } from "react"



function Checkout(){
    const {id}=useParams()
    const {para}=useParams()
    const {param}=useParams()
    const [item,setItem]=useState({})
    const [price,setPrice]=useState(item.rental)
   const [sliderValue, setSliderValue] = useState(6)


    
   const getProd=()=>{
    axios.get(`http://localhost:8080/furniture/${id}`)
    .then((res)=>setItem(res.data))
   }
   const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

   useEffect(()=>{
      getProd()
   },[])

return(
    <Box>
         <Flex  bg="#FAFAFA" border="1px solid #e6e6e6" justifyContent="space-between" h="55px" alignItems="center" pl="8%" pr="8%">
            <Flex display={{base:"none",md:"none",lg:"flex"}} fontSize="lg" color="#717171">
                <Link to="/">Home {">"}</Link>
                <Link to="/">{param}{">"}</Link>
                <Link to="/">{para}</Link>
                <Text>{item.title}</Text>
            </Flex>
            <Flex  >
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171"><Link to="/product">Packages</Link></Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/Furniture" >Furniture</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/Appliances">Appliances</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/Electronics">Electronics</Link>
                </Text>
                <Text mr={["10px","20px","40px"]} fontSize={["sm","md","lg"]} color="#717171">
                <Link to="/Fitness">Fitness</Link>
                </Text>
            
            </Flex>
        </Flex>
    <Flex>
        <Box w="75%" bg="blue" >
            <Image w="100%" h="60%" src={item.image}></Image>
        </Box>
        <Box w="25%" bg="silver" p="2%">
          <Box>
            <Heading>{item.title}</Heading>
            <Box>
                <Text>How long do you want to rent this for? (Months)</Text>
            </Box>
            <Slider aria-label='slider-ex-6' min={3} max={12} onChange={(val) => setSliderValue(val)}>
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
            <Box>
                <Flex>
                    <Box bg="red" w="50%" p="5%">
                        <Text>{item.rental}/mo</Text>
                        <Text>Monthly Rent</Text>
                    </Box>
                    <Box bg="yellow" w="50%">
                     <Text>{item.rental}</Text>
                     <Text>Refundable Deposit</Text>
                    </Box>
                </Flex>
                <Flex>
                    <Text></Text>
                </Flex>
            </Box>
            <Button bg="red"><Link to="">Book Your Plan</Link></Button>
          </Box>
          <Box></Box>
        </Box>
    </Flex>
    </Box>
)
}
export default Checkout