import '../app/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen bg-white mx-auto w-1/2">
      <Header />
      <main className='container  '>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
export default MyApp;
