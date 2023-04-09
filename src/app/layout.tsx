"use client";

import { ChakraProvider } from "@chakra-ui/react"
import { CacheProvider } from '@chakra-ui/next-js'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </CacheProvider>

      </body>
    </html>
  )
}