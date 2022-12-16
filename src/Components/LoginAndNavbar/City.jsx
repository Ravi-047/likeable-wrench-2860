import React from 'react';
import { Button, Box, Image } from "@chakra-ui/react"
import SideCart from "./SideCart"
function City({ cityData }) {
    return (
        <div className="allCity">
            {
                cityData.map((item) => {
                    return (
                        <SideCart item={item} />
                    )
                })
            }
        </div>
    )
}
export default City;