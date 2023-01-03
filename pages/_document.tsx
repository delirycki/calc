import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import Nav from '../src/Nav'
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}
const theme = extendTheme({ config })

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
