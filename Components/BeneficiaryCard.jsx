import React from 'react'
export const BeneficiaryCard = ({ userName, accountNumber, image }) => {
  return (
    <div className="w-full border border-[#d7dfe5] bg-cyan-300  flex flex-col mb-3 rounded-lg items-center py-2 md:px-4 px-2">
      <div className="flex justify-between w-full items-center my-2 text-gray-800 ">
        <div className="flex gap-3 items-center ">
          <div className="rounded-full border flex justify-center items-center text-gray-900 bg-cyan-50  border-[#d7dfe5] w-12 h-12">
            {image ? (
              <img src={image} alt={userName} />
            ) : (
              <h1 className="font-semibold text-lg">{userName[0]}</h1>
            )}
          </div>
          <div className="flex flex-col">
            <div>Name : {userName}</div>
            <div>Bank : Edge Bank</div>
            <div className="block md:hidden">
              Account Number : {accountNumber}
            </div>
          </div>
        </div>
        <div className="hidden md:block">Account Number : {accountNumber}</div>
      </div>
        
    </div>
  )
}
