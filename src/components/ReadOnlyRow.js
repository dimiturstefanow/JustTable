import React from "react";

function ReadOnlyRow({ contact }) {
  return (
    <div>
      <tr>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
      </tr>
    </div>
  );
}

export default ReadOnlyRow;
