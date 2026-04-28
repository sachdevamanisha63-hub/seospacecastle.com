import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="stylesheet" href="/assets/css/main.css" />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
