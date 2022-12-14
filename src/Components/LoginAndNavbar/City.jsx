import React from 'react';
import { Button, Box } from "@chakra-ui/react"
import SideCart from "./SideCart"
function City({ cityData }) {
    console.log(cityData)
    return (
        <div>
            {
                cityData.map((item) => {
                    return (<span key={item.id}><Button>
                        {item.name} <SideCart />
                    </Button></span>)
                })
            }
        </div>
    )
}
export default City;