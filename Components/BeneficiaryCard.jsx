import Link from "next/link";
import React from "react";
const random_bg_color = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
};
export const BeneficiaryCard = ({ name, id, accountNumber, avatar }) => {
  return (
    <div className="w-full border border-[#d7dfe5] bg-cyan-400  flex flex-col mb-3 rounded-lg items-center py-2 px-4">
      <div className="flex justify-between w-full items-center my-2 text-gray-800 ">
        <div className="flex gap-3 items-center ">
          <div
            className="rounded-full border flex justify-center items-center text-gray-300  border-[#d7dfe5] w-12 h-12"
            style={{ background: `${random_bg_color()}` }}
          >
            {avatar ? (
              <img src={avatar} alt={name} />
            ) : (
              <h1 className="font-semibold text-lg">{name[0]}</h1>
            )}
          </div>
          <div>
            <div>Name : {name}</div>
            <div>Bank : Edge Bank</div>
          </div>
        </div>
        <div>Account Number : {accountNumber}</div>
      </div>
      <Link href={`/transfer/beneficiary/${id}`}>
        <div className="border tracking-wider w-max text-center py-[6px] px-3 border-[#d7dfe5] bg-white hover:bg-[#d7dfe5] rounded-md transition-all duration-300">
          Send/Receive
        </div>
      </Link>
    </div>
  );
};
