import { useSelector } from 'react-redux';

const EstimatePriceModal = () => {

  const Totalprice = useSelector((state) => state.selectedMaterials.PriceTotal);
//   const T_price = Math.ceil(Totalprice);
//   const count = useSelector((state) => state.allCartData.value);

  

  return (
    <div className='w-full lg:flex items-center justify-end lg:pr-5 h-full'>
      <div className={`border font-semibold flex md:text-base text-sm items-center rounded-md p-2 bg-slate-100  opacity-90`}>
        {`Estimated Price : $ ${Totalprice}`}
      </div>
    </div>
  );
};

export default EstimatePriceModal;
