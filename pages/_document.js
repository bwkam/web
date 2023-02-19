import { Html, Head, Main, NextScript } from 'next/document'
import { useRecoilValue } from 'recoil'

export default function Document() {


  return (
    <Html lang="en">
      <Head />
      <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css'
        />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
