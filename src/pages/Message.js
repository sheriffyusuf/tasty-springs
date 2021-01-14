import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { MessageContext } from '../App';

export default function Message() {
    const { messages } = useContext(MessageContext);
    return <Flex mt="50px" direction="column" align="center">
        <Text fontSize={{ base: "xl", md: "3xl" }}><b>Messages:</b> {messages.length}</Text>

        <Stack mt="40px" spacing={4}>
            {
                messages.map((message) => {
                    return <Box minW="300px" maxW="1000px" p={3} borderRadius="lg" borderColor="grey" borderWidth="1px">
                        <Text><b>Name:</b> {message.name}</Text>
                        <Text><b>Email Address:</b> {message.email}</Text>
                        <Text><b>Phone Number:</b> {message.phone}</Text>
                        <Text><b>Message:</b> {message.message}</Text>

                    </Box>;
                })

            }
        </Stack>

    </Flex>
}