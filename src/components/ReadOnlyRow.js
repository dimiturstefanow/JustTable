import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick }) => {
  return (
    <div>
      <tr>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td>
          <button
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
          ></button>
        </td>
      </tr>
    </div>
  );
};

export default ReadOnlyRow;
