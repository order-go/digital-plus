import {MdDeliveryDining} from "react-icons/md";

const ButtonDelivery=({onClick,color}: {onClick: () => void,label?: string; color?: string}) => {
    return <button className={`  text-textPrimary  active:text-green-600 flex flex-row border-primary  font-semibold ${color}`} onClick={onClick}>

        <MdDeliveryDining className="w-8 h-8" />
        <span >Delivery Service</span>

    </button>;
}

export default ButtonDelivery;