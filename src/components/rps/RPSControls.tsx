import { RPSIcon, RPSLock } from '@/components/rps/RPSIcon';
import styles from './RPSControls.module.css';
import clsx from 'clsx';
//TODO: Fix this so that the elements are placed evenly
export function RPSControls() {
    return (
        <div
            className={clsx(
                'aspect-[2/1.73] w-80 items-center justify-center justify-items-center text-white',
                styles.triangle
            )}>
            <RPSLock />
            <RPSIcon hand="rock" />
            <RPSIcon hand="paper" />
            <RPSIcon hand="scissors" />
        </div>
    );
}
