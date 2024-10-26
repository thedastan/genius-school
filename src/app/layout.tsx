import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';

import LayoutPage from "@/components/layout/LayoutPage";
import { ChakraProvider } from "@chakra-ui/react";


const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "GENIUS SCHOOL",
  description:
    "образование будущего",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <LayoutPage>{children}</LayoutPage>
        </ChakraProvider>
      </body>
    </html>
  );
}
