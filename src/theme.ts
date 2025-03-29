import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
    fonts: {
      heading: "'Poiret One', sans-serif", 
      body: "'Poiret One', sans-serif",   
    },
  });

export default theme;