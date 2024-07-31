import data,{type ContactItem} from '../../constant/data';

const Footer=() => {
  return (
    <footer className='bg-primary text-white py-4 border-t-2 border-brown shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center text-center space-y-4'>
          <div className='text-textPrimary'>
            <h1 className='text-xl font-bold'> {data?.contactData[0]?.name}</h1>
            <p className='mt-1 text-sm text-textSecundary'>La tienda con los productos mas economicos de la ciudad</p>
          </div>
          <div className='text-textSecundary text-sm'>
            <p>&copy; 2024 <span>
              {data?.contactData[0]?.name}
            </span>
              . Todos los derechos reservados.</p>
          </div>
          <div className='mt-4 flex justify-center space-x-4'>
            <ul className=' flex flex-row justify-between'>
              {data?.contactData.map((item: ContactItem,index: number) => (
                <li
                  key={index}
                  className='p-2 flex text-textPrimary active:text-red items-center gap-4'
                >
                  {item.icon&&<item.icon className='mr-2 h-8 w-8' />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
