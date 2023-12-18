import { Footer, Navbar } from "@/components";
import { Container } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jenny Diep",
  description: "Toronto-based designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Container maxW="1274px" color="black">
            {children}
          </Container>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
