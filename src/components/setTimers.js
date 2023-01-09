import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { increment, decrement } from '../features/setTimersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectTimers } from '../features/setTimersSlice';

export default function SetTimers(props) {
    const dispatch = useDispatch();
    const timers = useSelector(selectTimers);

    return (
        <div>
            <h5 className="display-5 text-capitalize" id={timers[props.index].name+"-label"}>{timers[props.index].name}</h5>
            <div className="d-flex justify-content-evenly">
                <button type="button" 
                className="displaybutton" 
                onClick={() => dispatch(decrement(props.index))} 
                id={timers[props.index].name+"-decrement"}>
                    <AiOutlineArrowDown size={40}/>
                    </button>
                <h5 className="display-5" id={timers[props.index].name+"-length"}>{timers[props.index].time}</h5>
                <button type="button" 
                className="displaybutton" 
                onClick={() => dispatch(increment(props.index))}
                id={timers[props.index].name+"-increment"}>
                    <AiOutlineArrowUp size={40}/>
                    </button>
            </div>
        </div>
    )
}