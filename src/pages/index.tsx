import Head from 'next/head';
import { RPSControls } from '@/components/rps';
import RPS from '@/components/rps/RPS';
import { Welcome } from '@/components/welcome';

export default function Home() {
    return (
        <div className="dark flex min-h-screen w-full flex-col items-center justify-center">
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Welcome />
            <RPS />
        </div>
    );
}
