import React from "react";

function EditableRow() {
  return (
    
      <tr>
        <td
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
        ></td>
        <td
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
        ></td>
        <td
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
        ></td>
        <td
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
        ></td>
      </tr>
    
  );
}

export default EditableRow;
