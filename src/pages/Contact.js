import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import React, { useContext, useState } from 'react';
import { MessageContext } from "../App";


const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ];
};

export default function Contact() {
    const { addMessage } = useContext(MessageContext);
    const [nameProps, resetName] = useInput("");
    const [emailProps, resetEmail] = useInput("");
    const [phoneProps, resetPhone] = useInput("");
    const [messageProps, resetMessage] = useInput("");

    const submit = event => {
        event.preventDefault();
        addMessage({
            name: nameProps.value,
            email: emailProps.value,
            phone: phoneProps.value,
            message: messageProps.value
        });
        resetName();
        resetEmail();
        resetPhone();
        resetMessage();
    };
    return <>
        <Flex direction="column" align="center" mt={14} marginBottom="50px">
            <Heading fontWeight="100" letterSpacing="3px" as="h1" >Contact Us</Heading>
            <Box maxWidth={{ base: "300px", md: "600px" }} textAlign="center">
                <Text mt={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, distinctio!</Text>
            </Box>
            <Box my="50px" textAlign="left" width={{ base: "350px", md: "450px" }}>
                <form onSubmit={submit}>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input required {...nameProps} padding={5} focusBorderColor="#ee2e81" borderColor="black" rounded="0" type="name" placeholder="John doe" />
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Email</FormLabel>
                        <Input {...emailProps} required focusBorderColor="#ee2e81" borderColor="black" rounded="0" type="email" placeholder="johndoe@gmail.com" />
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input {...phoneProps} placeholder="(123) 456 ___ ___" type="phone" focusBorderColor="#ee2e81" borderColor="black" rounded="0" />
                        <FormHelperText>Not required *</FormHelperText>
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel>Message</FormLabel>
                        <Textarea {...messageProps} required focusBorderColor="#ee2e81" borderColor="black" rounded="0" rows="5" placeholder="Say something here" />
                    </FormControl>
                    <Box mt={8}>
                        <Button type="submit" color="#ee2e81" rounded="0" borderColor="#ee2e81" variant="outline" _hover={{ bg: "#ee2e81", color: "white" }} fontSize="md">
                            Send Message
                </Button>
                    </Box>
                </form>
            </Box>
        </Flex>
    </>;
}