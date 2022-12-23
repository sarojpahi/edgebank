import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Message } from "./Message";

export const BenficiaryContainer = ({ currentChat, currentUser, socket }) => {
  const [show, setShow] = useState(true);
  const [sendmsg, setSendMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessgae] = useState();

  const scrollref = useRef();

  const handleChange = (e) => {
    console.log(+e.target.value);
    if (+e.target.value) setShow(true);
    else setShow(false);
    setSendMsg(e.target.value);
  };

  useEffect(async () => {
    if (currentChat) {
      const res = await axios.get("/api/accounts/messages", {
        from: currentUser._id,
        to: currentChat._id,
      });
      setMessages(res.data);
    }
  }, [currentChat]);

  const handleMessage = async () => {
    await axios.post("/api/accounts/messages", {
      text: sendmsg,
      to: currentChat._id,
      from: currentUser._id,
    });
    socket.current.emit("send-msg", {
      text: sendmsg,
      to: currentChat._id,
      from: currentUser._id,
    });
    const msgs = [...messages];
    msgs.push({
      fromself: true,
      message: sendmsg,
    });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessgae({ fromself: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollref.current?.scrollintoView({ behavior: "smooth" });
  }, [messages]);

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
            <Message messages={messages} />
          </div>

          <div className="bg-white w-full h-[60px]">
            <div className="w-full flex items-center h-full justify-between ">
              <input
                className="h-full w-[90%] p-[15px] outline-none"
                type="text"
                placeholder="Enter Amount or Chat"
                value={sendmsg}
                onChange={handleChange}
              />
              <div
                onClick={handleMessage}
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
