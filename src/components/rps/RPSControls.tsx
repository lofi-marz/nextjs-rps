import { RPSIcon, RPSLock } from '@/components/rps/RPSIcon';
import styles from './RPSControls.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Hand } from '../../rps/rps';
//TODO: Fix this so that the elements are placed evenly
export function RPSControls() {
    const [hand, setHand] = useState<Hand | null>(null);
    useEffect(() => {
        console.log(hand);
    }, [hand]);
    return (
        <div
            className={clsx(
                'flex aspect-square w-80 items-center justify-center justify-items-center text-white',
                styles.triangle
            )}>
            <RPSLock />
            <RPSIcon hand="rock" setCurrentHand={setHand} />
            <RPSIcon hand="paper" setCurrentHand={setHand} />
            <RPSIcon hand="scissors" setCurrentHand={setHand} />
        </div>
    );
}
