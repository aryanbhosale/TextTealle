import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="description" content="TextTealle is an AI powered blog post generator which uses GPT-3" />
        <meta name="keywords" content="GPT-3, OpenAI, ChatGPT" />
        <meta name="author" content="Aryan Bhosale" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
