import { motion, Variants } from 'framer-motion';
import {
    FaHandPaper,
    FaHandRock,
    FaHandScissors,
    FaLock,
} from 'react-icons/fa';
import { Hand } from '../../rps/rps';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const iconDragVariants: Variants = {
    drag: { scale: 1.3 },
};

const lockVariants: Variants = {
    hover: { scale: 2 },
};

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

type RPSIconProps = {
    hand: Hand;
    setCurrentHand: Dispatch<SetStateAction<Hand | null>>;
};

export function RPSIcon({ hand, setCurrentHand }: RPSIconProps) {
    return (
        <motion.div
            className="m-auto w-min text-6xl"
            drag
            dragSnapToOrigin
            dragElastic={0.1}
            variants={iconDragVariants}
            whileDrag="drag"
            onDragStart={() => setCurrentHand(hand)}
            onDragEnd={() => setCurrentHand(null)}>
            <HandIcon hand={hand} />
        </motion.div>
    );
}

export function RPSLock() {
    const [isHovered, setHovered] = useState(false);

    return (
        <motion.div
            className="m-auto w-min rounded-full bg-dark-900 p-5 text-6xl drop-shadow"
            variants={lockVariants}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover="hover">
            <FaLock />
        </motion.div>
    );
}
