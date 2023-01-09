import { useSelector } from 'react-redux';
import { selectTimer } from '../features/setTimersSlice';

export default function Timer() {
    const timer = useSelector(selectTimer);

    const formatTime = (time) => {
        let secs = Math.floor(time % 60);
        let mins = Math.floor(time / 60);
        if (secs < 10) {
            secs = "0" + secs;
        };
        if (mins < 10) {
            mins = "0" + mins;
        }
        return `${mins}:${secs}`;
    }

    return (
        <div className="border border-dark rounded">
            <h5 className="display-5" id="timer-label">{timer.timerIndex === 1 ? "Session" : "Break"}</h5>
            <h5 className="display-1" id="time-left">{formatTime(timer.timeLeft)}</h5>
        </div>
    )
}