import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.scss';

import LayoutPage from "@/components/layout/LayoutPage";
import { ChakraProvider } from "@chakra-ui/react";
import { SITE_NAME } from "@/constants/seo/seo.constants";


const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
  description:
    "Развиваем таланты ваших детей с заботой и вниманием",
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
