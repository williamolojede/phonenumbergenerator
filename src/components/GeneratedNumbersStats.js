import React from 'react'

export default function GeneratedNumberStats({ count, min, max }) {
  return (
    <ul className="list-reset">
      <li className="text-center">
        <p className="text-grey-dark">MIN</p>
        <p className="mt-3 text-xl font-bold uppercase text-grey-darker">0{min}</p>
      </li>
      <li className="text-center mt-3">
        <p className="text-grey-dark">MAX</p>
        <p className="mt-3 text-xl font-bold uppercase text-grey-darker">0{max}</p>
      </li>
      <li className="text-center mt-3">
        <p className="text-grey-dark">TOTAL NUMBERS GENERATED</p>
        <p className="mt-3 text-xl font-bold uppercase text-grey-darker">{count}</p>
      </li>
    </ul>
  )
}
