import React from "react";
import { Navicon } from "./Navicon";
import { FaRegUser } from "react-icons/fa";
import {
  MdAccountBalanceWallet,
  MdOutlinePayment,
  MdOutlineWifiCalling3,
} from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BiTransferAlt } from "react-icons/bi";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="h-[70px] flex items-center px-2 bg-blue-200">
      <div className="px-4">
        <img
          className="w-[150px] "
          src="https://user-images.githubusercontent.com/107534043/208931176-27398e7e-6d50-4729-8415-8e0403eaac57.png"
          alt="Edge Bank"
        />
      </div>
      <div className="w-full  gap-3 flex items-center justify-between px-4 lg:px-20 text-gray-600">
        <Link href="/retail/profile">
          <Navicon icon={<FaRegUser />} title="Profile" />
        </Link>
        <Link href={"/retail/account"}>
          <Navicon icon={<MdAccountBalanceWallet />} title="Account" />
        </Link>
        <Link href={"/retail/payment"}>
          <Navicon icon={<MdOutlinePayment />} title="Payment" />
        </Link>
        <Link href={"/retail/transfer"}>
          <Navicon icon={<BiTransferAlt />} title="Transfer" />
        </Link>
        <Link href={"/retail/enqueries"}>
          <Navicon icon={<MdOutlineWifiCalling3 />} title="Enqueries" />
        </Link>
      </div>
      <div className="flex w-max items-center gap-3">
        <div className="whitespace-nowrap text-lg">Mr. Pankaj</div>
        <div className="text-red-400 hover:text-red-600 transition-all duration-300">
          <Navicon icon={<RiLogoutCircleRLine />} title="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
