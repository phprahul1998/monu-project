// /pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Renevatec ist ein in Berlin ansässiges Unternehmen, das sich der Zugänglichkeit und Effektivität von Solarenergie für alle verschrieben hat. Wir verbinden innovative Technologie mit tiefgreifendem Branchenwissen, um Kunden mit den besten verfügbaren Solarenergielösungen zu verbinden. Unsere Vision ist eine Welt, in der erneuerbare Energien der Standard sind und mühelos in den Alltag integriert werden."
          />
          <meta
            name="keywords"
            content="Renevatec, erneuerbare Energien, Solarenergie, Zugänglichkeit, Innovation, Kundenzufriedenheit, Integration, Berlin, Branchenkenntnisse, saubere Energie, grünerer Planet, mühelos, Alltagsleben, Pioniere, Standard, Technologie, Lösungen, Vision, Fortschritt, Nachhaltigkeit"
          />

          <meta
            property="og:title"
            content="Renevatec: Bahnbrechende Solarenergielösungen für einen grüneren Planeten"
          />
          <meta
            property="og:description"
            content="Renevatec ist ein in Berlin ansässiges Pionierunternehmen, das sich der Zugänglichkeit und Effektivität von Solarenergie für alle verschrieben hat. Wir verbinden innovative Technologie mit tiefgreifendem Branchenwissen, um Kunden mit den besten verfügbaren Solarenergielösungen zu verbinden."
          />

          <meta
            property="og:image"
            content="https://renevatec.de/_next/image?url=%2Fimg%2Flogo.png&w=640&q=75"
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
