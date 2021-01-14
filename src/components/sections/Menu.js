import { Box, Button, chakra, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useStyles, useTab, VStack } from '@chakra-ui/react';
import React from 'react';

function CustomTabs() {
    // 1. Reuse the styles for the Tab
    const StyledTab = chakra("button", { themeKey: "Tabs.Tab", color: "#ee2e81", rounded: "0", borderColor: "#ee2e81" })

    const CustomTab = React.forwardRef((props, ref) => {
        // 2. Reuse the `useTab` hook
        const tabProps = useTab(props)
        const isSelected = !!tabProps["aria-selected"]

        // 3. Hook into the Tabs `size`, `variant`, props
        const styles = useStyles()
        return (
            <StyledTab __css={styles.tab} {...tabProps}>
                <Box as="span" mr="2">
                    {isSelected ? "😎" : "😐"}
                </Box>
                {tabProps.children}
            </StyledTab>
        )
    })

    return (
        <Tabs>
            <TabList>
                <CustomTab>One</CustomTab>
                <CustomTab>Two</CustomTab>
            </TabList>
            <TabPanels>
                <TabPanel>1</TabPanel>
                <TabPanel>2</TabPanel>
            </TabPanels>
        </Tabs>
    )
}

function CustomCard({ url }) {
    return <VStack spacing={5} p={5} mt={2} borderColor="#630165" borderWidth="3px" borderStyle="double">
        <Image src={url} boxSize="180px" />
        <Box>
            <Button color="#630165" rounded="0" borderColor="#630165" variant="outline" _hover={{ bg: "#630165", color: "white" }} fontSize="sm">
                Get it now
</Button>
        </Box>
    </VStack>;
}

export default function Menu() {
    return <Box mt={{ base: "100px", md: "150px" }}>
        <Text fontWeight="500" color="#630165" fontSize="3xl" textAlign="center">Our Menu</Text>
        <Tabs variant="unstyled" mt={7}>
            <TabList justifyContent="center">
                <Tab mx={2} _selected={{ bg: "#ee2e81", color: "white" }} borderWidth="1px" color="#ee2e81" rounded="0" borderColor="#ee2e81">Cakes</Tab>
                <Tab mx={2} _selected={{ bg: "#ee2e81", color: "white" }} borderWidth="1px" color="#ee2e81" rounded="0" borderColor="#ee2e81" >Donuts</Tab>
                <Tab mx={2} _selected={{ bg: "#ee2e81", color: "white" }} borderWidth="1px" color="#ee2e81" rounded="0" borderColor="#ee2e81" >Bread</Tab>
            </TabList>
            <TabPanels mt="60px">
                <TabPanel>
                    <Stack direction={{ base: "column", md: "row" }} spacing="30px">
                        <CustomCard url="http://tastysprings.herokuapp.com/pictures/2.jpg" />
                        <CustomCard url="http://tastysprings.herokuapp.com/pictures/3.jpg" />
                    </Stack>
                </TabPanel>
                <TabPanel>
                    <Stack direction={{ base: "column", md: "row" }} spacing="30px">
                        <CustomCard url="http://tastysprings.herokuapp.com/pictures/1.png" />
                    </Stack>
                </TabPanel>
                <TabPanel>
                    <Stack direction={{ base: "column", md: "row" }} spacing="30px">
                        <CustomCard url="http://tastysprings.herokuapp.com/pictures/4.jpg" />
                    </Stack>
                </TabPanel>
            </TabPanels>
        </Tabs>
        {/* <CustomTabs /> */}
        {/* <Tabs colorScheme="green">
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs> */}
    </Box>
};
