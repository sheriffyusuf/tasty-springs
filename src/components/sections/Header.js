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
        {/* <Flex as="nav" bg="#ee2e81" w="100%" color="white" height="50px" align="center" justify="center" mb="10">
            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                {show ? <AiOutlineClose size="30px" /> : <AiOutlineMenu size="30px" />}
            </Box>

        </Flex> */}

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

/* // Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="teal.500"
            color="white"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                    Chakra UI
          </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <svg
                    fill="white"
                    width="12px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
            >
                <MenuItems>Docs</MenuItems>
                <MenuItems>Examples</MenuItems>
                <MenuItems>Blog</MenuItems>
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Button bg="transparent" border="1px">
                    Create account
          </Button>
            </Box>
        </Flex>
    );
}; */

export default Header;
