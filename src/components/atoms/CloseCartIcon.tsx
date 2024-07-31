
import {FaArrowRight} from "react-icons/fa";


const CloseCartIcon=({onClick}: {onClick: () => void}) => {
    return (<button onClick={onClick} className="">
        <FaArrowRight className="text-textPrimary h-6 w-6" />
    </button>);
}

export default CloseCartIcon;