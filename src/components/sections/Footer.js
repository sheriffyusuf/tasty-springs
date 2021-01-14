import { Box, Flex, HStack, Image, Link, List, ListItem, Text, VStack } from '@chakra-ui/react';
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return <Box bgColor="white" width="100%" py="70px" mt="100px" borderTopColor="grey" borderTopWidth="1px" px="100px">
        <Flex align={{ base: "center", md: "normal" }} justify="space-around" direction={{ base: "column", md: "row" }}>
            <Link to="/"><Image src="http://tastysprings.herokuapp.com/pictures/logo.png" boxSize="150px" /></Link>
            <VStack align={{ base: "center", md: "left" }}>
                <Text fontWeight="bold">Sitemap</Text>
                <List color="#ee2e81" spacing={2} textAlign={{ base: "center", md: "left" }}>
                    <ListItem>
                        Home
                    </ListItem>
                    <ListItem>
                        About
                    </ListItem>
                    <ListItem>
                        Gallery
                    </ListItem>
                    <ListItem>
                        Contact
                    </ListItem>
                </List>
            </VStack>
            <VStack align={{ base: "center", md: "left" }} mt={{ base: "30px", md: "0px" }}>
                <Text fontWeight="bold">Explore</Text>
                <List color="#ee2e81" spacing={2} textAlign={{ base: "center", md: "left" }}>
                    <ListItem>
                        Cakes
                    </ListItem>
                    <ListItem>
                        Cupcakes
                    </ListItem>
                    <ListItem>
                        Breads
                    </ListItem>
                    <ListItem>
                        Donut
                    </ListItem>
                </List>
            </VStack>
            <VStack align={{ base: "center", md: "left" }} mt={{ base: "30px", md: "0px" }}>
                <Text fontWeight="bold">Contact us for any queries</Text>
                <List color="#ee2e81" spacing={2} textAlign={{ base: "center", md: "left" }}>
                    <ListItem>
                        tastySprings@gmail.com
                    </ListItem>
                    <ListItem>
                        <Text><Link>+23433688343</Link></Text>
                    </ListItem>
                    <ListItem >
                        <HStack spacing={2} justify={{ base: "center", md: "normal" }}>
                            <AiFillTwitterCircle size="22px" />
                            <AiFillInstagram size="22px" />
                            <AiFillFacebook size="22px" />
                        </HStack>
                    </ListItem>
                </List>
            </VStack>
        </Flex>
    </Box>;
}

export default Footer;