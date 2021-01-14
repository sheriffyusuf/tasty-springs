import { Flex } from "@chakra-ui/react";
import React from "react";

export default function LandingLayout(props) {
    return (
        <Flex
            direction="column"
            align="center"

            {...props}
        >
            {props.children}

        </Flex>
    );
}