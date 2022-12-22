import React from "react";

export const TR = ({ status, name, id, amount, balance }) => {
  const color =
    status === "credit"
      ? "bg-green-100 border-green-200"
      : "bg-red-100 border-red-200";
  return (
    <tr className={`${color}`}>
      <td className="text-sm text-gray-900 font-medium px-2 py-4 whitespace-nowrap">
        {id}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {name}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {status}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {amount}
      </td>
      <td className="text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap">
        {balance}
      </td>
    </tr>
  );
};
