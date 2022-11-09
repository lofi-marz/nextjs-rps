import { Dispatch, SetStateAction, useState } from 'react';
import { FaMagic } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

export function Welcome() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center dark:bg-dark-900 dark:text-white">
            <h1 className="text-4xl">Quick RPS</h1>
            <motion.form
                className="flex flex-col items-center justify-center gap-5 p-10 text-3xl"
                layout>
                <AnimatePresence>
                    <CreateGame />
                </AnimatePresence>
                <input
                    placeholder="Join"
                    className="w-full rounded border-2 border-white p-4 text-center placeholder:text-dark-300 dark:bg-dark-900 dark:text-white"></input>
            </motion.form>
        </div>
    );
}

const codes = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee'];

function RedoCodeButton({
    setCode,
}: {
    setCode: Dispatch<SetStateAction<string>>;
}) {
    return (
        <button
            className="aspect-square h-full bg-primary p-5"
            onClick={(e) => {
                e.preventDefault();
                setCode(codes[Math.floor(Math.random() * 5)]);
            }}>
            <FaMagic />
        </button>
    );
}

function Code({
    code,
    setCode,
}: {
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
}) {
    return (
        <motion.div
            key="code"
            layout
            className={'flex w-full overflow-clip rounded dark:bg-dark-800'}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}>
            <AnimatePresence mode="wait">
                <motion.div
                    className="grow p-5 text-center"
                    key={code}
                    layoutId="create-room"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    {code}
                </motion.div>
            </AnimatePresence>
            <RedoCodeButton setCode={setCode} />
        </motion.div>
    );
}

function CreateGameButton({
    setCode,
}: {
    setCode: Dispatch<SetStateAction<string>>;
}) {
    return (
        <motion.button
            key="no-code"
            layoutId="create-room"
            className="w-full rounded p-5 dark:bg-dark-800"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            onClick={(e) => {
                e.preventDefault();
                setCode(codes[Math.floor(Math.random() * 6)]);
            }}>
            Create Game
        </motion.button>
    );
}

function CreateGame() {
    const [code, setCode] = useState('');

    if (code) return <Code code={code} setCode={setCode} />;
    return <CreateGameButton setCode={setCode} />;
}
