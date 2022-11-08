import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Rubik } from '@next/font/google';
const defaultFont = Rubik();

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className={defaultFont.className}>
            <Component {...pageProps} />
        </main>
    );
}
