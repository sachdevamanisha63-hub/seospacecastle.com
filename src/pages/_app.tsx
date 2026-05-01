import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../../public/assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer";
import HomePage from "@/components/home";


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}