import { useState } from 'react';
import { FaMagic } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

export function Welcome() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center dark:bg-dark-900 dark:text-white">
            <h1 className="text-4xl">Quick RPS</h1>
            <form className="flex flex-col items-center justify-center gap-5 p-10 text-3xl">
                <AnimatePresence>
                    <CreateGameButton />
                </AnimatePresence>
                <input
                    placeholder="Join"
                    className="w-full rounded border-2 border-white p-4 text-center placeholder:text-dark-300 dark:bg-dark-900 dark:text-white"></input>
            </form>
        </div>
    );
}

function CreateGameButton() {
    const [code, setCode] = useState('');
    const codes = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee'];
    if (code)
        return (
            <motion.div
                key="code"
                className={'flex w-full overflow-clip rounded dark:bg-dark-800'}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={code}
                        className="grow p-5 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        {code}
                    </motion.div>
                </AnimatePresence>

                <button
                    className="aspect-square h-full bg-primary p-5"
                    onClick={(e) => {
                        e.preventDefault();
                        setCode(codes[Math.floor(Math.random() * 5)]);
                    }}>
                    <FaMagic />
                </button>
            </motion.div>
        );
    return (
        <motion.button
            key="no-code"
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
