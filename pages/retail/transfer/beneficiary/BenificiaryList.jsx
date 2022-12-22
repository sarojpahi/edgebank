import React, { useState } from "react";
import Card1 from "../../../../Components/Card1";
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const BenificiaryList = ({ contacts, changeChat }) => {
  const [currentSelected, setCurrentSelected] = useState();
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <div className="userlist scrollconfig">
      {contacts?.map((contact, index) => (
        <div
          key={index}
          onClick={() => changeCurrentChat(index, contact)}
          className={index === currentSelected ? "selected" : ""}
        >
          <Card1 {...contact} name={contact.name} msg={"Reveived"} />
        </div>
      ))}

      {/* <Card1 name="Saroj" msg={"Reveived"} /> */}
    </div>
  );
};
