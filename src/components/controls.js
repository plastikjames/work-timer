import { FiPlay, FiPause, FiRefreshCw } from 'react-icons/fi';

export default function Controls() {
    return (
        <div className="d-flex justify-content-evenly">
            <button type="button" className="displaybutton"><FiPlay size={40}/></button>
            <button type="button" className="displaybutton"><FiPause size={40}/></button>
            <button type="button" className="displaybutton"><FiRefreshCw size={40}/></button>
        </div>
    )
}