"use client";
import { FC, ReactNode } from "react";
import Header from "./header/Header";
import { Box } from "@chakra-ui/react";
import Footer from "./footer/Footer";

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
 
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
       <Header />
          <Box as="main" flex="1">
            {children}
          </Box>
          <Box mt="auto">
            <Footer />
          </Box>
    </Box>
  );
};

export default LayoutPage;
