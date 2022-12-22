import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BenificiaryList } from "./BenificiaryList";
import { BenficiaryContainer } from "./BenficiaryContainer";
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
  const [input, setInput] = useState("");

  const [currentChat, setCurrentChat] = useState();

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
    console.log("chat", chat);
  };
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
        <BenficiaryContainer setInput={setInput} currentChat={currentChat} />
      </div>
    </div>
  );
};

export default index;
