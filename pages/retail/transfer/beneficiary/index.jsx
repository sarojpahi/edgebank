import { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BenificiaryList } from "./BenificiaryList";
import { BenficiaryContainer } from "./BenficiaryContainer";
import axios from "axios";
import { io } from "socket.io-client";

const random_bg_color = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
};
const data = [
  {
    name: "Saroj",
    avatar: "",
    bg: random_bg_color(),
  },
  {
    name: "Pankaj",
    avatar: "",
    bg: random_bg_color(),
  },
  {
    name: "Aman",
    avatar: "",
    bg: random_bg_color(),
  },
];
const index = () => {
  const socket = useRef();
  const [currentChat, setCurrentChat] = useState();
  const [currentUser, setCurrentuser] = useState({
    _id: "12345",
  });
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
    console.log("chat", chat);
  };

  useEffect(() => {
    if (currentUser) {
      socket.current = io("/api/socket");
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  console.log("currentChat", currentChat);
  return (
    <div id="payment">
      <div className="container">
        <div className="leftside">
          <div className="search">
            <div>
              <input type="text" placeholder="Search Beneficiary" />
              <div className="icon">
                <AiOutlineSearch />
              </div>
            </div>
          </div>
          <BenificiaryList changeChat={handleChatChange} contacts={data} />
        </div>
        <BenficiaryContainer
          currentChat={currentChat}
          socket={socket}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default index;
