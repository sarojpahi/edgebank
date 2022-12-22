import React from "react";
const random_bg_color = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
};
const Card1 = ({ avatar, name, time, msg, noti, bg }) => {
  return (
    <div className="w-full border-b border-[#d7dfe5] p-3">
      <div className="w-full flex gap-2 items-center">
        <div className="w-max">
          <div
            className="w-10 h-10 flex justify-center items-center rounded-full text-white "
            style={{ background: `${bg}` }}
          >
            {avatar ? <img src={avatar} alt="avatar" /> : <div>{name[0]}</div>}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div>
            <div>{name}</div>
            {msg ? (
              <div className="text-gray-400 text-sm cardname">{msg}</div>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col justify-between items-center">
            {time ? (
              <div className="text-gray-400 text-sm">{time}</div>
            ) : (
              <div className="text-gray-400 text-sm">time</div>
            )}
            {noti ? (
              <div className="bg-blue-500 w-5 h-5 text-white rounded-full flex justify-center items-center text-xs ">
                {noti}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
