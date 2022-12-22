import React from "react";

export const Message = ({ message, sender }) => {
  return (
    <div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          Hi <br />
          <span>12:15</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          Hello <br />
          <span>12:16</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          How are you <br />
          <span>12:15</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          I am fine <br />
          <span>12:16</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          Rs 1500 - Sent sequerly <br />
          <span>12:15</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          Hi <br />
          <span>12:15</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          Hello <br />
          <span>12:16</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          How are you <br />
          <span>12:15</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          I am fine <br />
          <span>12:16</span>
        </p>
      </div>
      <div
        className={`message ${sender === "me" ? "mymessage" : "frndmessage"}`}
      >
        <p>
          Rs 1500 - Sent sequerly <br />
          <span>12:15</span>
        </p>
      </div>
    </div>
  );
};
