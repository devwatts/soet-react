import "../styles/globals.css";
import Head from "next/head";
import { StrictMode } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,500&family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </StrictMode>
  );
}

export default MyApp;
