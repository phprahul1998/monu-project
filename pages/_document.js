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
            content="
            Photovoltaikanlage Einfamilienhaus, 
            Vorteile Photovoltaik Einfamilienhaus, 
            Photovoltaik Vollversorgung Einfamilienhaus, 
            Energiemanagement System - EMS, 
            Lokal erzeugter Strom, 
            Selbst erzeugter Strom, 
            Nutzung erneuerbarer Energiequellen, 
            Energie neu denken, 
            Strombezug hauseigene Photovoltaikanlage, 
            Intelligente Speicherlösung Photovoltaik, 
            Dynamischer Stromtarif, 
            Smarte Steuerung Speichersystem, 
            Stabilisierung Stromnetz, 
            Intelligente Stromspeicher, 
            Kostenvorteil Mieter Vermieter Photovoltaik, 
            Niedriger Strompreis Mieter, 
            Langfristige Investition Photovoltaik, 
            Rendite Photovoltaikanlage Immobilie, 
            Amortisation Photovoltaikanlage, 
            Überschussvergütung Strom Photovoltaik, 
            Rendite durch Photovoltaikanlage, 
            Finanzierung PV-Anlagen, 
            Photovoltaik-Finanzierungsmodelle, 
            Investition in Photovoltaik, 
            Preis-Leistungsverhältnis Photovoltaik, 
            Optimales Kosten-Nutzen-Verhältnis PV, 
            Günstiger Nacht-Strom speichern, 
            Intelligente Speicher Photovoltaikanlage, 
            Qualität des Speichers PV, 
            Einfache Bedienung Energiespeicher, 
            Hohe Lade- und Entladezyklen Speicher, 
            Garantiebedingungen Energiespeicher, 
            Zusammenarbeit mit Fachfirmen Photovoltaik, 
            Langfristige Garantien PV-Module, 
            Speicher Garantiezeiten, 
            Stromnetz entlasten, 
            Reduktion Überkapazitäten Stromnetz, 
            Ausbau erneuerbarer Energien, 
            Erneuerbare Energien Anteil erhöhen, 
            Reduktion klimaschädliche Emissionen, 
            Erneuerbare Energieüberschüsse nutzen, 
            Umstellung auf Sonnenstrom, 
            Globale Energiewende Photovoltaik, 
            Photovoltaikbranche, 
            Markt für Photovoltaik konsolidiert, 
            Staatliche Förderungen Photovoltaik, 
            Schlüsselfertige Photovoltaik-Konzepte, 
            Plug-and-Play Photovoltaikanlagen, 
            Selbstinstallation PV-Anlage
            "
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
            content="https://renevatec.de/_next/image?url=%2Fimg%2Fog_logo.png&w=640&q=75"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer',''GTM-PX4RF9N5');</script>`,
            }}
          />

          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PX4RF9N5"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
