import React from 'react'

export const TR = ({ transactionId, transaction, balance }) => {
  const color = transaction.credit
    ? 'bg-green-100 border-green-200'
    : 'bg-red-100 border-red-200'
  return (
    <tr className={`${color}`}>
      <td className="text-sm text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
        {transactionId}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {transaction.credit
          ? transaction.sender.userName
          : transaction.receiver.userName}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {transaction.credit ? 'credit' : 'debit'}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {transaction.credit ? transaction.credit : transaction.debit}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {balance}
      </td>
    </tr>
  )
}
