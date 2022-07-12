import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link href="images/favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="images/favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="images/favicons/icon-192x192.png"></link>
        <meta name="msapplication-TileColor" content="#ffac35" />
        <meta name="theme-color" content="#ffac35" />
        <link
          rel="android-image"
          href="/images/splashscreens/android_splash.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}