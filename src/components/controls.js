import { FiPlay, FiPause, FiRefreshCw } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectTimer, start_stop, update, stopId, resetTime, switchTime } from '../features/setTimersSlice';

export default function Controls() {
    const dispatch = useDispatch();
    const timer = useSelector(selectTimer);

    useEffect(() => {
        if (timer.timeLeft < 0) {
            dispatch(switchTime());
            let beep = document.getElementsByTagName('audio')[0];
            beep.play();
        }
    }, [timer.timeLeft, dispatch])

    const updateTimer = () => {
        dispatch(update());

    }

    const handleClick = () => {
        if (!timer.started) {
            dispatch(start_stop());
            var intervalHandler = setInterval(updateTimer, 1000);
            dispatch(stopId(intervalHandler))
        } else {
            dispatch(start_stop());
            clearInterval(timer.intervalID);
        };

    }

    const handleReset = () => {
        if (timer.started) {
            dispatch(start_stop());
            clearInterval(timer.intervalID);
        }
        dispatch(resetTime());
        let beep = document.getElementsByTagName('audio')[0];
        beep.pause();
        beep.currentTime = 0;
    }

    return (
        <div className="d-flex justify-content-evenly">
            <button type="button" className="displaybutton" id="start_stop" onClick={handleClick}>{timer.started ? <FiPause size={40} /> : <FiPlay size={40} />}</button>
            <button type="button" className="displaybutton" id="reset" onClick={handleReset}><FiRefreshCw size={40} /></button>
            <audio src="/assets/ping.mp3" id="beep"></audio>
        </div>
    )
}