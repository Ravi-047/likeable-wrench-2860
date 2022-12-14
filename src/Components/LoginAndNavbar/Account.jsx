import { Grid, GridItem, Stack, Box, Image } from '@chakra-ui/react'

import React from 'react'

const Account = () => {
    return (
        <div>
            <Grid
                templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}

                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >

                <GridItem pl='2' area={'nav'}>
                    <Stack>
                        <Box>LIVE ORDER</Box>
                        <Box>Undeliverd Orders</Box>
                        <Box>Refund Status</Box>
                        <Box>Easy Payment</Box>
                        <Box>1</Box>
                        <Box>1</Box>
                        <Box> <Image
                            className='logo'
                            src='./imagess/LHS-Banner-new.gif'

                        /></Box>
                    </Stack>
                </GridItem>
                <GridItem pl='2' bg='green.300' area={'main'}>
                    Main
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
                <GridItem pl='2' bg='orange.300' area={'header'}>
                    Header
                </GridItem>
            </Grid>
        </div>
    )
}

export default Account
