import { RPSIcon } from '@/components/rps/RPSIcon';
import styles from './RPSControls.module.css';
import clsx from 'clsx';
export function RPSControls() {
    const onSubmit = (data) => console.log(data);
    return (
        <div
            className={clsx(
                'flex aspect-[2/1.73] w-72 flex-row justify-between text-white',
                styles.triangle
            )}>
            <RPSIcon hand="rock" />
            <div className="self-start">
                <RPSIcon hand="paper" />
            </div>
            <RPSIcon hand="scissors" />
        </div>
    );
}
