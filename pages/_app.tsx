import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Nav from '../src/Nav'


export default function App({ Component, pageProps }: AppProps) {
  return(<ChakraProvider>
    <Nav >
    <Component {...pageProps} />
    </Nav>
  </ChakraProvider> )
}
