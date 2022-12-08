import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="TextTealle" key="title"/>
        <meta property="og:description" content="TextTealle is an AI powered blog post generator which uses GPT-3" key="description"/>
        <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
