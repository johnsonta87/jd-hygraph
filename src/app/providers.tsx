"use client";

import { theme } from "@/lib/";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Juana';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(/fonts/juana/juana-regular.woff) format('woff'),
          url(/fonts/juana/juana-regular.woff2) format('woff2');
      }
      @font-face {
        font-family: 'FoundersGrotesk';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url(/fonts/founders/FoundersGrotesk-Regular.woff) format('woff'),
          url(/fonts/founders/FoundersGrotesk-Regular.woff2) format('woff2');
      }
      @font-face {
        font-family: 'FoundersGrotesk';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url(/fonts/founders/FoundersGrotesk-Light-300.otf) format('otf'),
          url(/fonts/founders/FoundersGrotesk-Light.woff) format('woff'),
          url(/fonts/founders/FoundersGrotesk-Light.woff2) format('woff2');
      }
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/raleway/v18/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrcVIT9d0c8.woff) format('woff');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `}
  />
);

const client = new ApolloClient({
  uri: process.env.HYGRAPH_ENDPOINT,
  cache: new InMemoryCache(),
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider {...{ client }}>
      <ChakraProvider theme={theme}>
        <Fonts />
        {children}
      </ChakraProvider>
    </ApolloProvider>
  );
}
