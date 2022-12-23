import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Message } from "./Message";

export const BenficiaryContainer = ({ setInput, currentChat }) => {
  const [show, setShow] = useState(true);
  const [inputdata, setInputdata] = useState("");
  const handleChange = (e) => {
    console.log(+e.target.value);
    if (+e.target.value) setShow(true);
    else setShow(false);
    setInputdata(e.target.value);
  };
  const handleChat = () => {
    setInput(inputdata);
    setInputdata("");
  };
  return (
    <>
      {currentChat ? (
        <div className="rightside">
          <div className="w-full flex justify-between items-center bg-[#f0f0f0] border-b border-[#d7dfe5] py-2 px-4">
            <div className="w-full flex gap-2 items-center cursor-default">
              <div className="w-max">
                <div
                  className="w-8 h-8 flex justify-center items-center rounded-full  text-white "
                  style={{ background: `${currentChat.bg}` }}
                >
                  {currentChat.avatar ? (
                    <img src={currentChat.avatar} alt="avatar" />
                  ) : (
                    <div>{currentChat.name[0]}</div>
                  )}
                </div>
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <div>{currentChat.name}</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              <HiDotsVertical />
            </div>
          </div>
          <div className="chatbox scrollconfig px-[50px] py-[30px]">
            <Message />
          </div>

          <div className="bg-white w-full h-[60px]">
            <div className="w-full flex items-center h-full justify-between ">
              <input
                className="h-full w-[90%] p-[15px] outline-none"
                type="text"
                placeholder="Enter Amount or Chat"
                value={inputdata}
                onChange={handleChange}
              />
              <div
                onClick={handleChat}
                className="border border-[#d7dfe5] bg-[#d7dfe5] hover:bg-[#c6cdd2] px-3 py-2 rounded-md w-[70px] text-center transition-all duration-300 cursor-pointer mr-2"
              >
                {show ? "Pay" : "Send"}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rightside">
          <div className="chatbox scrollconfig px-[50px] py-[30px]"></div>
        </div>
      )}
    </>
  );
};
