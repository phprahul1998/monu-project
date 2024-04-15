// /pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <title>
            Renevatec: Pioneering Solar Power Solutions for a Greener Planet
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="At Renevatec, we are pioneers in the renewable energy sector, dedicated to making solar power accessible and effective for everyone. Founded in Berlin, we blend innovative technology with deep industry expertise to connect customers with the best solar energy solutions available."
          />
          <meta
            name="keywords"
            content="Renevatec, renewable energy, solar power, accessibility, innovation, customer satisfaction, integration, Berlin, industry expertise, clean energy, greener planet, effortless, everyday lives, pioneers, standard, technology, solutions, vision, advancement, sustainability"
          />

          <meta
            property="og:title"
            content="Renevatec: Pioneering Solar Power Solutions for a Greener Planet"
          />
          <meta
            property="og:description"
            content="Renevatec is a pioneering company based in Berlin, dedicated to making solar power accessible and effective for everyone. We blend innovative technology with deep industry expertise to connect customers with the best solar energy solutions available."
          />
          <meta
            property="og:image"
            content="https://renevatec.de/_next/image?url=%2Fimg%2Flogo.png&w=640&q=75"
          />
          <meta
            name="description"
            content="Renevatec is a Berlin-based company dedicated to making solar power accessible and effective for everyone. We blend innovative technology with deep industry expertise to connect customers with the best solar energy solutions available. Our vision is a world where renewable energy is the standard, effortlessly integrated into everyday lives."
          />

          <link
            rel="icon"
            type="image/png"
            href="favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-16x16.png"
            sizes="16x16"
          />

          <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon.png"
          />

          <link rel="icon" sizes="192x192" href="android-chrome-192x192.png" />

          <link rel="icon" sizes="512x512" href="android-chrome-512x512.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
