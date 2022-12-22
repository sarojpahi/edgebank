import React from "react";
import { TR } from "../../Components/TR";

const account = () => {
  let data = [];
  return (
    <div className="w-[98%] mx-auto sm:w-full">
      <div className="sm:my-0 my-4 border rounded-lg flex flex-col justify-center items-center border-gray-200 lg:p-4 p-2">
        <div className="whitespace-nowrap text-xl  py-4 ">
          <h1 className=" underline">Account Summary</h1>
        </div>
        <div className="flex lg:w-[60%] w-full mx-auto mt-2 md:p-2 sm:m-0  justify-between">
          <div className="w-max">
            <h2>Balance : ₹ 10000</h2>
            <h2>Peak Balance : ₹ 20000</h2>
          </div>
          <div className="w-max">
            <h2>Current EMI : ₹ 0</h2>
            <h2>Interent Received : 6%</h2>
          </div>
        </div>
      </div>
      <div className="border rounded-lg border-gray-200">
        <div className="whitespace-nowrap text-center text-xl py-4">
          <h1 className=" underline">Transaction Details</h1>
        </div>
        <div className="flex flex-col w-full overflow-x-auto">
          <div className="py-2 inline-block w-full">
            <table className="min-w-full text-center">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-4"
                  >
                    Transaction Id
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-4"
                  >
                    Sender/Receiver Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-4"
                  >
                    Credit/Debit
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-2 py-4"
                  >
                    Amount(₹)
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900  py-4"
                  >
                    Balance(₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((el) => (
                  <TR {...el} key={el.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default account;
