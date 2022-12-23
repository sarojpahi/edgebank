import Link from "next/link";
import React from "react";
import { BeneficiaryCard } from "../../../Components/BeneficiaryCard";
const Transfer = () => {
  const data = [
    {
      name: "Saroj",
      avatar: "",
      accountNumber: "123456789",
      id: "1",
    },
    {
      name: "Saroj",
      avatar: "",
      accountNumber: "123456789",
      id: "2",
    },
    {
      name: "Saroj",
      avatar: "",
      accountNumber: "123456789",
      id: "3",
    },
  ];
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row lg:p-16 lg:justify-between gap-10">
      <div className="lg:w-[49%] w-full p-4 border rounded-lg shadow-lg border-[#d7dfe5]">
        <div className="w-full">
          <h1 className="text-xl text-center">Add Beneficiary</h1>
        </div>
        <div>
          <form
            id="beneficiaryform"
            className="flex flex-col gap-2 p-4"
            autoSave="off"
            autoComplete="off"
          >
            <label>Enter Full Name</label>
            <input type="text" placeholder="Full Name" />
            <label>Enter Bank Name</label>
            <input type="text" placeholder="Bank Name" />
            <label>Enter Account Number</label>
            <input type="text" placeholder="Account Number" />
            <label>Confirm Account Number</label>
            <input type="text" placeholder="Account Number" />
            <label>Enter IFSC Code</label>
            <input type="text" placeholder="IFSC Code" />
            <input type="submit" value={"Add Beneficiary"} />
          </form>
        </div>
      </div>
      <div className="lg:w-[49%] w-full p-4 border rounded-lg shadow-lg border-[#d7dfe5]">
        <div className="w-full">
          <h1 className="text-xl text-center">My Beneficiaries</h1>
        </div>
        <div className="mt-[21px]">
          {data?.map((el) => (
            <BeneficiaryCard {...el} key={el.id} />
          ))}
        </div>
        <Link href={"/retail/transfer/beneficiary"}>
          <div className="border w-full text-center py-[6px] px-3 border-[#d7dfe5] bg-[#d7dfe5] hover:bg-[#c2c8cd] rounded-md transition-all duration-300">
            All Beneficiaries
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Transfer;
