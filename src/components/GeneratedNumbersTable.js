import React from 'react'

export default function GeneratedNumbersTable({ numbers }) {
  return (
    <table className="w-full shadow-md">
      <thead className="bg-grey-light">
        <tr className="text-grey-dark">
          <th className="py-3">COUNT</th>
          <th className="py-3">PHONE NUMBER</th>
        </tr>
      </thead>
      <tbody>
        {
          numbers.map((phoneNumber, ix) => (
            <tr key={ix} className="border-b border-grey-light text-center text-grey-darker font-bold">
              <td className="py-3">{ix + 1}</td>
              <td className="py-3">0{phoneNumber}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
