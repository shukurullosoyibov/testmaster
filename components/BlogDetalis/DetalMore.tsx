import React from 'react'
interface ItemData {
    first: string;
    second: string;
  }
const DetalMore = ({item}: {item: ItemData}) => {
  return (
    <div className='p-4 text-primary text-lg mb-4'>
      <h3 className='text-left font-semibold text-blue mb-4'>
        {item.first}
      </h3>
      <h3 className='text-left'>
        {item.second}
      </h3>
    </div>
  )
}

export default DetalMore
