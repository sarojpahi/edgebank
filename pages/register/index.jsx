import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="h-[calc(100vh-60px)] w-full relative">
      <div className="h-[50%]  bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-500 w-full">
        <div className="lg:block hidden w-full">
          <div className="w-[60%]  text-white flex">
            <div className="p-16">
              <h2 className="text-4xl font-semibold pb-2">Sign Up to</h2>
              <h3 className="text-xl font-semibold pb-2">
                Edge Bank - The New Bank
              </h3>
              <p>
                Gone are the days for brick and mortar banks where you need to
                employ a large workforce and maintain a large infrastructure.
                Today when customers are going digital - banks need to evolve
                and get into the digital way of doing things. This is the first
                step.
              </p>
            </div>
            <div className="w-full">
              <img
                className="w-full"
                src="https://user-images.githubusercontent.com/107534043/209082815-25c27656-2767-4725-a256-ff9c1086151e.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white top-2 lg:top-[3%] lg:right-[4%] lg:w-[28%] w-full md:w-[90%] md:right-[5%]  rounded-lg px-4 py-2 shadow-md">
        <div className="flex justify-between items-center pb-2">
          <h3 className="text-xl cursor-default">
            Welcome to <span className="text-[#0089ED]">Edge Bank</span>
          </h3>
          <p className="flex flex-col">
            <span className="text-gray-500">Have an account?</span>
            <Link href={"/login"}>
              <span className="text-[#0089ED]">Sign in</span>
            </Link>
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold cursor-default">Sign Up</h2>
        </div>
        <div>
          <form
            id="registerform"
            className="flex flex-col gap-2 p-4"
            autoSave="off"
            autoComplete="off"
          >
            <label>Enter your Full Name</label>
            <input type="text" placeholder="Full Name" />
            <label>Enter Email Address</label>
            <input type="email" placeholder="Email Address" />
            <label>Enter Password</label>
            <input type="password" placeholder="Password" />
            <label>Enter Confirm Password</label>
            <input type="password" placeholder="Confirm Password" />
            <label>Enter Phone Number</label>
            <input type="text" placeholder="Phone Number" />
            <label>Enter Aadhar Number</label>
            <input type="text" placeholder="Aadhar Number" />
            <label>Enter DOB</label>
            <input type="date" />
            <input type="submit" value={"Register"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
