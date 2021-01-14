import { Box, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Bread from '../../bread.svg';
import Cake from '../../cake.svg';
import Donut from '../../donut.svg';

const listItems = [{ img: Cake, title: 'Cakes' }, { img: Donut, title: 'Donuts' }, { img: Bread, title: 'Bread' },]
export default function Hero() {

    return <Box mt="80px" h={{ base: "75vh", md: "50vh" }}>
        <Box maxW={{ base: "250px", md: "900px" }} textAlign="center">
            <Heading fontWeight="50" letterSpacing="3px" fontSize={{ base: "30px", md: "2.7rem" }}>Welcome to TastySprings, here we serve only the most delicious Pastries</Heading>
        </Box>
        <Stack mt={20} direction={{ base: "column", md: "row" }} justify="center" spacing={{ base: "50px", md: "200px", }}>
            {listItems.map((item) => (
                <VStack>
                    <Image src={item.img} boxSize={{ base: "80px", md: "70px" }} />
                    <Text>{item.title}</Text>
                </VStack>
            ))}
        </Stack>
    </Box >;
}
