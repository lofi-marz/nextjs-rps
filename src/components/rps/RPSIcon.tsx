import { motion } from 'framer-motion';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

type Hand = 'rock' | 'paper' | 'scissors';

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
            className="text-6xl"
            drag
            dragSnapToOrigin
            dragElastic={0.1}
            whileDrag={{ scale: 1.1 }}>
            <HandIcon hand={hand} />
        </motion.div>
    );
}
