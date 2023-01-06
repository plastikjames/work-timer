import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

export default function SetTimers(props) {
    return (
        <div>
            <h5 className="display-5">{props.name}</h5>
            <div className="d-flex justify-content-evenly">
                <button type="button" className="displaybutton"><AiOutlineArrowDown size={40}/></button>
                <h5 className="display-5">5</h5>
                <button type="button" className="displaybutton"><AiOutlineArrowUp size={40}/></button>
            </div>
        </div>
    )
}