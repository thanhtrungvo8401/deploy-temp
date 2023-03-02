import '../styles/globals.css';
import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/organisms/navigation';
import Footer from '../components/organisms/footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col justify-between h-full bg-c-black">
      <Navigation />

      <main className="pt-10">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  );
}
