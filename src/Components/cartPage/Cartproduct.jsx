import React from "react"
import "./CartProduct.css"
import { SingleProduct } from "./SingleProduct"
import { } from "@chakra-ui/react"

export const Cart = () => {
    return (
        <div className="container">
            <div className="flexDiv">
                <div className="main">
                    <h3>Order Summary</h3>
                    <div className="CartPAge">

                        <div className="paymentDiv">

                            <div >
                                <h5 className="PayableNow">Payable Now</h5>
                                <div className="spaceBetweeen">
                                    <p>Refundable Deposit</p>
                                    <p>₹279</p>
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
                                    <p>₹329</p>
                                </div>
                            </div>
                        </div>
                        <div className="paymentDiv">
                            <div>
                                <h5 className="PayableNow">Payable Now</h5>
                                <div className="spaceBetweeen">
                                    <p>Refundable Deposit</p>
                                    <p>₹279</p>
                                </div>
                                <div className="spaceBetweeen">
                                    <p>Installation Charges</p>
                                    <p>₹1</p>
                                </div>
                                <hr></hr>
                                <div className="spaceBetweeen">
                                    <p>Total Monthly</p>
                                    <p>₹329</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Big_btn_div">
                        <p>₹1167
                            <br></br>
                            Payable Now</p>
                        <p>Procced</p>
                    </div>
                    {/* <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader>Create your account</DrawerHeader>

                            <DrawerBody>
                                <Input placeholder='Type here...' />
                            </DrawerBody>

                            <DrawerFooter>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='blue'>Save</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer> */}
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <div className="verification">
                        <div className="verificationFlex">
                            <h3>Verify Your Phone Number</h3>
                            <div className="numberVerify">
                                <input placeholder="Entre your phone number *" className="numberVerifyInput" />
                                <button className="numberVerifyBtn">Go</button>
                            </div>
                        </div>
                        <div>
                            <img src="https://www.rentomojo.com/public/images/radical-cart/cat__banner.png" alt="cartImg"/>
                        </div>
                    </div>
                    <div className="verification">
                        <div className="verificationFlex">
                            <h3>Address & Payment</h3>
                            <div className="numberVerify">
                                <div className="Big_btn_div2">
                                    <p>Add new address</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="https://www.rentomojo.com/public/images/radical-cart/address__banner.svg" alt="cartImg" />
                        </div>
                    </div>
                </div>
                <div className="productsDiv">
                    <div className="coupon">
                        <input className="couponInput" placeholder="Have a Coupon Code...!" />
                        <button className="couponBtn">Apply</button>
                    </div>
                    <div>
                        <p className="only">Only few left in stock. Hurry up!</p>
                        <div className="ImportingDiv">
                            <SingleProduct />
                            <SingleProduct />
                            <SingleProduct />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}