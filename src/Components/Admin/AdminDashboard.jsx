import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { Box } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'
const AdminDashboard = () => {
    const [dataCount, setDataCount] = useState({})
    const [totalCount, setTotalCount] = useState(0);
    const [allProductCounts, setAllProductCounts] = useState([]);
    const [allProductName, setAllProductName] = useState([]);
    useEffect(() => {
        getData()
    }, [])

    const pieChartOptions = {
        labels: allProductName,
        colors: ["#4318FF", "#6AD2FF", "#EAA4DD", "#0abbb5", "#0047ab"],
        chart: {
            width: "50px"
        },
        states: {
            hover: {
                filter: {
                    type: "none"
                }
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        hover: { mode: null },
        plotOptions: {
            donut: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: false
                    }
                }
            }
        },
        fill: {
            colors: ["#4318FF", "#6AD2FF", "#EAA4DD", "#0abbb5", "#0047ab"]
        },
        tooltip: {
            enabled: true,
            theme: "dark"
        }
    };

    const pieChartData = [63, 25, 12];

    const getData = async () => {
        let res1 = await axios.get(`http://localhost:8080/furniture`)
        let res2 = await axios.get(`http://localhost:8080/category_furniture`)
        let res3 = await axios.get(`http://localhost:8080/category_appliances`)
        let res4 = await axios.get(`http://localhost:8080/category_electronics`)
        let res5 = await axios.get(`http://localhost:8080/category_fitness`)
        setDataCount({
            ...dataCount,
            ["furniture"]: res1.data.length,
            ["category_furniture"]: res2.data.length,
            ["category_appliances"]: res3.data.length,
            ["category_electronics"]: res4.data.length,
            ["category_fitness"]: res5.data.length,
        })
        setTotalCount(res1.data.length + res2.data.length + res3.data.length + res4.data.length + res5.data.length)
        const allCount = [res1.data.length, res2.data.length, res2.data.length, res2.data.length, res2.data.length,]
        setAllProductCounts(allCount);
        const allProduct = ["furniture", "category_furniture", "category_appliances", "category_electronics", "category_fitness"]
        setAllProductName(allProduct)

    }




    return (

        <div>
            {/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
                <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>  */}
            <Grid templateColumns='repeat(3, 1fr)' gap={3} >
                <GridItem w="100%" bg='blue.500' h="300">
                    <div>
                        <p>Total Products </p>
                        <h3>{totalCount}</h3>
                    </div>
                </GridItem>
                <GridItem>
                    <div>
                        <p>Total Categories </p>
                        <h3>{Object.keys(dataCount).length}</h3>
                    </div>
                </GridItem>
                <GridItem>
                    <div>
                        <ReactApexChart
                            options={pieChartOptions}
                            series={allProductCounts}
                            type="pie"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </GridItem>
            </Grid>





            {
                allProductName.map((item) => {
                    return (

                        <div>
                            <p>{item}</p>
                            <h3>{dataCount[item]}</h3>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AdminDashboard
