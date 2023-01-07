import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { increment, decrement } from '../features/setTimersSlice';
import { useDispatch } from 'react-redux';

export default function SetTimers(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <h5 className="display-5 text-capitalize">{props.name}</h5>
            <div className="d-flex justify-content-evenly">
                <button type="button" className="displaybutton" onClick={() => dispatch(decrement({name: props.name, index: props.index}))}><AiOutlineArrowDown size={40}/></button>
                <h5 className="display-5">{props.time}</h5>
                <button type="button" className="displaybutton" onClick={() => dispatch(increment({name: props.name, index: props.index}))}><AiOutlineArrowUp size={40}/></button>
            </div>
        </div>
    )
}