import { Box, Collapse, Flex, Heading, HStack, Image, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link as L } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



const MenuItems = (props) => {
    const { children, isLast, to = "/", scroll, isHashLink = 'false', ...rest } = props
    return (
        <Heading
            fontSize="1.4em"
            fontWeight="400"
            letterSpacing="3px"
            {...rest}
        >
            {isHashLink ? <HashLink as={L} to={to} scroll={scroll} textDecoration="none" _hover={{ color: "#E2E8F0" }} _focus={{ outline: "0", boxShadow: "none" }}>{children}</HashLink> : <Link as={L} to={to} textDecoration="none" _hover={{ color: "#E2E8F0" }} _focus={{ outline: "0", boxShadow: "none" }}>{children}</Link>}
        </Heading>
    )
}


const Header = () => {
    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
    const [show, setShow] = React.useState(false)
    const toggleMenu = () => setShow(!show)
    return (<>

        <Flex justify="center">
            <Image src="http://tastysprings.herokuapp.com/pictures/logo.png" boxSize="150px" siz></Image>
        </Flex>

        <Flex as="nav" bg="#ee2e81" w="100%" color="white" py={{ base: 4, md: 6 }} align="center" justify="center">
            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                <Box display="flex" justifyContent="center">
                    {show ? <AiOutlineClose size="30px" /> : <AiOutlineMenu size="30px" />}
                </Box>
                <Collapse in={show} animateOpacity mt={4}>
                    <Box mt="5">
                        <VStack spacing={5}>
                            <MenuItems to="/">Home</MenuItems>
                            <MenuItems smooth to="/#about" scroll={el => scrollWidthOffset(el)} isHashLink>About</MenuItems>
                            <MenuItems to="/gallery">Gallery</MenuItems>
                            <MenuItems to="/contact">Contact</MenuItems>
                            <MenuItems to="/messages">Messages</MenuItems>
                        </VStack>
                    </Box>

                </Collapse>
            </Box>

            <HStack display={{ base: "none", md: "flex" }} spacing={16}>
                <MenuItems to="/">Home</MenuItems>
                <MenuItems smooth to="/#about" scroll={el => scrollWidthOffset(el)} isHashLink>About</MenuItems>
                <MenuItems to="/gallery">Gallery</MenuItems>
                <MenuItems to="/contact">Contact</MenuItems>
                <MenuItems to="/messages">Messages</MenuItems>
            </HStack>
        </Flex>


    </>);
}

export default Header;
