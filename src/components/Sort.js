import React from 'react'

export default function Sort({ handleSort }) {
  return (
    <div>
      <p className="uppercase mb-6 text-center text-grey-dark">Sort</p>
      <div className="flex justify-center">
        <button 
          className="border-2 border-grey-darker p-2 text-xl font-bold uppercase text-grey-darker mr-2"
          onClick={handleSort('asc')}
        >ASC</button>
        <button 
          className="border-2 border-grey-darker p-2 text-xl font-bold uppercase text-grey-darker ml-2"
          onClick={handleSort('dsc')}
        >DSC</button>
      </div>
    </div>
  )
}
