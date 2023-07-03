import React from 'react';
// import star from '../images/icon_star.png';

export const LatestOrderCard = ({ img }) => {
  return (
    <div className='flex-shrink-0 w-72 h-[115px] px-4 pt-1 border-darkGray border-[1.5px] rounded-2xl solid-shadow'>
      <div className='flex justify-between items-center'>
        <div>
          <div className='font-bold text-body'>제네시스 버거</div>
          <div className='w-32 border-b-[1.5px] pb-1 border-purple'></div>
          <div className='flex mt-1'>
            {Array(5)
              .fill('')
              .map((_, index) => (
                <div>⭐</div>
              ))}
          </div>
          <div className='text-caption mt-3 text-darkGray'>제네시스 버거세트</div>
        </div>
        <div className='border-deepYellow border-4 w-24 h-24 rounded-full mt-1 flex items-center justify-center'>
          <img src={img} alt='' className='w-full h-full object-cover rounded-full' />
        </div>
      </div>
    </div>
  );
};