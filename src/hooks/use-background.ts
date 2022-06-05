import {useSelector} from 'react-redux';
import {AppState} from '../store';

const colors: string[] = [
    '#5e35b1',
    '#3949ab',
    '#00acc1',
    '#00897b',
    '#e53935',
    '#fdd835',
    '#fb8c00',
    '#546e7a'
];

export const useBackground = () => {
    const count = useSelector((state: AppState) => state.counter.count);

    document.body.style.backgroundColor = colors[Math.abs(count) % colors.length];
}
