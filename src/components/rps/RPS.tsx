import Head from 'next/head';
import { RPSControls } from '@/components/rps';

export default function RPS() {
    return (
        <main className="flex h-screen w-full items-center justify-center bg-primary">
            <RPSControls />
        </main>
    );
}
