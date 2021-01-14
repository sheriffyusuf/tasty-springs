import { Box, Button, Flex, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function Gallery() {

    const itemsUrls = ['http://tastysprings.herokuapp.com/pictures/2.jpg', 'http://tastysprings.herokuapp.com/pictures/3.jpg', 'http://tastysprings.herokuapp.com/pictures/4.jpg', 'http://tastysprings.herokuapp.com/pictures/5.jpg', 'http://tastysprings.herokuapp.com/pictures/6.jpg', 'http://tastysprings.herokuapp.com/pictures/3.jpg', 'http://tastysprings.herokuapp.com/pictures/4.jpg', 'http://tastysprings.herokuapp.com/pictures/1.png'];

    return <>
        <Flex direction="column" align="center" mt={14} marginBottom="130px">
            <Heading fontWeight="100" letterSpacing="3px" as="h1" >Our Gallery</Heading>
            <Text mt={5}>Here we have our gallery of delicious pastries for you to choose from.</Text>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mt="80px">
                {
                    itemsUrls.map((url) => (<VStack spacing={5} p={5} mt={2} borderColor="#630165" borderWidth="3px" borderStyle="double">
                        <Image src={url} boxSize="180px" />
                        <Box>
                            <Button color="#630165" rounded="0" borderColor="#630165" variant="outline" _hover={{ bg: "#630165", color: "white" }} fontSize="sm">
                                Get it now
           </Button>
                        </Box>
                    </VStack>))
                }

            </SimpleGrid>
        </Flex>
    </>
}