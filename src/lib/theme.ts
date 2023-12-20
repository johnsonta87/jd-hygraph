import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: "#F8F8F6",
        height: "100%",
        fontSize: "1.125rem",
        fontFamily: "FoundersGrotesk, Raleway",
      },
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: "#000",
        borderRadius: '6px',
      },
      h1: {
        fontFamily: "Juana",
        fontSize: "3rem",
        lineHeight: "1.5em",
      },
      h2: {
        fontFamily: "Juana",
        fontSize: "3rem",
        lineHeight: "1.5em",
      },
      h3: {
        fontFamily: "Juana",
        fontSize: "1.5rem",
      },
      p: {
        fontSize: "1.125rem",
      },
    }),
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: "#949494",
    clay: "#A9452F",
  },
  breakpoints: {
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  },
  fonts: {
    heading: "Juana",
    body: "FoundersGrotesk, Raleway",
  }
});
