import { Footer, Navbar } from "@/components";
import { Container } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Providers } from "./providers";

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
      <body>
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
