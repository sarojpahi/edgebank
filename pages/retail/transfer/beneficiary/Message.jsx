import React from "react";

export const Message = ({ messages }) => {
  return (
    <div>
      {messages?.map((msg) => {
        <div
          className={`message ${
            msg.fromself === "me" ? "mymessage" : "frndmessage"
          }`}
        >
          <p>
            {msg.text} <br />
            {msg.updatedAt ? <span>{msg.updatedAt}</span> : ""}
          </p>
        </div>;
      })}
    </div>
  );
};
