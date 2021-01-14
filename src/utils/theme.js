import { extendTheme } from "@chakra-ui/react";

const CustomTab = {
    parts: ["tablist", "tabpanel", "tab"],
    defaultProps: { variant: "solid" },
    baseStyle: {
        tab: {
            px: 4,
            py: 3,
            color: "red.500",
        },
    },
    sizes: {
        sm: {
            tab: {
                fontSize: 5,
            },
            tablist: {
                p: 4,
            },
        },
    },
    variants: {
        outline: {
            tablist: {
                border: "1px solid",
            },
        },
        solid: {
            tab: {
                bg: "red.300",
            },
        },
    },
};

const customTheme = extendTheme({
    fonts: {
        body: 'Josefin Slab',
        heading: 'Sacramento'
    },
    styles: {
        global: {
            body: {
                bgImage: "url('https://svgshare.com/i/SzJ.svg')"
            }

        }
    }
});
export default customTheme;
