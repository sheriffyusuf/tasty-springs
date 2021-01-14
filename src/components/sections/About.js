import { Box, Button, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export default function About() {
    return <Box>
        <Stack spacing="90px" direction={{ base: "column-reverse", md: "row" }}
            mt={{ base: "300px", md: "100px" }}>
            <Box display="flex" justifyContent="center">
                <Image src="http://tastysprings.herokuapp.com/pictures/1.png" boxSize={{ base: "200px", md: "400px" }} />
            </Box>
            <Stack align={{ base: "center", lg: "start" }} direction="column" spacing="30px">

                <Box maxW={{ base: "170px", md: "250px" }}  >
                    <Text id="about" fontWeight="500" align={{ base: "center", md: "left" }} color="#630165" fontSize={{ base: "27px", md: "4xl" }} lineHeight={10} >About TastySprings</Text>

                </Box>
                <Box maxW={{ base: "270px", md: "500px" }}>
                    <Text fontSize="1.1rem" align={{ base: "center", md: "left" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem maxime rem accusamus, beatae facilis perferendis, quas blanditiis consequuntur corrupti ab adipisci pariatur sunt soluta iusto enim tenetur ea atque?
                    </Text>
                </Box>
                <Box>
                    <Button color="#ee2e81" rounded="0" borderColor="#ee2e81" variant="outline" _focus={{ boxShadow: "0 0 0 0.2rem rgba(238,46,129,.5)" }} _hover={{ bg: "#ee2e81", borderColor: "#ee2e81", color: "white" }} fontSize={{ base: "13px", md: "sm" }}>
                        Check our menu
                </Button>
                </Box>
            </Stack>
        </Stack>
    </Box>;
}
