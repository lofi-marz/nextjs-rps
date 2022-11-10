import { motion } from 'framer-motion';
import {
    FaHandPaper,
    FaHandRock,
    FaHandScissors,
    FaLock,
} from 'react-icons/fa';
import { Hand } from '../../rps/rps';

function HandIcon({ hand }: { hand: Hand }) {
    switch (hand) {
        case 'rock':
            return <FaHandRock />;
        case 'paper':
            return <FaHandPaper />;
        case 'scissors':
            return <FaHandScissors />;
        default:
            return <FaHandRock />;
    }
}

export function RPSIcon({ hand }: { hand: Hand }) {
    return (
        <motion.div
            className="m-auto w-min text-6xl"
            drag
            dragSnapToOrigin
            dragElastic={0.1}
            whileDrag={{ scale: 1.1 }}>
            <HandIcon hand={hand} />
        </motion.div>
    );
}

export function RPSLock() {
    return (
        <motion.div className="m-auto w-min text-6xl">
            <FaLock />
        </motion.div>
    );
}
