import React, { useEffect, useState } from "react";
import "./CartProduct.css";
import { SingleProduct } from "./SingleProduct";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../LoginAndNavbar/Navbar";

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/cart")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  //   const handleVerify = () => {};

  let sum = 0;
  data.map((el) => {
    return (sum += el.deposit);
  });
  console.log(sum);

  return (
    <>
      <div className="container">
        <div className="flexDiv">
          <div className="main">
            <h3>Order Summary</h3>
            <div className="CartPAge">
              <div className="paymentDiv">
                <div>
                  <h5 className="PayableNow">Payable Now</h5>
                  <div className="spaceBetweeen">
                    <p>Refundable Deposit</p>
                    <p>{`₹ ${sum}`}</p>
                  </div>
                  <div className="spaceBetweeen">
                    <p>Installation Charges</p>
                    <p>₹1</p>
                  </div>
                  <div className="spaceBetweeen">
                    <p>Delivery Charges</p>
                    <p>₹49</p>
                  </div>
                  <hr></hr>
                  <div className="spaceBetweeen">
                    <p>Total Payout</p>
                    <p>{`₹ ${sum + 49 + 1}`}</p>
                  </div>
                </div>
              </div>
              <div className="paymentDiv">
                <div>
                  <h5 className="PayableNow">Payable Now</h5>
                  <div className="spaceBetweeen">
                    <p>Product Rent</p>
                    <p>{`₹${Math.floor(sum / 12)}/mo`}</p>
                  </div>
                  <div className="spaceBetweeen">
                    <p>GST</p>
                    <p>₹32/mo</p>
                  </div>
                  <hr></hr>
                  <div className="spaceBetweeen">
                    <p>Total Monthly</p>
                    <p>{`₹${Math.floor(sum / 12) + 32}/mo`}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="Big_btn_div" onClick={handleProcced}>
                        <p>₹1167
                            <br></br>
                            Payable Now</p>
                        <p>Procced</p>
                    </div> */}
            <br></br>
            <br></br>
            <hr></hr>
            <div className="verification">
              <div className="verificationFlex">
                <h3>Verify Your Phone Number</h3>
                <div className="numberVerify">
                  <input
                    placeholder="Entre your phone number *"
                    className="numberVerifyInput"
                  />
                  <button
                    className="numberVerifyBtn"
                    onClick={() =>
                      toast({
                        title: "Number verify successfully",
                        description: "Please click on Add New Address",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    Go
                  </button>
                </div>
              </div>
              <div>
                <img
                  src="https://www.rentomojo.com/public/images/radical-cart/cat__banner.png"
                  alt="cartImg"
                />
              </div>
            </div>
            <div className="verification">
              <div className="verificationFlex">
                <h3>Address & Payment</h3>
                <div className="numberVerify">
                  <div
                    className="Big_btn_div2"
                    ref={btnRef}
                    colorScheme="teal"
                    onClick={onOpen}
                  >
                    <p>Add new address</p>
                  </div>
                </div>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size="md"
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <br></br>
                    <br></br>
                    <br></br>
                    <DrawerCloseButton />
                    <DrawerHeader>Add Delivery Address</DrawerHeader>
                    <FormControl className="Address_form">
                      <FormLabel>Country</FormLabel>
                      <Select placeholder="Select country">
                        <option>India</option>
                        <option>USA</option>
                        <option>Chaina</option>
                        <option>Argentina</option>
                        <option>Nigeria</option>
                      </Select>
                      <br></br>
                      <FormLabel>Address</FormLabel>
                      <Textarea placeholder="Entre your Address Here..." />
                    </FormControl>
                    <DrawerBody>
                      <FormLabel>Flat No/ Floor etc.</FormLabel>
                      <Textarea placeholder="Flat Number / Building Name" />
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                      </Button>
                      <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
              <div>
                <img
                  src="https://www.rentomojo.com/public/images/radical-cart/address__banner.svg"
                  alt="cartImg"
                />
              </div>
            </div>
          </div>
          <div className="productsDiv">
            <div className="coupon">
              <input
                className="couponInput"
                placeholder="Have a Coupon Code...!"
              />
              <button className="couponBtn">Apply</button>
            </div>
            <div>
              <p className="only">Only few left in stock. Hurry up!</p>
              <div className="ImportingDiv">
                {data.map((el) => {
                  return (
                    <SingleProduct
                      key={el.id}
                      prdctImg={el.image}
                      Name={el.title}
                      price={el.rental}
                      deposite={el.deposit}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
