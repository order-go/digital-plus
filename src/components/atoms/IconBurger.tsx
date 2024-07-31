import {useCart} from '../../hooks/useCart';
import {FaOpencart} from 'react-icons/fa';

const IconBurger=({
  onClick,
  productCount,
}: {
  onClick: () => void;
  productCount: number;
}) => {
  const {getTotalItems}=useCart();

  return (
    <button className='w-auto h-auto ' onClick={onClick}>
      <FaOpencart className='mr-2 w-6 h-6 active:text-primary text-textPrimary' />
      {productCount>0&&(
        <span className='absolute top-2 right-4  bg-tertiary rounded-full w-4 h-4 text-xs flex items-center justify-center text-textPrimary font-bold'>
          {getTotalItems()}
        </span>
      )}
    </button>
  );
};

export default IconBurger;
