import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";

const App = () => {
  const [contacts, setContants] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Adress</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add a Contact</h2>
      <form>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone..."
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
