import "../styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("pageProps", pageProps);

  console.log("Component");
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
export default MyApp;
